import fetch from '../../axios'
import { crownpin} from '../port_url'
import store from '../../../store/index'
import axios from 'axios'


//试驾列表
export function shijia(params,hideLoad) { 
  if(!hideLoad){
    store.commit('openLoading')
  }
  return fetch.$ajax('GET', crownpin.shijia, params);
}


//潜客管理
export function qianke(params,hideLoad) { 
  if(!hideLoad){
    store.commit('openLoading')
  }
  return fetch.$ajax('GET', crownpin.qianke, params);
}

//潜客管理 ---订单信息subnav
export function Ordergl(params,hideLoad) { 
  if(!hideLoad){
    store.commit('openLoading')
  }
  return fetch.$ajax('GET', crownpin.Ordergl, params);
}

//潜客管理 订单信息list
export function Orderlist(params,hideLoad) { 
  if(!hideLoad){
    store.commit('openLoading')
  }
  return fetch.$ajax('GET', crownpin.orderinf, params);
}

//潜客管理 跟进信息list
export function followinfo(params,hideLoad) { 
  if(!hideLoad){
    store.commit('openLoading')
  }
  return fetch.$ajax('GET', crownpin.followinfo, params);
}

