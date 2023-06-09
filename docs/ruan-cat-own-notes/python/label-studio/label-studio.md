# label-studio

- https://github.com/heartexlabs/label-studio
- https://blog.csdn.net/qq_36670734/article/details/122510886

## 不同业务下的快速启动命令

### try1

```bash
conda activate label-studio
cd D:\code\web-dev-work-place\github-desktop-store\Image-Downloader\images\person-drop-litter\try-1

# v1 s
set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
set LOCAL_FILES_SERVING_ENABLED=true

# set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=True
# set LOCAL_FILES_SERVING_ENABLED=True

set LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=D:/code/web-dev-work-place/github-desktop-store/Image-Downloader/images/person-drop-litter/try-1
# v1 e

# v2 s
conda env config vars set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
conda env config vars set LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=D:/code/web-dev-work-place/github-desktop-store/Image-Downloader/images/person-drop-litter/try-1
conda env config vars list
conda activate label-studio
# v2 e

echo %LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED%
echo %LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT%

label-studio --data-dir=D:/code/web-dev-work-place/github-desktop-store/Image-Downloader/images/person-drop-litter/try-1/label-studio-temp-proj --username=root@root.com --password=root@root.com
```

--allow-serving-local-files 这个命令不能用 出错了

## 项目启动命令

### v1

尝试用 window 环境变量的方式设置存储路径。效果不好。无反应。

```bash
conda activate label-studio
set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
set LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=D:/img-store-4-ai/air-inflation-labeling-1
label-studio
```

### v2

用 --data-dir 命令来设置存储路径。可用。

```bash
conda activate label-studio
label-studio --data-dir=D:/temp-label-studio-proj/label-studio-db
```

### v3 ？

增加 --label-config 配置文件命令。

```bash
conda activate label-studio
label-studio --data-dir=D:/temp-label-studio-proj/label-studio-db --label-config=D:/temp-label-studio-proj/label-studio-db/config.xml
```

该命令效果不好。配置的格式化内容没有直接被识别进去。暂时不考虑该配置了。毕竟现在确实没有复杂标签关系需要处理。

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

经过一系列的尝试，发现上述做法在 anaconda 启动的项目内无效，无意义。针对 anaconda 环境，设置环境变量要另外处理。

## 针对 anaconda 启动的 label-studio 本地项目设置基于 anaconda 环境的环境变量

参考资料

- https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#setting-environment-variables

### 设置

在 Anaconda Powershell Prompt，不能用以下的 window 命令来设置环境变量。无效。

```bash
set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
```

要用 conda 提供的命令，比如：

```bash
conda env config vars set my_var=value
```

设置完环境变量后，应该重新激活环境。具体看[官方文档](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#setting-environment-variables)。

### 查看

在 Anaconda Powershell Prompt，不能用以下的 window 命令来查看环境变量。无效。

```bash
echo %LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED%
```

要用 conda 提供的命令：

```bash
conda env config vars list
```

尽管官方文档说了可以用 echo 命令来查看，但是在我这里就是无效。

## 设置本地存储

错误：

```bash
[ErrorDetail(string='Path D:\\img-store-4-ai\\air-inflation-labeling-1\\images must start with LOCAL_FILES_DOCUMENT_ROOT=C:\\ and must be a child, e.g.: C:\\abc', code='invalid')]
```

经过一系列的尝试，处理方式如下：

conda activate label-studio

## 尝试变更项目文件默认的存储路径

目前项目存储的路径：

```bash
C:\Users\ruanzhongnan\AppData\Local\label-studio\label-studio\media\upload\1
```

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

## 自定义标签快捷键

- https://labelstud.io/tags/label.html#Parameters
- https://labelstud.io/guide/setup.html#Add-a-labeling-config-from-the-command-line

实际工作时，发现这些标签行为控制起来很麻烦。这里可以自定义标签按钮组件的行为，自定义打标 UI。自定义功能。

这里自定义的是快捷键。对`<Label>`组件的 hotkey props 做设置。

## --label-config 自定义标签配置 ？

- https://labelstud.io/guide/start.html

尝试了一次，效果不好。

## 数据切割？

我现在可以按照 yolo 格式直接打包出所需的文件了。能否额外实现指定格式的数据分割？

目前没有发现 label-studio 可以直接实现文件拆分的功能，暂时借助 chatGPT 生成的代码段实现业务。

## 学习待办
