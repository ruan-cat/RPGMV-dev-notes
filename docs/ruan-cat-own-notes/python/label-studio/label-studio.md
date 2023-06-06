# label-studio

- https://github.com/heartexlabs/label-studio

## 快速启动工作流？

```bash
conda activate label-studio
set LABEL_STUDIO_LOCAL_FILES_SERVING_ENABLED=true
set LABEL_STUDIO_LOCAL_FILES_DOCUMENT_ROOT=D:/img-store-4-ai/air-inflation-labeling-1
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
