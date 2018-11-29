import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve=>{
  require.ensure(['@/components/Login'],()=>{
    resolve(require('@/components/Login'));
  })
}
const List = resolve=>{
  require.ensure(['@/components/List'],()=>{
    resolve(require('@/components/List'));
  })
}
const Label = resolve=>{
  require.ensure(['@/components/Label'],()=>{
    resolve(require('@/components/Label'));
  })
}
const Read = resolve=>{
  require.ensure(['@/components/Read'],()=>{
    resolve(require('@/components/Read'));
  })
}
const Aboutme = resolve=>{
  require.ensure(['@/components/Aboutme'],()=>{
    resolve(require('@/components/Aboutme'));
  })
}
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/list',
      component:List
    },
    {path:'*',redirect:'/login'},
    {
      path:'/label',
      component:Label
    },
    {
      path:'/read',
      component:Read
    },
    {
      path:'/aboutme',
      component:Aboutme
    }
  ]
})
