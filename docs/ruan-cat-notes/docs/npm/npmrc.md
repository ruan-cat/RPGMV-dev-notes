# .npmrc

.npmrc 是 node 项目针对于 npm 包管理器的配置文件，可以配置 npm 命令行的一些变量，也可以配置依赖包下载的镜像

## 淘宝镜像

淘宝镜像变了，值得注意：
如下参考：
https://github.com/xlei1123/please-update-cnpm#please-update-cnpm

npm 太慢， 淘宝 npm 镜像使用方法
https://blog.csdn.net/quuqu/article/details/64121812

https://npmmirror.com/

## nw 的淘宝镜像

https://registry.npmmirror.com/binary.html?path=nwjs/

## .npmrc 常见配置

```bash
# npm代理配置，用于实现依赖包的快速安装 这里默认总是从淘宝镜像安装
registry=https://registry.npm.taobao.org/

hoist=true

sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=http://cnpmjs.org/downloads/

electron_mirror=https://mirrors.huaweicloud.com/electron/
sqlite3_binary_host_mirror=https://foxgis.oss-cn-shanghai.aliyuncs.com/
profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/
chromedriver_cdnurl=https://cdn.npm.taobao.org/dist/chromedriver/
```
