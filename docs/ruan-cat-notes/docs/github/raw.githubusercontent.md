# 静态文件资源加载方案

github 的资源可以使用 `https://raw.githubusercontent.com/` 的方式加载静态文件资源：

模板案例如下：

```ts
const t = `https://raw.githubusercontent.com/${github用户名}/${github仓库名称}/${分支名称}/${...src文件路径}.${文件格式}`;
```

## 例子 1

- https://raw.githubusercontent.com/harizumi/fossil-MV-MZ-jp/main/FOSSIL.js

说明用户 harizumi 在名为 fossil-MV-MZ-jp 的仓库内，在 main 主分支内的根目录路径下，有一个 FOSSIL.js 文件。这是一个可以直接访问的 js 代码。

## 例子 2

- https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20220815124718084.png

说明用户 RuanZhongNan 在名为 img-store 的仓库内，在 main 主分支下，存在 /img/image-20220815124718084.png 路径下的文件。这是一个可以直接访问的图片文件。

## 参考资料

- [《csdn.使用 jsDelivr 给 GitHub 接入免费的 CDN》](https://blog.csdn.net/nineya_com/article/details/103498700)
