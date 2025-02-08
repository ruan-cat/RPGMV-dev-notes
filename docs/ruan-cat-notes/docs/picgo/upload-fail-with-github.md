# 用 github 上传图片失败

打开本地的 `C:\Users\pc\.picgo\picgo.log` 文件。（举例说明）

::: details 报错日志

```bash
2024-10-22 23:28:46 [PicGo INFO] Before transform
2024-10-22 23:28:46 [PicGo INFO] Transforming... Current transformer is [path]
2024-10-22 23:28:46 [PicGo INFO] Before upload
2024-10-22 23:28:46 [PicGo INFO] beforeUploadPlugins: vsPicgoRenamePlugin running
2024-10-22 23:28:46 [PicGo INFO] Uploading... Current uploader is [github]
2024-10-22 23:28:47 [PicGo WARN] failed
2024-10-22 23:28:47 [PicGo ERROR]
------Error Stack Begin------
StatusCodeError: 307 - {"message":"Moved Permanently","url":"https://api.github.com/repositories/503268809/contents/img/2024-10-22-23-28-46.png","documentation_url":"https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api#follow-redirects"}
    at new StatusCodeError (F:\store\vscode\extensions\spades.vs-picgo-2.1.6\node_modules\request-promise-core\lib\errors.js:32:1)
    at Request.plumbing.callback (F:\store\vscode\extensions\spades.vs-picgo-2.1.6\node_modules\request-promise-core\lib\plumbing.js:104:1)
    at Request.RP$callback [as _callback] (F:\store\vscode\extensions\spades.vs-picgo-2.1.6\node_modules\request-promise-core\lib\plumbing.js:46:1)
    at Request.self.callback (F:\store\vscode\extensions\spades.vs-picgo-2.1.6\node_modules\request\request.js:185:1)
    at Request.emit (node:events:519:28)
    at Request.<anonymous> (F:\store\vscode\extensions\spades.vs-picgo-2.1.6\node_modules\request\request.js:1154:1)
    at Request.emit (node:events:519:28)
    at IncomingMessage.<anonymous> (F:\store\vscode\extensions\spades.vs-picgo-2.1.6\node_modules\request\request.js:1076:1)
    at Object.onceWrapper (node:events:633:28)
    at IncomingMessage.emit (node:events:531:35)
    at endReadableNT (node:internal/streams/readable:1696:12)
    at processTicksAndRejections (node:internal/process/task_queues:82:21)
-------Error Stack End-------
```

:::

## 情况分析

注意到 `Moved Permanently` 字样，是 [301 永久重定向](https://blog.csdn.net/taipoucha5799/article/details/109490041)。

怀疑是 github 用户重命名，导致部分接口请求失败。我之前改过一次用户名。

## 更新账号

::: details 及时更新 github 用户名

![及时更新github用户名](https://gh-img-store.ruan-cat.com/img/2024-10-23-00-11-45.png)

:::

更新后可以正常上传了。
