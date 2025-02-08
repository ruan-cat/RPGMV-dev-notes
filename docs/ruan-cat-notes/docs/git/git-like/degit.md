---
order: 2
---

# degit

在使用 degit 时，出现克隆失败的情况。很普遍。

## NODE_TLS_REJECT_UNAUTHORIZED 方案

- https://github.com/solidjs/solid/issues/1050#issuecomment-2241699257

该方案

## HTTPS_PROXY 环境变量方案

- https://github.com/Rich-Harris/degit/issues/143#issuecomment-1172888955

PowerShell

```bash
$env:HTTPS_PROXY="http://127.0.0.1:10809"
```

cmd

```bash
set https_proxy=http://127.0.0.1:10809
```

## 全局的解决方案

设置 `$env:HTTPS_PROXY` 变量的方式是有效的，但是该方案仅仅只能临时地为当前 powershell 设置环境变量，不是每一个 powershell 都是有效的。

目前考虑使用设置全局环境变量的方式，解决此问题。

![2024-12-09-08-06-57](https://gh-img-store.ruan-cat.com/img/2024-12-09-08-06-57.png)
