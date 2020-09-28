<template>
  <!-- 使用插件前，一般都要对该插件进行封装。对better-scroll插件进行封装，可在多个组件中使用该插件；当插件不被维护时，直接修改该vue文件即可 -->
  <div class="wrapper"
       ref="scrollDiv">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      betScroll: null
    }
  },
  mounted () {
    // 1、创建BScroll对象
    this.betScroll = new BScroll(this.$refs.scrollDiv, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 2、监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.betScroll.on('scroll', (position) => {
        this.$emit('scrollPosition', position)
      })
    }

    // 3、监听上拉事件
    if (this.pullUpLoad) {
      this.betScroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.betScroll && this.betScroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.betScroll && this.betScroll.finishPullUp()
    },
    refreshImg () {
      this.betScroll && this.betScroll.refresh()
    }
  }
}
</script>
<style scoped>
</style>