::: 便于复制提交用

```bash
git add .
git commit -m "A routine upload test"
git push  
<!-- 直接push容易有连接问题，可以通过SSH key解决 -->
```
:::
::: 在github里直接修改文件后要做的
```bash
git pull origin main --rebase
git push origin main
```
:::




