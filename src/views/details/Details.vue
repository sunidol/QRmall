<template>
  <div id="detail">
    <detailNavBar class="detailNavBar"
                  @themeClick="themeClick"
                  ref="navbar" />
    <Scroll class="content"
            ref="scrollRef"
            @scrollPosition="scrollPosition"
            :probeType="3">
      <detailSwiper :swiperImg="swiperImg"
                    @swiperImgLoad="swiperImgLoad" />
      <detailBaseInfo :goodsInfo="goodsInfo" />
      <detailShopInfo :shopInfo="shopInfo" />
      <detailGoodsInfo :detailInfo="detailInfo"
                       @detailImgLength="detailImgLength" />
      <detailParamInfo :detailParam="detailParam"
                       ref="params" />
      <detailCommentInfo :detailComment="detailComment"
                         ref="comment" />
      <GoodsList :goods="goods"
                 ref="recommend" />
    </Scroll>
    <BackTop @click.native="backtop"
             v-show="isShowBackTop" />
    <detailBotBar @addTocart="addTocart" />
  </div>
</template>
<script>
import detailNavBar from './childComps/detailNavBar'
import detailSwiper from './childComps/detailSwiper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/detailShopInfo'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import detailParamInfo from './childComps/detailParamInfo'
import detailCommentInfo from './childComps/detailCommentInfo'
import detailBotBar from './childComps/detailBotBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import { getDetail, getRecommend, GoodsInfo, ShopInfo, GoodsParam } from 'network/detail'

import { itemImgListenerMixin, showBackTop } from 'common/mixin'
import { debounce } from 'common/utils'
export default {
  name: 'Details',
  data () {
    return {
      iid: null,
      swiperImg: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      detailParam: {},
      detailComment: {},
      goods: [],
      themeIdx: [],
      getThemeTopY: null,
      currentInd: 0
    }
  },
  mixins: [itemImgListenerMixin, showBackTop],
  created () {
    //1-保存传入的商品 iid
    this.iid = this.$route.params.iid
    //2-根据商品的iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res)
      const data = res.result
      // 1-顶部轮播数据
      this.swiperImg = data.itemInfo.topImages
      // 2-商品信息
      this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      //3-创建店铺信息对象
      this.shopInfo = new ShopInfo(data.shopInfo)
      //4-获取商品详细信息
      this.detailInfo = data.detailInfo
      //5-获取参数信息
      this.detailParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //6-获取评论信息
      if (data.rate.cRate !== 0) {
        this.detailComment = data.rate.list[0]
      }
    })
    //3-请求推荐数据
    getRecommend().then(res => {
      // console.log(res.data.list)
      this.goods = res.data.list
    })
    //4-给themeIdx赋值，并进行防抖操作
    this.getThemeTopY = debounce(() => {
      this.themeIdx = []
      this.themeIdx.push(0)
      this.themeIdx.push(this.$refs.params.$el.offsetTop - 44)
      this.themeIdx.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeIdx.push(this.$refs.recommend.$el.offsetTop - 44)
    }, 100)
  },
  methods: {
    swiperImgLoad () {
      this.$refs.scrollRef.refreshImg()
    },
    detailImgLength () {
      this.$refs.scrollRef.refreshImg()
      this.getThemeTopY()
    },
    themeClick (index) {
      this.$refs.scrollRef.scrollTo(0, -this.themeIdx[index], 400)
    },
    scrollPosition (position) {
      const positionY = -position.y
      // console.log(positionY)
      let length = this.themeIdx.length
      for (let i = 0; i < length; i++) {
        if (this.currentInd !== i && ((i < length - 1 && this.themeIdx[i] < positionY && this.themeIdx[i + 1] > positionY) || (i === length - 1 && this.themeIdx[i] < positionY))) {
          this.currentInd = i
          this.$refs.navbar.currentIdx = this.currentInd
        }
      }
      // 调用mixin中监听y值的方法，实现回到顶部
      this.showBack(position)
    },
    //添加购物车
    addTocart () {
      // 1-获取购物车页面需要展示的数据
      const productInfo = {}
      productInfo.image = this.swiperImg[0]
      productInfo.title = this.goodsInfo.title
      productInfo.desc = this.goodsInfo.desc
      productInfo.price = this.goodsInfo.realPrice
      productInfo.iid = this.iid
      // 2-将商品添加到购物车（需要借助vuex，将商品信息先放入vuex中，购物车页面从vuex中拿出数据进行展示）
      this.$store.commit('addCart', productInfo)
    }
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    Scroll,
    GoodsList,
    detailBotBar
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
  height: calc(100% - 93px);
  /* overflow: hidden; */
}
.detailNavBar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>