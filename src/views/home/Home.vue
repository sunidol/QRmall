<template>
  <div id="home">
    <NarBar class="nav-bar">
      <div slot="center">琪润购物街</div>
    </NarBar>
    <TabControl :title="['流行','新款','精选']"
                @tabChange="tabChange"
                ref="tabControl1"
                class="tab-control"
                v-show="isShowTabControl" />
    <Scroll class="scrollItem"
            ref="scrollRef"
            :probeType="3"
            :pullUpLoad="true"
            @scrollPosition="YPosition"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners"
                   @swiperImgLoad="swiperImgLoad" />
      <Recommend-View :recommends="recommends" />
      <FashionView />
      <TabControl :title="['流行','新款','精选']"
                  @tabChange="tabChange"
                  ref="tabControl2" />
      <GoodsList :goods="goods[currentTab].list" />
    </Scroll>
    <BackTop @click.native="backtop"
             v-show="isShowBackTop" />
  </div>
</template>
<script>
import NarBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FashionView from './childComps/FashionView'

import { getMultidata, getGoods } from 'network/home'
import { debounce } from 'common/utils'
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
      currentTab: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isShowTabControl: false,
      getYPosition: 0
    }
  },
  components: {
    NarBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
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
  mounted () {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scrollRef.refreshImg, 200)
    // 通过事件总线进行通讯。首页商品图片加载完成时，就应该调用refresh
    this.$bus.$on('imgLoadFinished', () => {
      refresh()
    })
  },
  activated () {
    this.$refs.scrollRef.scrollTo(0, this.getYPosition, 0)
    this.$refs.scrollRef.refreshImg()
  },
  deactivated () {
    this.getYPosition = this.$refs.scrollRef.betScroll.y
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
      this.$refs.tabControl1.currentIdx = index
      this.$refs.tabControl2.currentIdx = index
    },
    backtop () {
      this.$refs.scrollRef.scrollTo(0, 0, 800)
    },
    YPosition (position) {
      //1-判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
      //2-决定tabControl是否在顶部停留
      this.isShowTabControl = (-position.y) > this.tabControlOffsetTop
    },
    pullingUp () {
      // console.log('上拉加载更多')
      this.getGoods(this.currentTab)
    },
    swiperImgLoad () {
      //获取tabControl的offsetTop值。知识点：所有组件都有一个属性$el:用于获取组件中的元素
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
        //完成上拉加载工作
        this.$refs.scrollRef.finishPullUp()
      })
    }
  }
}
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}
/* .tab-control {
  position: fixed;
  top: 44px;
  left: 0;
  background-color: #fff;
  z-index: 9;
} */
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.scrollItem {
  /* height: 300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
