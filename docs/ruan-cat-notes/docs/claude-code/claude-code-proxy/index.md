# claude-code-proxy，更换 claude code 的内部模型

- 仓库教程： https://github.com/musistudio/claude-code-router/blob/main/README_zh.md
- [`【免费Claude Code，免费模型有满血版几成功力？ Claude Code高热度AI编程工具】`](https://www.bilibili.com/video/BV1jGtEzNEAv/)
- https://juejin.cn/post/7528199682431238186

据说是更换 claude code 内部的模型，一个典型的做法是换成 gemini。

试着用该方案，实现数个免费代理商的轮询，确保更换配置时丝滑顺畅。而不是手动切换配置文件的 key 值，很麻烦低效。

## 全局安装

```bash
pnpm i -g @musistudio/claude-code-router
```

## 配置全局的 .claude-code-router/config.json 配置文件

claude-code-proxy 的配置文件在全局的 `.claude-code-router/config.json` 内。

## 基于 gemini-balance-lite 方案的中转商配置

gemini-balance-lite 是一个使用边缘云函数实现的自建 gemini 轮询代理方案，点此阅读[自建教程笔记](../../gemini-cli/gemini-balance-lite/index.md)。
