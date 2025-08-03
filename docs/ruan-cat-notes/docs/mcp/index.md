# mcp

这里记录一些常用的 mcp 配置 json，基于 win 和 npx

这里为了实现泛用性，故罗列出具体的 json 配置。

## apifox-mcp-server

apifox 的官方 mcp，用于链接 apifox 文档。主要用于读取 apifox 接口文档。目前不包括修改 apifox 文档。

```json
{
	"mcpServers": {
		"01s-10wms-clone - API 文档": {
			"command": "cmd",
			"args": ["/c", "npx", "-y", "apifox-mcp-server@latest", "--site-id=5442571"]
		}
	}
}
```

## promptx

据说是一个提示词与 AI 角色管理工具，用起来稍显怪异。故暂时（2025-7-3）不使用。

该工具似乎不能够自定义提示词，预设的前端开发者角色使用的提示词，不一定能够满足业务需求。

```json
{
	"mcpServers": {
		"promptx": {
			"command": "cmd",
			"args": ["/c", "npx", "-y", "-f", "--registry", "https://registry.npmjs.org", "dpml-prompt@latest", "mcp-server"]
		}
	}
}
```

## context7

据说是一个能够索引最新内容的工具。

- https://github.com/upstash/context7

本地版：

```json
{
	"mcpServers": {
		"context7": {
			"command": "cmd",
			"args": ["/c", "npx", "-y", "@upstash/context7-mcp"]
		}
	}
}
```

在线云端版本：

```json
{
	"mcpServers": {
		"context7": {
			"url": "https://mcp.context7.com/mcp"
		}
	}
}
```

## Fetch MCP Server

主动访问 url，获取信息。特别是主动获取 url 提供的 md 信息。

- https://smithery.ai/server/fetch-mcp

```json
{
	"mcpServers": {
		"fetch-mcp": {
			"command": "cmd",
			"args": [
				"/c",
				"npx",
				"-y",
				"@smithery/cli@latest",
				"run",
				"fetch-mcp",
				"--key",
				"需要动态生成的key",
				"--profile",
				"需要动态生成的值"
			]
		}
	}
}
```

## 个人全局通用的 mcp.json

尽量实现频繁更新与配置：

::: details

<<< ./mcp.json

:::
