# 自己配置 cursor 的供应商

因为 cursor 的 pro 订阅，每个月只有 20 美元的额度，很快就用完了。所以不得不考虑自己折腾配置。使用自己提供的代理商，进而使用高级模型。

## 用 www.dmxapi.cn 供应商实现自主配置

供应商地址：

- https://dmxapi.cn/

配置 cursor 教程：

- http://doc.dmxapi.cn/cursor.html
- http://cursor.dmxapi.cn/

### 差异化的 baseUrl

- http://doc.dmxapi.cn/baseurl.html

该供应商有很多域名，注意配置正确的地址。我注册并充值的域名是 `www.dmxapi.cn` ，故尾缀应该选择 cn。

![2025-08-04-15-58-52](https://gh-img-store.ruan-cat.com/img/2025-08-04-15-58-52.png)

根据上述教程和注意事项，实际配置到 cursor 的 url 应为： `https://www.dmxapi.cn/v1` 。

### 尾缀 v1 无效

根据[常见问题](http://qa.dmxapi.com/)，应该换成 `https://www.dmxapi.cn` ，无尾缀的情况。

![2025-08-04-16-41-03](https://gh-img-store.ruan-cat.com/img/2025-08-04-16-41-03.png)

在 cursor 内我们配置的是 openai 格式的地址，要满足要求才行。

### 增加正确的模型名称

::: details 获取正确的模型名称

- 模型列表： https://www.dmxapi.cn/pricing

用关键词 `DMXAPI` 来搜索。

![2025-08-04-16-16-21](https://gh-img-store.ruan-cat.com/img/2025-08-04-16-16-21.png)

:::

按照以上教程，我们仅仅配置包含 `DMXAPI` 关键词的模型。

- DMXAPI-cls4-0514
- DMXAPI-gem25-0506
