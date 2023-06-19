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

## 根据教程开始搭建环境

- [YOLOv8 教程系列！](https://www.bilibili.com/read/cv23913741/)

笔记本电脑可用的命令行：

### 训练

```bash
yolo task=detect mode=train model=models/yolov8n.pt data=business/-temp-try/conf.yaml project=business/-temp-try/res batch=8 epochs=1 workers=8 imgsz=640
```

### 验证

```bash
yolo task=detect mode=val model=business/-temp-try/res/train2/weights/best.pt data=business/-temp-try/conf.yaml project=business/-temp-try/res
```

### 预测

```bash
yolo task=detect mode=predict model=business/-temp-try/res/train2/weights/best.pt source=business/-temp-try/images project=business/-temp-try/res
```

## 目前的工作流

- 打标。不管用哪种打标工具，只要结果用 VOC，xml 格式导出即可。这远比单纯的 yolo，text 格式要好得多。
- 数据处理。拆分数据集和格式转换。事实上可以随便更改其次序。
  - splitDataset.py 拆分数据
  - xml-2-txt-chatgpt-v1.py 数据格式转换 同时录入打标的标签。

## linux 训练

使用同一套运行命令。

## linux 环境下常用的命令行

```bash
conda activate pytorch
cd /home/ai_rzn/code/ultralytics/
nohup 运行命令 &
```

查看指定用户的进程

```bash
ps -u root
```

在指定目录内，查看日志。这里默认特指 /home/ai_rzn/code/yolov5-master/ 目录

```bash
cat nohup.out
```

### 常用的路径

数据集存储在 business 文件夹内

/home/ai_rzn/code/ultralytics/business/

/home/ai_rzn/code/ultralytics/

yolo task=detect mode=train model=models/yolov8n.pt data=business/person-drop-litter/conf.yaml project=business/person-drop-litter/res batch=8 epochs=1 workers=8 imgsz=640

```bash
nohup yolo task=detect mode=train model=models/yolov8n.pt data=business/person-drop-litter/conf.yaml project=business/person-drop-litter/res batch=8 epochs=350 workers=8 imgsz=640 &
```

## YOLOv5 和 YOLOv8 使用体验

YOLOv8 用起来更加轻松，不用动脑子。
