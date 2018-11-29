import Vue from 'vue'
import Router from 'vue-router'
const Protal = resolve=>{
  require.ensure(['@/components/Protal'],()=>{
    resolve(require('@/components/Protal'));
  })
}
const Note = resolve=>{
  require.ensure(['@/components/Note'],()=>{
    resolve(require('@/components/Note'));
  })
}
const Aboutme = resolve=>{
  require.ensure(['@/components/Aboutme'],()=>{
    resolve(require('@/components/Aboutme'));
  })
}
const Skills = resolve=>{
  require.ensure(['@/components/Skills'],()=>{
    resolve(require('@/components/Skills'));
  })
}
const Articles = resolve=>{
  require.ensure(['@/components/common/Articles'],()=>{
    resolve(require('@/components/common/Articles'));
  })
}
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Protal
    },
    {
      path:'/note',
      component:Note
    },
    {
      path:'/about',
      component:Aboutme
    },
    {
      path:'/skills',
      component:Skills
    },
    {
      path:'/articles/:id',
      component:Articles
    }
  ]
})
