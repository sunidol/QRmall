import { axiosHttp } from 'network/axiosHttp'

export function getDetail (iid) {
  return axiosHttp({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.score = shopInfo.score
    this.sells = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.allGoodsUrl
  }
}