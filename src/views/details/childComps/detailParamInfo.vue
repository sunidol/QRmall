<template>
  <div class="detailParam">
    <table class="info-size"
           v-for="(item, index) in this.detailParam.size">
      <tr v-for="(i, idy) in item">
        <td v-for="(j, idz) in i">{{j}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in this.detailParam.info">
        <td>{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img">
      <img v-for="(item, index) in this.detailParam.image"
           :src="item"
           alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detailParam: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.detailParam {
  margin-top: 20px;
  border-top: 5px solid #eee;
  padding: 20px 10px 0 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #333;
}
table tr {
  height: 40px;
  line-height: 40px;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid #eee;
}
table tr:last-child {
  border-bottom: 3px solid #eee;
}
.info-size tr td:first-child {
  width: 40%;
}

.info-param tr td:first-child {
  width: 30%;
}
.info-param .info-value {
  color: #eb4868;
}
</style>