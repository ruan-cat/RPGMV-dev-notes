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

### fvcore

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
