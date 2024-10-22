# 更改 git 用户名

我们需要根据不同的项目场景，设置 git 的用户名。

## 根据项目设置用户名

比如在某个项目内，我需要设置用户名为别的值，比如 `f1-阮喵喵`，我们可以这样做：

```bash
git config --local user.name f1-阮喵喵
```

- 设置前：

![2024-05-12-22-47-15](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-12-22-47-15.png)

- 设置后：

![2024-05-12-22-47-33](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-12-22-47-33.png)

- 全局配置不受影响：

![2024-05-12-22-48-01](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-12-22-48-01.png)

- 本地配置受到影响：

![2024-05-12-22-48-21](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-12-22-48-21.png)

- 其他项目不受影响：

![2024-05-12-22-48-57](https://cdn.jsdelivr.net/gh/ruan-cat/img-store/img/2024-05-12-22-48-57.png)

## 设置本机的用户名

```bash
git config --global user.name ruan-cat
```
