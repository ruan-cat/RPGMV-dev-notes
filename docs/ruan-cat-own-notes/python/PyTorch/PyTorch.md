# PyTorch

应 yolov5 的 github 中文教程要求，额外安装 pytorch。

## cuda + pytorch ？

应要求升级 cuda

参考资料
https://zhuanlan.zhihu.com/p/349729620

## 升级英伟达显卡驱动并升级 CUDA 到较高的版本

TODO: 需要补全显卡驱动升级的方式

查看信息

```bash
nvidia-smi
```

![2023-05-22-14-55-07](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-05-22-14-55-07.png)

## 安装命令

根据[官网](https://pytorch.org/get-started/locally/)的要求生成的命令。

```bash
conda install pytorch torchvision torchaudio pytorch-cuda=11.7 -c pytorch -c nvidia
```

根据[文章](https://blog.csdn.net/didiaopao/article/details/119787139)所述，这里移除掉多余的内容：

```bash
conda install pytorch torchvision torchaudio pytorch-cuda=11.7
```

![2023-05-22-15-52-11](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-05-22-15-52-11.png)

```bash
PackagesNotFoundError: The following packages are not available from current channels:

  - pytorch-cuda=11.7
  - torchaudio
```

称镜像源找不到指定依赖包，需要拓展镜像源。

- pytorch-cuda=11.7
- torchaudio

https://anaconda.org

根据[文章](https://blog.csdn.net/weixin_45552562/article/details/109668589)的做法：

```bash
conda config --append channels conda-forge
```

仍旧不行。出错。

### 尝试更换命令

安装 11.8 版本，而不是 11.7 版本

```bash
conda install pytorch torchvision torchaudio pytorch-cuda=11.8
```

新错误如下：

```bash
(rpytorch) C:\Users\ruanzhongnan>conda install -c pytorch pytorch-cuda
Collecting package metadata (current_repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: failed with repodata from current_repodata.json, will retry with next repodata source.
Collecting package metadata (repodata.json): done
Solving environment: failed with initial frozen solve. Retrying with flexible solve.
Solving environment: /
Found conflicts! Looking for incompatible packages.
This can take several minutes.  Press CTRL-C to abort.
failed

UnsatisfiableError:
```

## cuda toolkit ？

执行以下命令，出错，找不到内容

```bash
nvcc --version
```

历史下载版本：

https://developer.nvidia.com/cuda-toolkit-archive

CUDA Toolkit 安装教程（Windows）
值得注意的是，包括了环境变量等内容。

https://blog.csdn.net/qq_42951560/article/details/116131410
