---
title: ..else...语句
date: 2022-04-22 09:00:25
permalink: /pages/70fbcf/
categories:
  - 基于mv的JavaScript基础
  - 第2章 JavaScript基础知识
tags:
  - 
---
# 8-if...else...语句


## if...else...语句
上一节的最后的例子，实际上可以写成```if-else```形式的，如下所示：
``` js
if (visitor == "PRES") {
  greeting = "Dear President ";
} else {
  greeting = "Dear ";
}
```

如果if后面的小括号里面的条件满足的话（实际上是条件结果是true的话）就执行后面的大括号里面的部分，否则就执行后面的else大括号里面的部分。如果我们不需要考虑否则的结果，那么可以只写if部分，例如：
``` js
if (visitor == "PRES") {
  greeting = "Dear President ";
}
```

或者，我们还想再加一种条件，我们就可以在中间在添加else if部分，例如：
``` js
if (visitor == "PRES") {
  greeting = "Dear President ";
} else if (visitor == "CHAI") {
  greeting = "Dear Chairman ";
} else {
  greeting = "Dear ";
}
```

else if后面也可以不加else，直接结束。如果，我们还想再加一种条件，我们还可以在中间添加else if部分，例如：
``` js
if (visitor == "PRES") {
  greeting = "Dear President ";
} else if (visitor == "CHAI") {
  greeting = "Dear Chairman ";
} else if (visitor == "MANA") {
  greeting = "Dear Manager ";
} else {
  greeting = "Dear ";
}
```

如果我们还想再添加条件，就可以再继续添加else if部分。









## switch语句
不断的添加else if虽然也可以解决问题，但是还是显得太繁琐。而且，我们的这些条件都是对同一个变量的值进行判断，那么我们就可以使用switch语句了，上面的例子可以这样写：
``` js
switch (visitor) {
  case "PRES":
    greeting = "Dear President ";
    break;
  case "CHAI":
    greeting = "Dear Chairman ";
    break;
  case "MANA":
    greeting = "Dear Manager ";
    break;
  default:
    greeting = "Dear ";
}
```

switch会将变量与每个case后面的值进行比较，如果相同就执行这个case后面的语句，其中的break的作用是阻止自动的执行下一个case，可以去掉，但是建议不要乱去掉。最后的default也像是最后的else，如果前面的case都不成立，就执行这部分的语句，我们可以删去default，这样前面都不成立的时候会直接退出switch，执行后面的语句。

同样case可以有很多个。












## 用键值对的方式优化传统的if-else或switch-case写法 <Badge text="进阶" />
此部分内容属于进阶的内容，如果你已经熟练使用if语句，并厌恶自己写的冗长的判断条件语句，可以阅读以下的内容来学习代码优化。

主要使用查询的思路获取你想要的值，把判断过程转换成在指定数据结构的变量内查询值。这里的键值对数据结构可以选择```Object```、```Array```、或```Map```

假定这是我们要优化语句：
``` js
if (visitor == "PRES") {
  greeting = "Dear President ";
} else if (visitor == "CHAI") {
  greeting = "Dear Chairman ";
} else if (visitor == "MANA") {
  greeting = "Dear Manager ";
} else {
  greeting = "Dear ";
}
```

我们一般称呼这样的写法为**嵌套地狱**，是需要被重构的。可以考虑这样的方式重构：
``` js
const dataObj = {
  'PRES': 'Dear President ',
  'CHAI': 'Dear Chairman ',
  'MANA': 'Dear Manager ',
};
// 你的输入值 可自由赋值
let visitor;
// 如果能够查询到键名，那么就返回所对应的值。否则就返回默认的值。
let res = dataObj[visitor] || 'Dear ';
```

这种优化方式是取决于if-else语句写法的。