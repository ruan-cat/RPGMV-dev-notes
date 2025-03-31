# 使用 cline 插件

cline，是一款 vscode 的 ai 插件，听说在生成项目内很有效。

## 安装 cline 插件

按照插件 id 搜索即可： saoudrizwan.claude-dev

::: details

![2025-02-03-13-50-29](https://gh-img-store.ruan-cat.com/img/2025-02-03-13-50-29.png)

:::

## 获取 key

cline 插件要求我们去获取 ai 模型厂商的 key，这里我们使用 yuegle 这个中间商来间接购买并使用 key。

- https://api.yuegle.com/

::: details

![2025-02-03-13-53-30](https://gh-img-store.ruan-cat.com/img/2025-02-03-13-53-30.png)

:::

## 新建 yuegle 令牌

先注册账号，用支付宝充值额度，冲一点钱即可。5 块钱试试水。

进入令牌管理界面，新建一个 token。如下所示

- https://api.yuegle.com/token

::: details

![2025-02-03-13-58-20](https://gh-img-store.ruan-cat.com/img/2025-02-03-13-58-20.png)

:::

## 填写新建令牌表单

- 模型 `claude-3-5-sonnet-20241022`

::: details

![2025-02-03-13-59-27](https://gh-img-store.ruan-cat.com/img/2025-02-03-13-59-27.png)

:::

至此我们就得到可用的 yuegle 令牌了，我们稍后的请求就会经过这个中间商，并代为扣费。

## 配置 cline 插件

回到 vscode 内，找到 cline 插件的配置界面。配置如下图所示：

::: details

![2025-02-03-14-02-54](https://gh-img-store.ruan-cat.com/img/2025-02-03-14-02-54.png)

:::

### base url 地址

按照[官网教程](https://api.yuegle.com/about)所示，我们应该填写以下地址：

- https://api.yuegle.com/v1

::: details

![2025-02-03-14-09-59](https://gh-img-store.ruan-cat.com/img/2025-02-03-14-09-59.png)

:::

### 模型 id

`claude-3-5-sonnet-20241022`

我们新建的 yuegle 令牌选择的是什么模型，我们这里就填写什么模型名称。

## 完成配置

至此我们就完成了 cline 插件的配置。可以继续使用了。个人感觉扣费很快，不敢乱用。
