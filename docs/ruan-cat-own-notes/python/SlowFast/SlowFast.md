# SlowFast

## 参考资料

### 官方安装依赖清单表

https://github.com/facebookresearch/SlowFast/blob/main/INSTALL.md

### window 环境安装

- [Win10 配置 SlowFast 全过程并使用 slowfast 进行视频行为识别检测](https://zhuanlan.zhihu.com/p/484637273)

- [[SlowFast 代码复现] 并用自己的视频进行检测](https://blog.csdn.net/weixin_43720054/article/details/126051206)

- [【SlowFast 复现】SlowFast Networks for Video Recognition 复现代码 使用自己的视频进行 demo 检测](https://blog.csdn.net/WhiffeYF/article/details/113527759)

- [三分钟快速安装 facebookresearch SlowFast](https://blog.csdn.net/WhiffeYF/article/details/124727403)

- [Windows10 下 SlowFast 环境安装和运行](https://blog.csdn.net/weixin_39377720/article/details/121403411)

- [行为识别 SlowFast 笔记--环境配置和 Demo 展示](https://blog.csdn.net/weixin_43863869/article/details/129801523)

别人是怎么做的？别人曾遇到了什么坑？别人怎么解决的？

在 window10、云平台、linux 等平台下，运行 slowfast 程序的环境是否正确？

### linux 环境安装

## 新建一个全新的 anaconda 环境

```bash
conda create -n slowfast python=3.8
```

## 安装依赖

### pytorch

```bash
conda install pytorch==1.8.0 torchvision==0.9.0 torchaudio==0.8.0 cudatoolkit=11.1 -c pytorch -c conda-forge
```

### fvcore √

参考资料

- https://blog.csdn.net/weixin_43720054/article/details/126051206#t6
- https://github.com/facebookresearch/fvcore#install

```bash
git clone https://github.com/facebookresearch/fvcore
cd fvcore
python setup.py install
```

[这篇文章](https://blog.csdn.net/hxxjxw/article/details/106433907)称 pip 会下载额外所需的子依赖。根据[官方文章](https://pip.pypa.io/en/stable/cli/pip_install/#description)所述，这里选择本地克隆项目，然后让 pip 自己安装指定包依赖，并首先索引到本地目录做安装。

```bash
git clone https://github.com/facebookresearch/fvcore
pip install -e fvcore
```

使用正确的克隆地址：

```bash
git clone https://github.com/facebookresearch/fvcore.git
pip install -e fvcore
```

### torchvision √

### simplejson √

```bash
pip install simplejson
```

### GCC >= 4.9 √

- [windows 下安装 gcc12（mingw-w64）](https://zhuanlan.zhihu.com/p/565370467)

### PyAV √

```bash
conda install av -c conda-forge
```

这里走清华镜像，故命令为：

```bash
conda install av
```

速度太慢，最终选择 pip

```bash
pip install av
```

### iopath √

```bash
pip install -U iopath
```

### psutil √

```bash
pip install psutil
```

### OpenCV √

```bash
pip install opencv-python
```

pip install tensorboard
pip install pytorchvideo
pip install moviepy
pip install pytorchvideo

### fairscale √

```bash
git clone https://github.com/facebookresearch/fairscale.git
pip install fairscale
```

### cython √

根据[文章](https://blog.csdn.net/weixin_39377720/article/details/121403411)所述，这里的命令为：

```bash
pip install -U cython
```

### Detectron2

开始逐步执行这些语句

```bash
git clone https://github.com/cocodataset/cocoapi.git#subdirectory=PythonAPI
git clone https://github.com/facebookresearch/detectron2 detectron2_repo
```

#### git clone https://github.com/cocodataset/cocoapi.git#subdirectory=PythonAPI

根据[文章所述](https://pip.pypa.io/en/stable/topics/vcs-support/#url-fragments)，这里的命令为：

```bash
pip install -U git+https://github.com/cocodataset/cocoapi.git#subdirectory=PythonAPI
```

出错：

```bash
ERROR: Could not find a version that satisfies the requirement matplotlib>=2.1.0 (from pycocotools) (from versions: none)
ERROR: No matching distribution found for matplotlib>=2.1.0
```

尝试换成：

```bash
git clone https://github.com/cocodataset/cocoapi.git
cd cocoapi/PythonAPI
pip install -U PythonAPI
```

`pip install -U PythonAPI`失败。不存在该依赖包。根据[官方文档](https://pip.pypa.io/en/latest/topics/local-project-installs/#editable-installs)，改写为：

```bash
pip install -e cocoapi/PythonAPI
```

缺少指定版本依赖，根据[官方文档](https://pip.pypa.io/en/latest/cli/pip_install/#examples)，自主编写命令：

```bash
pip install 'matplotlib>=2.1.0'
```

取消翻墙，使用镜像。顺利完成。

再次执行：

```bash
pip install -e cocoapi/PythonAPI
```

出错。尝试换成：

```bash
pip install pycocotools
```

#### git clone https://github.com/facebookresearch/detectron2 detectron2_repo

```bash
pip install -e detectron2_repo
```

顺利完成。

### $PYTHONPATH

```bash
export PYTHONPATH=/path/to/SlowFast/slowfast:$PYTHONPATH
```

根据[参考资料](https://blog.csdn.net/NeverLate_gogogo/article/details/107615838)，自主编写设置临时环境变量：

```bash
set PTYTHONPATH=slowfast
echo %PYTHONPATH%
```

```bash
set PTYTHONPATH=D:\code\web-dev-work-place\github-desktop-store\SlowFast\slowfast
echo %PYTHONPATH%
```

```bash
set PTYTHONPATH=%PYTHONPATH%;D:\code\web-dev-work-place\github-desktop-store\SlowFast\slowfast
echo %PYTHONPATH%
```

无法校验是否正确。跳转到下一个阶段。

### Build PySlowFast

开始构建

```bash
python setup.py build develop
```

根据[文章](https://blog.csdn.net/weixin_43720054/article/details/126051206)，更改文件 setup.py。

顺利。无任何错误。

## 开始运行？

```bash
python tools/run_net.py --cfg configs/Kinetics/C2D_8x8_R50.yaml NUM_GPUS 1 TRAIN.BATCH_SIZE 8 SOLVER.BASE_LR 0.0125 DATA.PATH_TO_DATA_DIR path_to_your_data_folder
```

报错：

```bash
Traceback (most recent call last):
  File "tools/run_net.py", line 6, in <module>
    from slowfast.utils.misc import launch_job
  File "d:\code\web-dev-work-place\github-desktop-store\slowfast\slowfast\utils\misc.py", line 12, in <module>
    import torchvision.io as io
  File "D:\dev-evn\anaconda\envs\slowfast\lib\site-packages\torchvision\__init__.py", line 7, in <module>
    from torchvision import datasets
  File "D:\dev-evn\anaconda\envs\slowfast\lib\site-packages\torchvision\datasets\__init__.py", line 1, in <module>
    from .lsun import LSUN, LSUNClass
  File "D:\dev-evn\anaconda\envs\slowfast\lib\site-packages\torchvision\datasets\lsun.py", line 2, in <module>
    from PIL import Image
  File "D:\dev-evn\anaconda\envs\slowfast\lib\site-packages\PIL\Image.py", line 100, in <module>
    from . import _imaging as core
ImportError: DLL load failed while importing _imaging: 找不到指定的模块。
```

尝试升级

```bash
pip install -U pillow
```

## 报错 ImportError: cannot import name 'cat_all_gather' from 'pytorchvideo.layers.distributed'

```bash
Traceback (most recent call last):
  File "tools/run_net.py", line 6, in <module>
    from slowfast.utils.misc import launch_job
  File "d:\code\web-dev-work-place\github-desktop-store\slowfast\slowfast\utils\misc.py", line 19, in <module>
    import slowfast.utils.logging as logging
  File "d:\code\web-dev-work-place\github-desktop-store\slowfast\slowfast\utils\logging.py", line 15, in <module>
    import slowfast.utils.distributed as du
  File "d:\code\web-dev-work-place\github-desktop-store\slowfast\slowfast\utils\distributed.py", line 12, in <module>
    from pytorchvideo.layers.distributed import (  # noqa
ImportError: cannot import name 'cat_all_gather' from 'pytorchvideo.layers.distributed' (D:\dev-evn\anaconda\envs\slowfast\lib\site-packages\pytorchvideo\layers\distributed.py)
```
