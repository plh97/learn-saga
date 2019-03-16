##### Feature: 实现功能
- [x] redux
- [x] redux-react
- [ ] redux-saga

##### Test: 添加测试
- [ ] react-component
- [ ] react-container
- [ ] reducer
- [ ] redux-saga
- [ ] utils funtion

##### Spark: 调研
- [ ] 移动端 px 尺寸自适应 解决方案
- [ ] typescript
- [ ] 手机网页的 debug, 利用 chrome 浏览器如何 debug

##### Spark: saga
> ##### Effect
>   不断循环,直到`{done:true}`,也就是说 caller 决定了,什么时候执行完,什么时候恢复执行,可以认为`co.js`就是一个函数自动执行器,`effect`就是一个普通对象,里面包含一些指令

##### Tips
> ###### `yarn eject`
> if you want to `Custom Some Development` with your config about `create-react-app`, pls use `yarn eject`.

> ###### `git rebase`
> while you use `git rebase` to update your branch base on master branch, there maybe some conflict with master and your new branch , you need to do with the following operation
> ```bash
> git rebase master <grbm> <on git:your branch>
> # do something to fix the conflict files
> git add . <ga .> # to add the confilg file, absolutely not <git commit>, with <git rebase --abort> also can recall before operation.
> git rebase --continue <grbc>
> ```

> ###### `git push -f`
> A very dangerout operation, This command can overwirte other person's commit.
>
> Avoid to use this command
>
> The reason of this command's appearence is that your commit history is conflict with origin commit history, one need to be overwrited.