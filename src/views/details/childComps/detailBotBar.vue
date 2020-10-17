<template>
  <div class="bot-bar">
    <div class="bar-item left-item">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item right-item">
      <div class="cart"
           @click="addTocart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addTocart () {
      this.$emit('addTocart')
    }
  }
}
</script>
<style scoped>
.bot-bar {
  height: 49px;
  position: relative;
  background-color: #fff;

  display: flex;
  text-align: center;
  line-height: 49px;
}
.left-item,
.right-item {
  flex: 1;
  display: flex;
}
.right-item .cart {
  background-color: orange;
  color: #333;
  flex: 1;
}
.right-item .buy {
  background-color: var(--color-tint);
  color: #fff;
  flex: 1;
}
.left-item div {
  flex: 1;
  font-size: 14px;
  text-align: left;
}
.left-item .icon {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat;
  background-size: cover;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  left: 40%;
  top: -5px;
}
.left-item .text {
  position: relative;
  bottom: -10px;
}
.left-item .service {
  background-position: 0 -48px;
}
.left-item .shop {
  background-position: 0 -90px;
}
</style>