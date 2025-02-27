// 你要镜像的网站.
const upstream = "raw.githubusercontent.com";

// 镜像网站的目录，比如你想镜像某个网站的二级目录则填写二级目录的目录名，镜像 google 用不到，默认即可.
const upstream_path = "/ruan-cat/img-store/main/";

// 镜像站是否有手机访问专用网址，没有则填一样的.
const upstream_mobile = "raw.githubusercontent.com";

// 屏蔽国家和地区.
const blocked_region = ["KP", "SY", "PK", "CU"];

// 屏蔽 IP 地址.
const blocked_ip_address = ["0.0.0.0", "127.0.0.1"];

// 镜像站是否开启 HTTPS.
const https = true;

// 文本替换.
const replace_dict = { $upstream: "$custom_domain", "//raw.githubusercontent.com": "" };

// 以下保持默认，不要动
addEventListener("fetch", (event) => {
	event.respondWith(fetchAndApply(event.request));
});

async function fetchAndApply(request) {
	const region = request.headers.get("cf-ipcountry").toUpperCase();
	const ip_address = request.headers.get("cf-connecting-ip");
	const user_agent = request.headers.get("user-agent");

	let response = null;
	let url = new URL(request.url);
	let url_hostname = url.hostname;

	if (https == true) {
		url.protocol = "https:";
	} else {
		url.protocol = "http:";
	}

	if (await device_status(user_agent)) {
		var upstream_domain = upstream;
	} else {
		var upstream_domain = upstream_mobile;
	}

	url.host = upstream_domain;
	if (url.pathname == "/") {
		url.pathname = upstream_path;
	} else {
		url.pathname = upstream_path + url.pathname;
	}

	if (blocked_region.includes(region)) {
		response = new Response("Access denied: WorkersProxy is not available in your region yet.", {
			status: 403,
		});
	} else if (blocked_ip_address.includes(ip_address)) {
		response = new Response("Access denied: Your IP address is blocked by WorkersProxy.", {
			status: 403,
		});
	} else {
		let method = request.method;
		let request_headers = request.headers;
		let new_request_headers = new Headers(request_headers);

		new_request_headers.set("Host", url.hostname);
		new_request_headers.set("Referer", url.hostname);

		let original_response = await fetch(url.href, {
			method: method,
			headers: new_request_headers,
		});

		let original_response_clone = original_response.clone();
		let original_text = null;
		let response_headers = original_response.headers;
		let new_response_headers = new Headers(response_headers);
		let status = original_response.status;

		new_response_headers.set("access-control-allow-origin", "*");
		new_response_headers.set("access-control-allow-credentials", true);
		new_response_headers.delete("content-security-policy");
		new_response_headers.delete("content-security-policy-report-only");
		new_response_headers.delete("clear-site-data");

		const content_type = new_response_headers.get("content-type");
		if (content_type.includes("text/html") && content_type.includes("UTF-8")) {
			original_text = await replace_response_text(original_response_clone, upstream_domain, url_hostname);
		} else {
			original_text = original_response_clone.body;
		}

		response = new Response(original_text, {
			status,
			headers: new_response_headers,
		});
	}
	return response;
}

async function replace_response_text(response, upstream_domain, host_name) {
	let text = await response.text();

	var i, j;
	for (i in replace_dict) {
		j = replace_dict[i];

		if (i == "$upstream") {
			i = upstream_domain;
		} else if (i == "$custom_domain") {
			i = host_name;
		}

		if (j == "$upstream") {
			j = upstream_domain;
		} else if (j == "$custom_domain") {
			j = host_name;
		}

		let re = new RegExp(i, "g");
		text = text.replace(re, j);
	}
	return text;
}

async function device_status(user_agent_info) {
	var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < agents.length; v++) {
		if (user_agent_info.indexOf(agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
