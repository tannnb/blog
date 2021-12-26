export const routerSource = [
  {
    path: '/',
    name: '重定向',
    hideInMenu: true,
    redirect: '/BaseList',
  },
  {
    name: '基础表格',
    path: '/BaseList',
    component: './BaseList',
    routes:[]
  },
  {
    name: '可视化大屏',
    path: '/Large',
    component: './Large',
    audit:false,
    tntInsts:['antChat']
  },
  {
    name: '系统管理',
    path: '/System',
    routes: [
      {
        path: '/System/UserInfo',
        name: '用户管理',
        component: './UserInfo',
        audit:false,
        tntInsts:['antChat']
      },
      {
        path: '/System/ProjectInfo',
        name: '项目管理',
        component: './ProjectInfo',
        audit:false,
        tntInsts:['fcia']
      }
    ],
  },
  {
    name: '学校管理',
    path: '/School',
    routes: [
      {
        path: '/School/Seventh',
        name: '成都7中',
        component: './Seventh'
      },
      {
        path: '/School/ChuanDa',
        name: '川大附中',
        component: './ChuanDa'
      }
    ],
  },
  // {
  //   path: '/user',
  //   layout: false,
  //   routes: [
  //     { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
  //   ],
  // },
  // { component: './404' },
]
