


# node-sass 
node-sass 疑难杂症

## win32-x64-72_binding.node 文件的下载错误问题

参考资料
https://blog.csdn.net/mmm333zzz/article/details/103251155

https://blog.csdn.net/y_k_y/article/details/86535268

https://blog.csdn.net/sinat_36227086/article/details/107412317

github：
https://github.com/pnp/sp-dev-fx-webparts/issues/501

### 具体的处理

#### 本地下载
去node-sass的发行版内，下载安装win32-x64-72_binding.node文件，手动下载到本地。一般就下载到本地的node仓库内。

#### 配制命令
模仿这个命令做配置
npm i node-sass@3.13.1 --sass_binary_path=C:\Users\<username>\Downloads\win32-x64-57_binding.node

#### 结论
最终可以实现定版本的node-sass依赖包安装。