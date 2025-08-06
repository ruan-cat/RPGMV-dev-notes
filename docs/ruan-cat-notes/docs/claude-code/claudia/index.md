# claudia，claude code 的可视化桌面应用

- https://claudiacode.com/
- https://github.com/getAsterisk/claudia
- https://www.aivi.fyi/aiagents/introduce-Claudia
- [`【🚀Claudia让你丢掉Cursor告别命令行！Claude Code终于有GUI了！专为Claude Code打造最强可视化界面保姆级教程！可视化项目管理】`](https://www.bilibili.com/video/BV16D34zpEGu/)

## 本地运行项目，出错

::: details 缺少 ico 文件

<<< ./error.log

:::

相关 issue：

- https://github.com/getAsterisk/claudia/issues/256

解决方案：

- https://github.com/getAsterisk/claudia/issues/188#issuecomment-3111755644

```bash
npx @tauri-apps/cli icon .\src-tauri\icons\icon.png
```
