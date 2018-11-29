import router  from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//to 即将要跳转的页面，from是当前所在的页面，next是判断完之后，必须调用next才可以进行下一步的操作
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束 Progress
})
