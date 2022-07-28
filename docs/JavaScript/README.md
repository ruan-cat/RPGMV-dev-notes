---
title: JavaScript学习
date: 2022-04-22 09:00:25
permalink: /pages/JavaScript/
---

# 阮中楠自己的一些JavaScript笔记
这里只是阮中楠自己的JavaScript笔记。目前这些笔记是零散的，不系统的，未来会集中重构文档。

这些内容基本上与RMMV无关。






## 异步函数
一位同事称，之前使用异步函数的写法是用`try-catch`+`async/await`的方式编写代码，而不是使用`.then`+`async/await`的方式。具体的代码类似于如下的内容，[来源于此](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function#使用async函数重写_promise_链)。

``` js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```






## Promise+setTimeout
我们总是用Promise去封装setTimeout，[点此阅读解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#在旧式回调_api_中创建_promise)。

下面是一个封装示例：
``` js
const wait = (delay = 1000, presetReturnValue = "") =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(presetReturnValue), delay);
  });
const use = async () => {
  const res = await wait(2 * 1000, true);
  console.log(" in use : ", res);
};
use();
```





