// 这里保存首页所有的网络请求，进行统一管理，并且降低了网络请求与首页组件中其他代码的耦合
import { axiosHttp } from 'network/axiosHttp'

export function getMultidata () {
  return axiosHttp({
    url: '/home/multidata'
  })
}

export function getGoods (type, page) {
  return axiosHttp({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}