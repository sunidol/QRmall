<template>
  <div class="goodslist">
    <good-item v-for="(item,index) in goods"
               :key="index"
               :goodItem="item" />
  </div>
</template>
<script>
import GoodItem from 'components/content/goods/GoodItem'
export default {
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodItem
  }
}
</script>
<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>