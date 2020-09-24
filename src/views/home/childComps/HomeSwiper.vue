<template>
  <div class="homeSwiper">
    <Swiper>
      <Swiper-Item v-for="(item, index) in banners"
                   :key="index">
        <a :href="item.link"><img :src="item.image"
               alt=""></a>
      </Swiper-Item>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
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
  }
}
</script>
<style scoped>
</style>