<template>
  <div class="base-info"
       v-if="Object.keys(goodsInfo).length!==0">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsInfo.newPrice}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discount"
            class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
            v-for="index in goodsInfo.services.length-1">
        <img :src="goodsInfo.services[index-1].icon"
             alt="">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
.base-info {
  padding: 5px;
}
.info-title {
  margin-top: 10px;
  color: #222;
  font-size: 15px;
}
.info-price {
  margin-top: 15px;
  position: relative;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  margin-left: 5px;
  font-size: 13px;
  text-decoration: line-through;
  color: #aaa;
}
.discount {
  background-color: var(--color-tint);
  color: #ffffff;
  padding: 3px;
  font-size: 12px;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  transform: translateX(-40px);
}
.info-other {
  display: flex;
  color: #aaa;
  font-size: 13px;
  margin-top: 15px;
  padding: 5px;
  border-bottom: 2px solid #eee;
}
.info-other span {
  flex: 1;
  text-align: center;
}
.info-other span:first-child {
  text-align: left;
}
.info-other span:last-child {
  text-align: right;
}
.info-service {
  padding: 20px 0;
  border-bottom: 5px solid #eee;
  display: flex;
  font-size: 13px;
}
.info-service span {
  flex: 1;
}
.info-service img {
  width: 12px;
}
.info-service span:last-child {
  text-align: right;
}
</style>