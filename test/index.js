#!/usr/bin/env node
import {
	existsSync as p,
	readFileSync as d,
	writeFileSync as I,
} from "node:fs";
import { resolve as a, dirname as f } from "node:path";
import { cac as T } from "cac";
import { spawnSync as c } from "node:child_process";
import { get as C } from "node:https";
import D from "semver";
import { createRequire as N } from "node:module";
const O = [
		"@vue/compiler-core",
		"@vue/compiler-dom",
		"@vue/compiler-sfc",
		"@vue/compiler-ssr",
		"@vue/devtools-api",
		"@vue/reactivity",
		"@vue/reactivity-transform",
		"@vue/runtime-core",
		"@vue/runtime-dom",
		"@vue/server-renderer",
		"@vue/shared",
		"vue",
		"vue-router",
	],
	j = ["@vuepress/bundler-vite", "@vuepress/bundler-webpack", "vuepress"],
	F = /^@vuepress\/(?:plugin|theme)-/,
	G = ["vuepress-webpack", "vuepress-vite"],
	L = [
		"@vuepress/cli",
		"@vuepress/client",
		"@vuepress/core",
		"@vuepress/markdown",
		"@vuepress/shared",
		"@vuepress/utils",
	],
	U = /^(@.*\/)?vuepress-plugin-/,
	J = /^(@.*\/)?vuepress-theme-/,
	{ version: V } = N(import.meta.url)("vp-update/package.json"),
	k = "https://registry.npmmirror.com/",
	P = (e) => {
		if (
			e === "yarn" &&
			!c(`${e} --version`, { shell: !0 }).stdout.toString().startsWith("1")
		)
			return c(`${e} config get npmRegistryServer`)
				.stdout.toString()
				.replace(/\/?$/, "/");
		if (e === "bun" && !c(`${e} --version`, { shell: !0 }).status)
			return (
				console.warn(
					"bun does not support get registry at the time, using npm global registry instead"
				),
				c("npm config get registry", { shell: !0 })
					.stdout.toString()
					.replace(/\/?$/, "/")
			);
		const n = c(`${e} config get registry`, { shell: !0 })
				.stdout.toString()
				.replace(/[\r\n]/g, ""),
			r = n.replace(/\/?$/, "/");
		return console.log("in ", n, r), r;
	},
	H = (e) => {
		const n = P(e);
		/https:\/\/registry\.npm\.taobao\.org\/?/.test(n) &&
			(console.error(
				"npm.taobao.org is no longer available, resetting it to npmmirror.com"
			),
			e === "yarn"
				? c(`${e} config set npmRegistryServer  ${k}`, { shell: !0 })
				: e === "bun"
				? c(`npm config set registry ${k}`, { shell: !0 })
				: c(`${e} config set registry ${k}`, { shell: !0 }));
	},
	E = new Map(),
	i = new Map(),
	y = "package.json",
	A = "package-lock.json",
	$ = "yarn.lock",
	R = "pnpm-lock.yaml",
	x = "bun.lockb",
	K = (e) => {
		try {
			const n = c(`${e === "yarn1" ? "yarn" : e} --version`, { shell: !0 });
			return e === "yarn1"
				? n.stdout.toString().startsWith("1")
				: n.status === 0;
		} catch {
			return !1;
		}
	},
	w = (e) => {
		const n = `global:${e}`,
			r = E.get(n);
		return r !== void 0 ? r : K(e) ? (E.set(n, !0), !0) : !1;
	},
	W = (e = process.cwd(), n = !0) => {
		const r = `package:${e}`,
			t = i.get(r);
		if (t !== void 0) return t;
		if (p(a(e, y))) {
			const { packageManager: s } = JSON.parse(d(a(e, y), "utf-8"));
			if (s) {
				const o = s.split("@")[0];
				return i.set(r, o), o;
			}
		}
		if (n) {
			let s = e;
			for (; s !== f(s); )
				if (((s = f(s)), p(a(e, y)))) {
					const { packageManager: o } = JSON.parse(d(a(e, y), "utf-8"));
					if (o) {
						const m = o.split("@")[0];
						return i.set(r, m), m;
					}
				}
		}
		return null;
	},
	Y = (e = process.cwd(), n = !0) => {
		const r = `local:${e}`,
			t = i.get(r);
		if (t !== void 0) return t;
		if (p(a(e, R))) return i.set(r, "pnpm"), "pnpm";
		if (p(a(e, $))) {
			const s = d(a(e, $), { encoding: "utf-8" }).includes("yarn lockfile v1")
				? "yarn1"
				: "yarn";
			return i.set(r, s), s;
		}
		if (p(a(e, x))) return i.set(r, "bun"), "bun";
		if (p(a(e, A))) return i.set(r, "npm"), "npm";
		if (n) {
			let s = e;
			for (; s !== f(s); ) {
				if (((s = f(s)), p(a(s, R)))) return i.set(r, "pnpm"), "pnpm";
				if (p(a(s, $))) {
					const o = d(a(s, $), { encoding: "utf-8" }).includes(
						"yarn lockfile v1"
					)
						? "yarn1"
						: "yarn";
					return i.set(r, o), o;
				}
				if (p(a(s, x))) return i.set(r, "bun"), "bun";
				if (p(a(s, A))) return i.set(r, "npm"), "npm";
			}
		}
		return null;
	},
	q = (e = process.cwd(), n = !0) =>
		W(e, n) ||
		Y(e, n) ||
		(w("pnpm") ? "pnpm" : w("yarn") ? "yarn" : w("bun") ? "bun" : "npm"),
	g = async (e, n, r = "auto", t = 3) => {
		const s = P(e);
		console.log("?? registry ", s);
		const o = `${s}-/package/${n}/dist-tags`,
			m = () =>
				new Promise((v, l) => {
					C(o, (u) => {
						if (u.statusCode === 200) {
							let S = "";
							u.on("data", (M) => (S += M)),
								u.on("end", () => {
									v(JSON.parse(S));
								});
						} else l();
					}).on("error", l);
				});
		let h = 1;
		do {
			const v = await m().catch(() => {
				console.log(`Get ${n} version failed, [${h}/${t}]`);
			});
			if (v) {
				const { next: l, latest: u } = v;
				return r === "latest" ? u : r === "next" || (l && D.gt(l, u)) ? l : u;
			}
			h++;
		} while (h <= t);
		throw new Error(`Failed to get ${n} version!
 Can not get version info from ${o}`);
	},
	_ = async (e, n) => {
		await Promise.all(
			Object.keys(n).map(async (r) => {
				G.includes(r)
					? (console.error(
							`Removing "${r}" from your dependencies, as it's no longer maintained.`
					  ),
					  delete n[r])
					: L.includes(r)
					? (console.error(
							`"${r}"is deprecated, please remove it from your dependencies and import "${r.substring(
								1
							)}" from "vuepress" directly.`
					  ),
					  (n[r] = `^${await g(e, r, "next")}`))
					: O.includes(r)
					? (n[r] = `^${await g(e, r, "latest")}`)
					: j.includes(r)
					? (n[r] = await g(e, r, "next"))
					: F.test(r)
					? (n[r] = await g(e, r, "next"))
					: (U.test(r) || J.test(r)) && (n[r] = await g(e, r, "auto"));
			})
		);
	},
	b = T("vp-update");
