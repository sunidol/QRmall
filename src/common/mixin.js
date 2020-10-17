import { debounce } from 'common/utils'
import BackTop from 'components/content/backTop'
export const itemImgListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scrollRef.refreshImg, 200)
    // 通过事件总线进行通讯。首页商品图片加载完成时，就应该调用refresh
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('imgLoadFinished', this.itemImgListener)
    // console.log('11111111111')
  }
}
export const showBackTop = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    showBack (position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    backtop () {
      this.$refs.scrollRef.scrollTo(0, 0, 800)
    },
  }
}