<!-- 带有公网安的底部 组件 -->
<template>
  <div id="footer-safeC">
    <div class="foot-link">
      <router-link to="/PotentialS.io" class="foot-link-a">关于我们</router-link>
      <router-link to="/PotentialS.io" class="foot-link-a">法律声明及隐私权政策</router-link>
      <router-link to="/PotentialS.io" class="foot-link-a">联系我们</router-link>
      <router-link to="/PotentialS.io" class="foot-link-a">合作伙伴</router-link>
      <router-link to="/PotentialS.io" class="foot-link-a">文档</router-link>
    </div>
    <!-- 版权和公网安备 -->
    <div class="copyright" style="color: #9b9ea0; font-size: 16px; float: left; margin-left: 40px;">
      版权所有 | 公网安备
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-safeC',
  el: '#footer-safeC',
  components: {
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

<style>
  #footer-safeC {
    height: 200px;
    width: 100%;
    background: #373d41;
  }

  .foot-link {
    height: auto;
    width: 100%;
    float: left;
    margin-bottom: 80px;
    padding-top: 15px;
    padding-left: 40px;
  }

  .foot-link-a {
    color: #9b9ea0;
    font-size: 16px;
    margin-right: 40px;
  }

  .foot-link-a:hover {
    color: #00c1de;
  }
</style>