b
	.command("[dir]", "Update VuePress project")
	.usage(
		"pnpm dlx vp-update [dir] / npx vp-update [dir] / bunx vp-update [dir]"
	)
	.example("docs")
	.action(async (e = "") => {
		console.log("Bumping deps...");
		const n = a(process.cwd(), e),
			r = a(n, "package.json");
		if (!p(r))
			return new Error(`No package.json found in ${e || "current dir"}`);
		const t = q();
		H(t);
		const s = d(r, { encoding: "utf-8" }),
			o = JSON.parse(s);
		await Promise.all([
			o.dependencies ? _(t, o.dependencies) : Promise.resolve(),
			o.devDependencies ? _(t, o.devDependencies) : Promise.resolve(),
		]),
			I(
				r,
				`${JSON.stringify(o, null, 2)}
`
			),
			console.log("Install deps..."),
			c(`${t} install`, { shell: !0, stdio: "inherit" }),
			console.log("Upgrading deps..."),
			c(
				t === "pnpm"
					? "pnpm update"
					: t === "yarn1"
					? "yarn upgrade"
					: t === "yarn"
					? "yarn up"
					: t === "bun"
					? "bun update"
					: "npm update",
				{ shell: !0, stdio: "inherit" }
			);
	}),
	b.help(() => [
		{
			title:
				"pnpm dlx vp-update [dir] / npx vp-update [dir] / bunx vp-update [dir]",
			body: "Update VuePress project in [dir]",
		},
	]),
	b.version(V),
	b.parse();
//# sourceMappingURL=index.js.map
