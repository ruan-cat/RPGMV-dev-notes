# claude code，AI 编程工具

命令行交互的 AI 编程工具，用起来有点古怪。

## 全局安装 claude code

```bash
pnpm i -g @anthropic-ai/claude-code
```

## 校验

```bash
claude -v
```

输出版本号即说明安装成功。

## 性能基于供应商的 url

经过这段时间的使用，claude code 的性能主要取决于中转商提供的 url 性能。不同的中转商，提供的性能和额度都各不相同。

## 全局配置 window powershell 的环境变量

以下的方案，都需要在 window 的 powershell 内配置全局的环境变量，使用以下命令设置当前电脑的全局环境变量。

```bash
code $profile
```

将在 `C:\Users\你的用户名\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` 内新建配置文件，在此处填写各个供应商提供的环境变量即可。

### 环境变量必须设置成 $env: 的形式

如果设置成 `$path:` 形式的环境变量，那么每次启动 powershell 时，都会出现以下报错：

<<< ./error.log

设置成 `$env:` 环境变量就不出错了。[参考资料](https://zhuanlan.zhihu.com/p/677577008)。

## 相关的 vscode 插件

可以通过安装 vscode 插件来实现快速启动 claude code。

- https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code
- https://docs.anthropic.com/en/docs/claude-code/ide-integrations

## 因为重装 git 而导致 powershell 无法启动 claude code

我不知道为什么，重新安装 git 就导致 claude code 无法启动了。出现以下报错：

<<< ./error-No_suitable_shell_found.log

根据以下参考资料：

- https://linux.do/t/topic/726007
- https://note.com/syogaku/n/n2fb778a1c7d9
- 官方教程： https://docs.anthropic.com/zh-CN/docs/claude-code/setup#windows-设置

总结出我需要额外配置面向 powershell 的环境变量。考虑到不想在全局的环境变量内写入太多的变量，增加心智负担，故考虑用 `code $profile` 的方式设置全局的 powershell 环境变量。

多设置的环境变量如下：

```bash
$env:SHELL = "D:\dev-evn\git\bin\bash.exe"
$env:CLAUDE_CODE_GIT_BASH_PATH = "D:\dev-evn\git\bin\bash.exe"
```

手动指定 git bash 的路径即可。

## 基于 anyrouter.top 中转商的配置

- 注册账号并获得 key： https://anyrouter.top/register?aff=a5MW

```bash
$env:ANTHROPIC_AUTH_TOKEN = "在anyrouter内新建的token"
$env:ANTHROPIC_BASE_URL = "https://anyrouter.top"
```

### 注意事项

1. **ANTHROPIC_BASE_URL 不能设置成国内镜像**： anyrouter 的官网成可以设置成国内镜像 `https://pmpjfbhq.cn-nb1.rainapp.top` ，但是实测下来这个无法使用。

## 基于 Kimi 官方网站的配置

- `https://aigc.bar/Claude教程/2025/07/12/kimi-k2-claude-code-guide`

本质上是配置由 Kimi 提供的 token 和 baseUrl，模仿上面的配置，如下：

```bash
$env:ANTHROPIC_AUTH_TOKEN = "在kimi官网内新建的token"
$env:ANTHROPIC_BASE_URL = "https://api.moonshot.cn/v1/messages"
```

### 对 ANTHROPIC_BASE_URL 有疑惑

- https://platform.moonshot.cn/docs/guide/agent-support#配置-anthropic-api

该文档称要配置成 `https://api.moonshot.cn/anthropic` 。

### 月之暗面速度太慢

目前，我使用国内`月之暗面`提供的 url 地址，响应速度太慢。故不继续使用该方案。

## 基于 claudeyy.com 中转商的配置

- https://www.claudeyy.com
- [【炸裂！Cursor 禁止中国大陆地区访问后！ClaudeCode 崛起了！无限制不限次数使用！】](https://www.bilibili.com/video/BV12NhpzTEY9/)

```bash
$env:ANTHROPIC_AUTH_TOKEN = "sk-**"
$env:ANTHROPIC_BASE_URL = "https://www.claudeyy.com/api"
```

我没有花钱购买套餐，所以该方案只能暂时保留废弃。

## 基于 dmxapi.cn 中转商的配置

- https://www.dmxapi.cn/ClaudeCode
- 配置文档： http://doc.dmxapi.cn/claude-code.html
- 获取 key： https://www.dmxapi.cn/token

```bash
$env:ANTHROPIC_AUTH_TOKEN = "sk-**"
$env:ANTHROPIC_BASE_URL = "https://www.dmxapi.cn"
```

这是一个国内中转商，可以付费，确实能用，但是用 token 确实太多了。

## 基于 aicodemirror.com 中转商的配置

- 获取 key： https://www.aicodemirror.com/dashboard/apikeys
- window 环境不生效需要手动删除文件重置： https://www.aicodemirror.com/dashboard/official-installation/windows

```bash
$env:ANTHROPIC_AUTH_TOKEN = "sk-**"
$env:ANTHROPIC_API_KEY = "sk-**"
$env:ANTHROPIC_BASE_URL = "https://api.aicodemirror.com/api/claudecode"
```

### 注意事项

1. 这个供应商提供**免费额度**。
2. 不能使用任何形式的翻墙。这个站点的 baseUrl 都不能翻墙，不能开启任何翻墙，TUN 不能开启，任何节点都不能选取。
3. 需要额外多配置一个 `ANTHROPIC_API_KEY` ，这和其他供应商有所不同。

## 参考资料

其他类似思路的参考资料：

- https://www.bilibili.com/video/BV17ZuqzrE7E/
- https://www.xmsumi.com/detail/1190

## 拓展待办

1. 阅读官方文档、掌握核心概念： https://docs.anthropic.com/zh-CN/home
2. 中文版、electron 版本的 claudia 应用： https://github.com/Haleclipse/Claudiatron
3. 更换 claude code 的代理，实现免费站点的额度轮询： https://github.com/musistudio/claude-code-router/blob/main/README_zh.md
