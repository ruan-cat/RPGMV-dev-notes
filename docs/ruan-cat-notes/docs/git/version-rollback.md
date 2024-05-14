# 版本回退

- https://zhuanlan.zhihu.com/p/137856034
- https://blog.csdn.net/qing040513/article/details/109150075

## 具体实践

```bash
# 获取到远程提交的id 切换指针进入到制定提交 此时还在本地记录内
git reset --hard 8ce26a03e961161d8b3993a3a6b66eb066e75ffd
# 强推 此时远程仓库的指针已经指向了本地记录的指针 远程的提交就永远消失了
git push -f
```
