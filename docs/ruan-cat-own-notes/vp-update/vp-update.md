# vp-update

一个升级工具。有点问题：

0.1.2 就没错

0.6 就报错

## 尝试命令

pnpm exec vp-update

pnpm dlx vp-update

### 成功

pnpm dlx vp-update@0.1.2

pnpm dlx vp-update@0.5

### 出错

pnpm dlx vp-update@0.6

pnpm dlx vp-update@latest

pnpm dlx vp-update@next

## TODO: 独立完成 bug 测试与 pr

经过和作者在 QQ 群的沟通，作者要求我独立完成 pr，因为作者不愿意为了该功能额外导入依赖，而是使用 node 原生的功能。

目前我还是不懂。升级就先用保守的方式升级吧。
