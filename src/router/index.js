import Vue from 'vue'
import Router from 'vue-router'
// 后台管理界面

Vue.use(Router)

export default new Router({
  routes: [{// 进入后台管理系统前操作页
      path: '/',
      name: 'AdminEnter',
      component: resolve => require(['../pages/Enter.vue'], resolve),
      children: [
        {// 登入功能
          path: '/adminLogin',
          name: 'AdminLoginBox',
          component: resolve => require(['../pages/enter/LoginBox.vue'], resolve),
        },
        {// 注册功能
          path: '/adminRegister',
          name: 'AdminRegisterBox',
          component: resolve => require(['../pages/enter/RegisterBox.vue'], resolve),
        },
        {// 忘记密码功能
          path: '/adminForget',
          name: 'AdminForgetBox',
          component: resolve => require(['../pages/enter/ForgetBox.vue'], resolve),
        }
      ],
      redirect: '/adminLogin'// 默认先显示登入功能
    },{
      path: '/index',
      name: 'index',
      redirect: '/hello', //定向重转发
  
      component: resolve => require(['../pages/Home.vue'], resolve),
      children: [{
        path: '/head',
        component: resolve => require(['../components/Homepanel.vue'], resolve),
        children: [{
          path: '/hello',
          component: resolve => require(['../pages/homes/HelloWorld.vue'], resolve),
        },{
          path: '/allUser',
          component: resolve => require(['../pages/homes/AllUser.vue'], resolve),
        },{
          path: '/allCommodity',
          component: resolve => require(['../pages/homes/AllCommodity.vue'], resolve),
        },{
          path: '/allCommodityStorage',
          component: resolve => require(['../pages/homes/AllCommodityStorage.vue'], resolve),
        },{
          path: '/allCommodityRecord',
          component: resolve => require(['../pages/homes/AllCommodityRecord.vue'], resolve),
        },{
          path: '/allPost',
          component: resolve => require(['../pages/homes/AllPost.vue'], resolve),
        },{
          path: '/allReply',
          component: resolve => require(['../pages/homes/ALLReply.vue'], resolve),
        }
      ]
      }]
    }, 
  ]
})
