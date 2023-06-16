# yolov8

## 开始安装

- https://zhuanlan.zhihu.com/p/603272140
- [YOLOv8 教程系列！](https://www.bilibili.com/read/cv23913741/)

注意到安装比较简单，克隆项目，准备好 pytorch 环境，安装一个依赖即可。

## 尝试运行的命令？

- https://blog.csdn.net/tingwhere/article/details/130394227

- try1

```bash
yolo detect mode=predict model=yolov8l.pt source=ultralytics/assets/bus.jpg
```

注意到该命令是相对于项目根目录下的绝对路径。执行完毕后，项目根目录下会出现一个名为 `yolov8l.pt` 的文件。

- try2

```bash
yolo detect mode=predict
```

该命令不会去调用 cfg 配置声明的额外覆盖配置。没有找到合适的方式，实现复杂命令参数的统一配置。
