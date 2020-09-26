<template>
  <div id="home">
    <NarBar class="nav-bar">
      <div slot="center">琪润购物街</div>
    </NarBar>
    <home-swiper :banners="banners" />
    <Recommend-View :recommends="recommends" />
    <FashionView />
    <TabControl :title="['流行','新款','精选']"
                class="tab-control"
                @tabChange="tabChange" />
    <GoodsList :goods="goods[currentTab].list" />
    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

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
      },
      currentTab: 'pop'
    }
  },
  components: {
    NarBar,
    TabControl,
    GoodsList,
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
    /**
     * 事件监听
     */
    tabChange (index) {
      switch (index) {
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2:
          this.currentTab = 'sell'
          break
      }

    },

    /**
     * 网络请求相关方法
     */
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
  z-index: 9;
}
</style>
