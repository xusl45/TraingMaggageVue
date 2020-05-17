<template>
  <div class="hello">
    <div class ="sethello">尊敬的 <b style="color=red"> {{this.$store.state.nickName}}</b><br>欢迎 进入狗窝后台管理系统</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sethello{
  margin: 0 auto;
  font-size: 35px;
  
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
