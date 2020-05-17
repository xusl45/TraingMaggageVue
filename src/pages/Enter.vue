<!-- 进入页面 包括 登入 注册 忘记密码组件 -->
<template>
  <div id="enter">
    <!-- 头部 -->
    <div class="head">
      <span class="head_logo_test">狗窝</span>
      <div class="home-link-box"><router-link to="/login" class="home-link">返回</router-link></div>
      <div class="home-link-box"><router-link to="/adminRegister" class="home-link">注册</router-link></div>
      <div class="home-link-box"><router-link to="/adminLogin" class="home-link">登录</router-link></div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 登入 注册 忘记密码 box区域 -->
      <router-view></router-view>
    </div>
    <!-- 底部 公网安 -->
    <FooterSafeC></FooterSafeC>
  </div>

</template>

<script>
import FooterSafeC from '../components/FooterSafeC.vue'
export default {
  name: 'enter',
  components: {
    'FooterSafeC': FooterSafeC
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  /*@import '../../static/css/Enter.css';*/
  #enter {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #1F2325;
    overflow-x:hidden
  }
  /* 头部 */
  .head {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    background: #1F2325;
  }
  .logo-a {
    height: auto;
    width: auto;
    position: relative;
    float: left;
  }
  .logo-img {
    height: 20px;
    width: 85px;
    left: 19px;
    top: 19px;
    position: absolute;
  }
  .head_logo_test{
    line-height: 60px;
    font-size: 25px;
    color: white;
    float: left;
    margin-left: 20px;
  }
  .home-link-box {
    height: 60px;
    width: 70px;
    float: right;
    text-align: center;
  }
  .home-link {
    color: white;
    font-size: 14px;
    line-height: 60px;
  }
  .home-link:hover {
    color: #00c1de;
  }

  /* 内容 */
  .content {
    height:calc(100% - 200px); ;
    width: 100%;
    background-image: url('../assets/login-bg.jpg');
    background-size: cover;
  }

  .remind-div {
    position:fixed;
    margin-top: 120px;
    margin-left: 20px;
  }

  .remind-box {
    height: 140px;
    width: 40px;
    background: #33cde5;
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
    padding-top: 5px;
  }

  .remind-content {
    height: 50px;
    width: 100%;
  }

  .remind-content-data {
    float: left;
    font-size: 15px;
    color: #1F2325;
  }
</style>
