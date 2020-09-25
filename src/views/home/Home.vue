<template>
  <div id="home">
    <NarBar class="nav-bar">
      <div slot="center">琪润购物街</div>
    </NarBar>
    <home-swiper :banners="banners"></home-swiper>
    <Recommend-View :recommends="recommends"></Recommend-View>
    <FashionView />
    <TabControl :title="['流行','新款','精选']"
                class="tab-control" />
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>
  </div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FashionView from './childComps/FashionView'

import { getMultidata, getGoods } from 'network/home'
export default {
  data () {
    return {
      banners: [],
      recommends: [],
      //所有产品数据
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      }
    }
  },
  components: {
    NarBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FashionView
  },
  created () {
    // 1. 请求bannner数据
    this.getMultidata()
    // 2. 请求商品数据(流行，新款，精选 三类)
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  methods: {
    getMultidata () {
      getMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoods (type) {
      let page = this.goods[type].page + 1
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>
