import fetch from '../../axios'
import { common } from '../port_url'
import store from '../../../store/index'
import axios from 'axios'


//获取用户列表
export function getAccount(params) { 
  console.log(common)
  return fetch.$ajax('GET', common.account, params);
}

//获取导出任务
export function newtask(params) { 
  console.log(common)
  return fetch.$ajax('POST', common.newtask, params);
}

//获取导出任务进度条
export function progress(params) { 
  console.log(common)
  return fetch.$ajax('POST', common.progress, params);
}
export function handle(params) { 
  console.log(common)
  return fetch.$ajax('POST', common.handle, params);
}

