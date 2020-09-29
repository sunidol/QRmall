<template>
  <div>
    <detailNavBar />
    <detailSwiper :swiperImg="swiperImg" />
    <detailBaseInfo :goodsInfo="goodsInfo" />
    <detailShopInfo :shopInfo="shopInfo" />
  </div>
</template>
<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'

import { getDetail, GoodsInfo, ShopInfo } from 'network/detail'
export default {
  name: 'Details',
  data () {
    return {
      iid: null,
      swiperImg: [],
      goodsInfo: {},
      shopInfo: {}
    }
  },
  created () {
    console.log('created')
    //1-保存传入的商品 iid
    this.iid = this.$route.params.iid
    //2-根据商品的iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res)
      const data = res.result
      // 1-顶部轮播数据
      this.swiperImg = data.itemInfo.topImages
      // 2-商品信息
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      //3-创建店铺信息对象
      this.shopInfo = new ShopInfo(data.shopInfo)
    })

  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo
  }
}
</script>
<style scoped>
</style>