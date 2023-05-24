# yolov5

## 快速入门？

一次性完成全部的环境搭建？

- https://www.bilibili.com/video/BV1pP41137r1/
  这个教程太简陋了，什么都说不清楚。

- https://www.bilibili.com/video/BV1f44y187Xg/
  附带有 csdn 文章的教程，正在看。
  放弃了。不敢看了。太简短，也没有说明清楚更多细节。PyTorch 怎么成功安装的。都没说清楚。

- https://www.bilibili.com/video/BV1S5411X7FY/
  郭睿提供的教程。初步完成 pytorch 环境搭建。

## 官方教程

https://github.com/ultralytics/yolov5/blob/master/README.zh-CN.md

## 初始化 具体实践

### 安装依赖

在 anaconda prompt 内进入到特定的目录内，然后开始输入命令安装。

![2023-05-22-11-28-46](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-05-22-11-28-46.png)

称版本不满足。这里暂时跳过，到下一步骤。

![2023-05-22-11-32-58](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-05-22-11-32-58.png)

### 权重文件？

## 错误

### NotImplementedError: Could not run 'torchvision::nms' with arguments from the 'CUDA' backend.

- [解决“NotImplementedError: Could not run ‘torchvision::nms‘ with arguments from the ‘CUDA‘ backend.”](https://blog.csdn.net/weixin_51179975/article/details/119082342)

- [Getting "NotImplementedError: Could not run 'torchvision::nms' with arguments from CUDA backend" despite having all necessary libraries and imports](https://stackoverflow.com/questions/75103127/getting-notimplementederror-could-not-run-torchvisionnms-with-arguments-fr)

- [NotImplementedError: Could not run 'torchvision::nms' with arguments from the 'CUDA' backend.](https://github.com/ultralytics/yolov5/issues/6205)

####

删除包

```bash
pip uninstall torch torchvision torchaudio
```

重新安装，不走任何节点加速

```bash
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```
