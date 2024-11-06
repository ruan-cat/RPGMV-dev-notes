# 通知组件

toast，吐司，通知组件的意思。

vue 有很多类似的通知组件。需要找到一个比较合适的通知组件使用方案才行。

我希望在通知的时候，可以显示出异步任务，并且提供额外的按钮，使得我们可以提前中断异步任务。

## 思考

大多数 toast 组件是为了实现比较复杂的业务的。比如底部的消息通知提醒等。

## vue3-toastify

- https://github.com/jerrywu001/vue3-toastify

目前要提供额外按钮，配置起来很复杂，冗余。要额外写一个组件才能实现多出来的按钮。

没看到有专门的配置实现按钮。

## vue-toastification

- https://github.com/Maronato/vue-toastification

## vuetify-sonner

- https://github.com/wobsoriano/vuetify-sonner

这个好像和 vuetify 这个库高耦合，好像不合适。我的技术栈内不包含这个组件库。

## vue-sonner

- https://github.com/xiaoluoboding/vue-sonner

目前的问题是，通知栏都糊在一起了，定位混乱，难以控制。

在官方的两个测试项目内，表现良好。然而到了自己的测试项目，就无一例外地糊在一起了。

如果能克服此问题，那么该组件库就是最佳选择了。
