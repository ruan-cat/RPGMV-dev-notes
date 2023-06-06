# label-studio

- https://github.com/heartexlabs/label-studio
- https://blog.csdn.net/qq_36670734/article/details/122510886

## 快速启动工作流？

### v1

```bash
conda activate label-studio
set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
set LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=D:/img-store-4-ai/air-inflation-labeling-1
label-studio
```

### v2

```bash
conda activate label-studio
label-studio
```

## 快速激活本地的 anaconda 环境

```bash
conda activate label-studio
```

## 设置本地环境变量 window

- https://labelstud.io/guide/storage.html#Prerequisites-2
- https://labelstud.io/guide/start.html#Set_environment_variables

```bash
set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
echo %LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED%

set LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=D:/img-store-4-ai/air-inflation-labeling-1/images
echo %LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT%
```

发现在每次打开的按 anaconda 终端中，上述的环境变量在关闭终端时，就失效了。不清楚该命令是不是局部的，临时设置环境变量。

D:\img-store-4-ai\air-inflation-labeling-1\images

### 设置本地存储

错误：

```bash
[ErrorDetail(string='Path D:\\img-store-4-ai\\air-inflation-labeling-1\\images must start with LOCAL_FILES_DOCUMENT_ROOT=C:\\ and must be a child, e.g.: C:\\abc', code='invalid')]
```

LOCAL_FILES_DOCUMENT_ROOT 是什么环境变量？

## 目前项目存储的路径

C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio\media\upload\1

注意到每次启动 label-studio 时，都是出现以下内容。东西总是存储在 C 盘。

```bash
Can't load sqlite3.dll from current directory
=> Database and media directory: C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio
=> Static URL is set to: /static/
=> Database and media directory: C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio
=> Static URL is set to: /static/
```

可能的解决方案：

- https://blog.csdn.net/qq_36670734/article/details/122510886

## 尝试变更项目文件默认的存储路径

根据参考资料，打算在启动时增加该命令，指定数据库存储路径，再手动的新建项目：

```bash
label-studio --data-dir=D:/temp-label-studio-proj/label-studio-db
```

如图所示：存储路径有改动：

![2023-06-06-13-55-12](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-06-06-13-55-12.png)

进入后，发现之前注册的账户不行了。准备重新新建一个账户。但是不清楚是不是真正意义上的注册。

经过自测，发现不填写上述路径时，就会进入默认在 C 盘的目录。以后按照命令启动时，应该提供明确的数据存储路径。

只要是出现新的数据存储路径，就会需要创建一个新的账号。可以推测这个账号是局部本地账号。如果未来实现了部署 label-studio 到服务器，那么应该要有严格的账号管理。

关于账号管理的细节，等未来实现了 label-studio 服务器部署之后再说吧。

## 学习待办
