# rust，语言

## 初始化 window 的 rust 环境

- https://blog.csdn.net/xinyingzai/article/details/135459640
- https://www.sunzhongwei.com/windows-11-install-rust-with-china-mirror

### 安装 Microsoft C++ 生成工具

按照[官网](https://www.rust-lang.org/zh-CN/tools/install)要求，安装[`Microsoft C++ 生成工具`](https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/)。

点此按钮下载。

![2025-08-06-09-09-17](https://gh-img-store.ruan-cat.com/img/2025-08-06-09-09-17.png)

### 工作负荷

- https://juejin.cn/post/6905023297709146119

![2025-08-06-09-15-46](https://gh-img-store.ruan-cat.com/img/2025-08-06-09-15-46.png)

只选择这一个

![2025-08-06-09-21-29](https://gh-img-store.ruan-cat.com/img/2025-08-06-09-21-29.png)

### 选择语言包

![2025-08-06-09-22-58](https://gh-img-store.ruan-cat.com/img/2025-08-06-09-22-58.png)

### Visual Studio 二次安装时共享组件、工具和 SDK 安装位置不能更改

如果你不是二次安装，请跳过此步骤。

如图，无法更改：

![2025-08-06-10-03-26](https://gh-img-store.ruan-cat.com/img/2025-08-06-10-03-26.png)

按照教程要求；

- https://zhuanlan.zhihu.com/p/612259470

`计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\VisualStudio\Setup`

![2025-08-06-10-04-04](https://gh-img-store.ruan-cat.com/img/2025-08-06-10-04-04.png)

更改注册表后，内容有效。

![2025-08-06-10-05-59](https://gh-img-store.ruan-cat.com/img/2025-08-06-10-05-59.png)

### 安装 rustup-init.exe

按照官网，安装完 `Microsoft C++ 生成工具` 之后，就要下载并运行 `rustup-init.exe` 。

![2025-08-06-10-12-33](https://gh-img-store.ruan-cat.com/img/2025-08-06-10-12-33.png)

### 配置全局的 rust 环境变量

<!-- TODO: -->

- https://www.sunzhongwei.com/windows-11-install-rust-with-china-mirror

```bash
$ENV:RUSTUP_DIST_SERVER='https://mirrors.ustc.edu.cn/rust-static'
$ENV:RUSTUP_UPDATE_ROOT='https://mirrors.ustc.edu.cn/rust-static/rustup'
```
