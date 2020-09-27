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
    }
  },
  data () {
    return {
      betScroll: null
    }
  },
  mounted () {
    this.betScroll = new BScroll(this.$refs.scrollDiv, {
      click: true,
      probeType: this.probeType
    })
    this.betScroll.on('scroll', (position) => {
      this.$emit('scrollPosition', position)
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.betScroll.scrollTo(x, y, time)
    }
  }
}
</script>
<style scoped>
</style>