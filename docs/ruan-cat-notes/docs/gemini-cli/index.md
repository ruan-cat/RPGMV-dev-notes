# gemini cli，AI 编程工具

命令行交互的 AI 编程工具，和 claude code 一样。

- https://github.com/google-gemini/gemini-cli

## 全局安装

```bash
pnpm i -g @google/gemini-cli
```

## 申请 key

新建 Google 项目：

- https://console.cloud.google.com/projectcreate

获取自己的 `gemini API key`：

- https://aistudio.google.com/apikey

## 环境变量

```bash
# gemini-cli 的 api key
# https://github.com/google-gemini/gemini-cli#use-a-gemini-api-key
$env:GEMINI_API_KEY="***"
```

## 相关的 vscode 插件

- https://marketplace.visualstudio.com/items?itemName=Google.geminicodeassist
- https://developers.google.com/gemini-code-assist/docs/overview?hl=zh-cn
