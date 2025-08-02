# claude code，AI 编程工具

命令行交互的 AI 编程工具，用起来有点古怪。

## 注册 anyrouter 的 API key

- https://anyrouter.top/register?aff=a5MW

去这个站点注册账号，新建一个简单的 token，后面需要配置该 token。

## 全局安装 claude code

```bash
pnpm i -g @anthropic-ai/claude-code
```

## 校验

```bash
claude -v
```

输出版本号即说明安装成功。

## 全局配置基于 anyrouter 环境变量

为 window10 系统全局的 powershell 提供环境变量。

随意找一个终端，根据[官方文档](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/shell/creating-profiles?view=powershell-7.5#adding-customizations-to-your-profile)，在确保安装 vscode 的前提下，运行命令：

```bash
code $profile
```

将在 `C:\Users\你的用户名\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` 内新建配置文件，在此处填写环境变量。

```bash
$env:ANTHROPIC_AUTH_TOKEN = "在anyrouter内新建的token"
$env:ANTHROPIC_BASE_URL = "https://anyrouter.top"
```

### 必须设置成 $env: 的形式

如果设置成 `$path:` 形式的环境变量，那么每次启动 powershell 时，都会出现以下报错：

<<< ./error.log

设置成 `$env:` 环境变量就不出错了。[参考资料](https://zhuanlan.zhihu.com/p/677577008)。

### ANTHROPIC_BASE_URL 不能设置成国内镜像

anyrouter 的官网成可以设置成国内镜像 `https://pmpjfbhq.cn-nb1.rainapp.top` ，但是实测下来这个无法使用。

## 安装 claude code 的 vscode 插件

- https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code
- https://docs.anthropic.com/en/docs/claude-code/ide-integrations

## 因为重装 git 而导致 powershell 无法启动 claude code

我不知道为什么，重新安装 git 就导致 claude code 无法启动了。出现以下报错：

<<< ./error-No_suitable_shell_found.log

根据以下参考资料：

- https://linux.do/t/topic/726007
- https://note.com/syogaku/n/n2fb778a1c7d9

总结出我需要额外配置面向 powershell 的环境变量。考虑到不想在全局的环境变量内写入太多的变量，增加心智负担，故考虑用 `code $profile` 的方式设置全局的 powershell 环境变量。

多设置的环境变量如下：

```bash
$env:SHELL = "D:\dev-evn\git\bin\bash.exe"
$env:CLAUDE_CODE_GIT_BASH_PATH = "D:\dev-evn\git\bin\bash.exe"
```

手动指定 git bash 的路径即可。

## 配置基于 Kimi 的 claude code

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

## 参考资料

其他类似思路的参考资料：

- https://www.bilibili.com/video/BV17ZuqzrE7E/
- https://www.xmsumi.com/detail/1190
