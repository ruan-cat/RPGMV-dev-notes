

# 现象
运行HBuilder X时也出现了类似的错误。如下图：
![img](https://raw.githubusercontent.com/RuanZhongNan/img-store/main/img/image-20220727143320834.png)

错误关键词：
```
c:\ws\src\util-inl.h:372: Assertion `!(n > 0) || (ret != nullptr)' failed.
```



# 解决方案
我自己都迷迷糊糊的处理了此问题。只能猜测是HBuilder X本身自带的node有问题，需要替换。这里我猜测是32位的不合适，需要手动换成64位。

## 找到目标并确认版本号
在路径HBuilderX\plugins\node内，查询node.exe的版本，我这里是12.22.1.0。如下图：
![image-20220805151441567](D:\common-software\typora-img-temp-store\image-20220805151441567.png)


## 到官网内下载node.exe
我这里需要下载window环境，64位的node.exe。这里选择压缩包形式的文件来下载。如下图所示：
![image-20220805151813469](D:\common-software\typora-img-temp-store\image-20220805151813469.png)

下载链接为：[https://nodejs.org/download/release/](https://nodejs.org/download/release/)


## 直接替换node.exe
解压缩安装包，并直接替换node.exe文件。选择的文件如下图所示：
![image-20220805152040764](D:\common-software\typora-img-temp-store\image-20220805152040764.png)

我们仅替换一个node.exe即可。


## 运行项目
至此已解决问题。运行成功。
![image-20220805152203178](D:\common-software\typora-img-temp-store\image-20220805152203178.png)
