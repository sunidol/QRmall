<template>
  <div class="homeSwiper">
    <Swiper>
      <Swiper-Item v-for="(item, index) in banners"
                   :key="index">
        <a :href="item.link"><img :src="item.image"
               alt=""
               @load="imgLoad"></a>
      </Swiper-Item>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  data () {
    return {
      imgLoadFlag: false
    }
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad () {
      if (!this.imgLoadFlag) {
        this.$emit('swiperImgLoad')
        this.imgLoadFlag = true
      }
    }
  }
}
</script>
<style scoped>
</style>