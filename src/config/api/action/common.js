import fetch from '../../axios'
import { common } from '../port_url'
import store from '../../../store/index'
import axios from 'axios'

export function POST(url,params,options) { 
  return fetch.$ajax('POST', url, params,options);
}

export function GET(url,params,options) { 
  return fetch.$ajax('GET', url, params,options);
}

export function AJAX(type,url,params,options) { 
  return fetch.$ajax(type, url, params,options);
}


//获取用户列表
export function getAccount(params) { 
  return fetch.$ajax('GET', common.account, params);
}

//获取导出任务
export function newtask(params) { 
  return fetch.$ajax('POST', common.newtask, params);
}

//获取导出任务进度条
export function progress(params) { 
  return fetch.$ajax('POST', common.progress, params);
}
export function handle(params) { 
  return fetch.$ajax('POST', common.handle, params);
}

