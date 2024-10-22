# css 绘制三角形

在前端开发时，这样的的需求经常有。绘制三角形：

![2023-10-25-17-11-22](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2023-10-25-17-11-22.png)

不可能总是等着 UI 切图的。前端有办法快速绘制的。

## 目前的实践方案

### 参考资料

- https://blog.csdn.net/weixin_44015669/article/details/115663156

### 代码

```scss
.item {
	padding-left: 16px;

	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	width: 123px;
	height: 64px;
	background-color: #08233e;

	&::before {
		content: "";

		$size: 10px;

		height: $size;
		width: $size;

		position: absolute;
		right: 0;
		bottom: 0;

		background-color: #00ffff;
		clip-path: polygon(100% 0, 0 100%, 100% 100%);
	}

	.number-box {
		color: #00ffff;
	}

	.text-box {
		color: #ffffff;
	}
}
```

### 实现思路

1. 伪元素绝对定位，到指定的位置。
2. 用 `clip-path: polygon` 实现多边形切割。切割出三角形。
3. 去专用的[网站](https://www.jiangweishan.com/tool/clippy/)，可视化绘图，生成路径。
