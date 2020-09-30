<template>
  <div id="detail">
    <detailNavBar class="detailNavBar" />
    <Scroll class="content"
            ref="detailSwiper">
      <detailSwiper :swiperImg="swiperImg"
                    @swiperImgLoad="swiperImgLoad" />
      <detailBaseInfo :goodsInfo="goodsInfo" />
      <detailShopInfo :shopInfo="shopInfo" />
      <detailCommentInfo :detailInfo="detailInfo" />
    </Scroll>
  </div>
</template>
<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailCommentInfo from './childComps/detailCommentInfo'


import Scroll from 'components/common/scroll/Scroll'

import { getDetail, GoodsInfo, ShopInfo } from 'network/detail'
export default {
  name: 'Details',
  data () {
    return {
      iid: null,
      swiperImg: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {}
    }
  },
  created () {
    // console.log('created')
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
      //4-获取商品详细信息
      this.detailInfo = data.detailInfo
    })

  },
  methods: {
    swiperImgLoad () {
      this.$refs.detailSwiper.refreshImg()
    }
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailCommentInfo,
    Scroll
  }
}
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
  /* overflow: hidden; */
}
.detailNavBar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>