# 2FA GitHub 强制要求开启两步验证

## 原由如下

![2023-08-29-10-57-31](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-08-29-10-57-31.png)

GitHub users are now required to enable two-factor authentication as an additional security measure. Your activity on GitHub includes you in this requirement. You will need to enable two-factor authentication on your account before October 12, 2023, or be restricted from account actions.

## 解决方案

- [知乎：GitHub 强制要求开启两步验证了，但是 1password 要收费，怎么办？](https://zhuanlan.zhihu.com/p/615693483)
- [github 文档： 配置双重身份验证](https://docs.github.com/zh/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)

## 步骤简要说明

### 了解 TOTP 概念

我也不懂。

通俗来说这样理解，有一个二维码，想办法扫码即可。要么用 App 来扫码，要么用浏览器插件来扫码。

如下图所示：

![2023-08-29-11-17-24](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-08-29-11-17-24.png)

Use an authentication app or browser extension to get two-factor authentication codes when prompted.

官方都说了，用 app 或者是是浏览器插件来扫码，获得验证码。

### 先安装浏览器插件

- [身份验证器](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai/)

### 去 GitHub 设置中开启 2FA

- https://github.com/settings/security

![2023-08-29-11-14-37](https://cdn.jsdelivr.net/gh/RuanZhongNan/img-store/img/2023-08-29-11-14-37.png)

### 用浏览器来扫码

按照教程要求，用浏览器插件来扫码，随后输入验证码即可。
