import { axiosHttp } from 'network/axiosHttp'

export function getDetail (iid) {
  return axiosHttp({
    url: '/detail',
    params: {
      iid
    }
  })
}