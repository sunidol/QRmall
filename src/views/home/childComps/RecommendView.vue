<template>
  <div class="recommend-view">
    <div class="recommend-item"
         v-for="item in recommends">
      <a :href="item.link"><img :src="item.image"
             alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend-view {
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;

  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.recommend-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 8px;
}
</style>