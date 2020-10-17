<template>
  <div v-if="Object.keys(detailComment).length !==0"
       class="detailComment">
    <div class="header">
      <div class="header-title">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="content">
      <div class="user-info">
        <img :src="detailComment.user.avatar"
             alt="">
        <span>{{detailComment.user.uname}}</span>
      </div>
      <div class="detail-info">
        <p>{{detailComment.content}}</p>
        <div class="other-info">
          <span>{{detailComment.created | formatTime}}</span>
          <span>{{detailComment.style}}</span>
        </div>
        <div class="img-info">
          <img :src="item"
               v-for="(item,index) in detailComment.images"
               :key="index"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate } from 'common/utils'
export default {
  props: {
    detailComment: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    formatTime (value) {
      //1-将时间戳转成Date对象
      const date = new Date(value * 1000)
      //2-将date进行格式化
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>
<style scoped>
.detailComment {
  padding: 0 10px 20px 10px;
  border-bottom: 5px solid #eee;
}
.header {
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}
.header-title,
.more {
  flex: 1;
}
.more {
  padding-right: 8px;
  text-align: right;
}
.user-info {
  height: 60px;
  line-height: 60px;
  color: #333;
}
.user-info img {
  width: 12%;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}
.detail-info {
  margin-top: 5px;
  font-size: 14px;
  color: #777;
}
.detail-info p {
  line-height: 22px;
}
.detail-info .other-info {
  height: 40px;
  line-height: 40px;
  color: #999;
}
.other-info span {
  margin-right: 10px;
}
.img-info img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>