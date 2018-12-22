import { Layout, SideMain, UpMain } from '../pages/layout'
import { Platform, CarPrice,Drive,BuyCars ,Test,Management,Orderinfo,Managementmain,Ordergl,Followinfo} from '../pages/crownpin'
const crownpin = [{
  path: '/crownpin',
  name:'汽车销冠',
  component: Layout,
  children: [{
      path: '/',
      component: UpMain,
      children: [{ path: '/', component: Platform, name: '销冠首页' },
        {path: 'purchase', component: CarPrice, name: '购车询价' },
        {path: 'drive', component: Drive, name: '试驾预约' },
        {
          path:'management',
          component:Managementmain,
          name:"潜客管理",
          children:[
           { path: '/', component: Management, name: ''},
           {path:'orderinfo',component:Orderinfo,name:'基本信息'},
           {path:'ordergl',component:Ordergl,name:'订单信息'},
           {path:'followinfo',component:Followinfo,name:'跟进订单'}
          ]
        }
        //弹窗测试用的路由地址
        // {path: 'buyCars', component: BuyCars, name: '弹出层样式一' },
        // {path: 'test', component: Test, name: '弹出层样式二' }
        
      ]
    }

    // , 
    // {
    //   path: '/'
    //   component: UpMain,
    //   children: [{ path: 'purchase', component: CarPrice, name: '购车询价'}]
    // }
  ]
}]

export default crownpin
