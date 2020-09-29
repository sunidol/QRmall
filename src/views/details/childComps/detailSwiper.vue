<template>
  <Swiper class="detailSwiper">
    <SwiperItem v-for="(item,index) in swiperImg"
                :key="index ">
      <img :src="item"
           alt="">
    </SwiperItem>
  </Swiper>
</template>
<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  props: {
    swiperImg: {
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
.detailSwiper {
  height: 300px;
  overflow: hidden;
}
</style>