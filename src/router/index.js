import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/user'
  },
  //  前台用户
  {
    path: '/user',
    component:()=>import('../views/user/Index'),
    name: 'User',
    children:[
      {
        path:'/',
        redirect: 'home'
      },
      {
        path: 'home',
        name:'Home',
        component:()=>import('../views/user/Home')
      },
      {
        path:'login',
        name: 'Login',
        component:()=>import('../views/user/Login')
      },
      {
        path: 'register',
        name:'Register',
        component:()=>import('../views/user/Register')
      }
    ]
  },
//  后台管理
  {
    path: '/admin',
    name: 'Admin',
    component:()=>import('../views/admin/Index'),
    children: [
      {
        path: '/',
        redirect: 'login'
      },
      {
        path: 'login',
        name:'Login',
        component:()=>import('../views/admin/Login')
      },
      {
        path: 'home',
        name:'Name',
        component:()=>import('../views/admin/Home'),
        children: [
          {
            path:'/',
            redirect:'info'
          },
          {
            path: 'info',
            name:'Info',
            component:()=>import('../views/admin/Info'),
          },
          {
            path: 'categoryAdd',
            name: 'CategoryAdd',
            component:()=>import('../views/admin/goods/category/CategoryAdd')
          },
          {
            path: 'categoryList',
            name: 'CategoryList',
            component:()=>import('../views/admin/goods/category/List')
          },
          {
            path: 'test',
            name:'Test',
            component:()=>import('../views/admin/goods/category/Test')
          },
          {
            path: 'edit',
            name:'Edit',
            component:()=>import("../views/admin/goods/category/Edit")
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
