<template>
  <div class="shop-info">
    <div class="shop-name">
      <img :src="shopInfo.logo"
           alt=""
           class="shop-logo">
      <span class="shopTit">{{shopInfo.name}}</span>
    </div>
    <div class="score-info">
      <div class="score-left">
        <div class="sell">
          <div>{{sellValue}}万</div>
          <div style="font-size: 0.8rem">总销量</div>
        </div>
        <div class="total">
          <div>{{shopInfo.goodsCount}}</div>
          <div style="font-size: 0.8rem">全部宝贝</div>
        </div>
      </div>
      <div class="score-right">
        <table style="font-size: 0.8rem">
          <tr v-for="(item, index) in shopInfo.score">
            <td>{{item.name}}</td>
            <td :style="{color: item.isBetter?'red':'#32CD32'}">{{item.score}}</td>
            <td style="color:white;"
                :style="{backgroundColor: item.isBetter?'red':'#32CD32'}">{{item.isBetter? '高':'低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    sellValue () {
      return Math.round((this.shopInfo.sells / 10000) * 10) / 10
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.shop-name {
  padding: 20px 0 15px 8px;
}
.shop-name img {
  width: 34px;
  border-radius: 50%;
  border: 1px solid #ddd;
  vertical-align: middle;
  margin-right: 10px;
}
.shop-name .shopTit {
  font-size: 0.95rem;
}
.score-info {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.score-left {
  flex: 1;
  display: flex;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.score-right {
  flex: 1;
}
.score-left .sell {
  margin: 0 30px;
}
.score-left .total {
  border-right: 1px solid #ddd;
  padding-right: 35px;
}
.score-right table {
  padding-left: 40px;
}
.score-right table tr {
  height: 20px;
}
.score-right td {
  padding-right: 8px;
}
.score-right td:last-child {
  padding-right: 0;
}
.btn {
  width: 10rem;
  height: 2.2rem;
  line-height: 2.2rem;
  margin: 15px auto;
  background-color: rgba(200, 200, 200, 0.3);
  text-align: center;
  font-size: 0.8rem;
  border-radius: 0.8rem;
}
</style>