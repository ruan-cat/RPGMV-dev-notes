# claude code，AI 编程工具

命令行交互的 AI 编程工具，用起来有点古怪。

## 注册 API key

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

## 全局筹备环境变量

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
