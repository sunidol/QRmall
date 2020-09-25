import axios from 'axios'
export function axiosHttp (config) {
  // 创建axios实例
  const ax = axios.create({
    //baseURL:"http://152.136.185.210:8000/api/h8",
    //baseURL:"http://106.54.54.237:8000/api/h8",
    // baseURL:"http://123.207.32.32:8000/api/m3",
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 6000
  })
  //设置axios拦截器（请求/响应拦截）
  ax.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  ax.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  //输出实例ax，发送请求
  return ax(config)
}