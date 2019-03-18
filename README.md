### Feature: 实现功能
- [x] redux
- [x] redux-react
- [x] redux-saga
- [ ] TypeScript

### Test: 添加测试
- [x] component
- [x] utils function with unit-test
- [x] redux-saga
- [ ] reducer
- [ ] container


### Spark: 调研
- [ ] 移动端 px 尺寸自适应 解决方案
- [ ] typescript
- [ ] 手机网页的 debug, 利用 chrome 浏览器如何 debug

### Spark: saga
> ##### Effect,将有副作用的代码全部放到 saga 里面
> 不断循环,直到`{done:true}`,也就是说 caller 决定了,什么时候执行完,什么时候恢复执行,可以认为`co.js`就是一个函数自动执行器,`effect`就是一个普通对象,里面包含一些指令
> saga 的测试,2种模式
> 以输入一个 action,异步输出另一个 action,这就是 saga 函数的输入输出点,这种模式不执行 reducer.
> `.withReducer()`,通过 mock reducer的形式,对比前后 reducer 的情况,也就是会执行 reducer.

### Tips
> #### `yarn eject`
> if you want to `Custom Some Development` with your config about `create-react-app`, pls use `yarn eject`.

> #### `git rebase`
> while you use `git rebase` to update your branch base on master branch, there maybe some conflict with master and your new branch , you need to do with the following operation
> ```bash
> git rebase master <grbm> <on git:your branch>
> # do something to fix the conflict files
> git add . <ga .> # to add the confilg file, absolutely not <git commit>, with <git rebase --abort> also can recall before operation.
> git rebase --continue <grbc>
> ```
> #### command example
> ```bash
> ❯ grbm   
> 首先，回退头指针以便在其上重放您的工作...
> 应用：fix/conflict with repeat babel config
> 使用索引来重建一个（三方合并的）基础目录树...
> M       package.json
> 回落到基础版本上打补丁及进行三方合并...
>自动合并 package.json
>冲突（内容）：合并冲突于 package.json
>error: 无法合并变更。
>打补丁失败于 0001 fix/conflict with repeat babel config
>提示：用 'git am --show-current-patch' 命令查看失败的补丁
>Resolve all conflicts manually, mark them as resolved with
>"git add/rm <conflicted_files>", then run "git rebase --continue".
>You can instead skip this commit: run "git rebase --skip".
>To abort and get back to the state before "git rebase", run "git rebase --abort".
> ```

> #### `git push -f`
> A very dangerout operation, This command can overwirte other person's commit.
>
> Avoid to use this command!!! This command can only do in your branch, because this can overwrite other conflict commit, very dangerous!!!
>
> The reason of this command's appearence is that your commit history is conflict with origin commit history, one need to be overwrited.
> #### command example
> ```bash
>❯ git push
>To https://github.com/pengliheng/learn-saga
> ! [rejected]        fix/babelrc-conflict-package.json -> fix/babelrc-conflict-package.json (non-fast-forward)
> error: 推送一些引用到 'https://github.com/pengliheng/learn-saga' 失败
> 提示：更新被拒绝，因为您当前分支的最新提交落后于其对应的远程分支。
> 提示：再次推送前，先与远程变更合并（如 'git pull ...'）。详见
>提示：'git push --help' 中的 'Note about fast-forwards' 小节。
> ```

> ### change file without commit
> absolutely, you can directly create a new branch, and then commit.

> ### branch/commit name
>
> **branch name as**:
> 1. Feature/add-test
>
> **commit name as**:
> 1. Feature: add unit test
> 2. Feature: add component test
> 3. Feature: add reducer test
> 4. Feature: add saga test
