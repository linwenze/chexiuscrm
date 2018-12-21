import { Layout, SideMain, UpMain } from '../pages/layout'
import { Platform, CarPrice,Drive,BuyCars ,Test} from '../pages/crownpin'

const crownpin = [{
  path: '/crownpin',
  name:'汽车销冠',
  component: Layout,
  children: [{
      path: '/',
      component: UpMain,
      children: [{ path: '/', component: Platform, name: '销冠首页' },
        {path: 'purchase', component: CarPrice, name: '购车询价' },
        {path: 'drive', component: Drive, name: '试驾预约' }
        //弹窗测试用的路由地址
        // {path: 'buyCars', component: BuyCars, name: '弹出层样式一' },
        // {path: 'test', component: Test, name: '弹出层样式二' }
        
      ]
    }
    // , 
    // {
    //   path: '/',
    //   component: UpMain,
    //   children: [{ path: 'purchase', component: CarPrice, name: '购车询价'}]
    // }
  ]
}]

export default crownpin
