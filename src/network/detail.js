import { axiosHttp } from 'network/axiosHttp'

export function getDetail (iid) {
  return axiosHttp({
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommend () {
  return axiosHttp({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
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

export class GoodsParam {
  constructor(info, rule) {
    this.info = info.set
    this.size = rule.tables
    this.image = info.image ? info.images[0] : ''
  }
}