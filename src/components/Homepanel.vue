<template>
    <div class="homepanel">
        <!-- <v-breadcrumb></v-breadcrumb> -->
        <diV  class="panel">
          <div class="sidebar">
            <sidebar></sidebar>
          </div>
          <div class="content">
            <div class="content-subject">
              <div class="subject">
                <router-view></router-view>
              </div>
            </div>
            <div class="foot">厦门理工学院 许舒隆 &copy; 2020</div>
          </div>
        </diV>
    </div>
</template>

<script>
import Sidebar from './Sidebar'
export default {
  name: 'homepanel',
  components: {
    Sidebar
  }
}
</script>

<style rel="stylesheet/scss"  scoped>
.homepanel{
  width: 100%;
  height: 100%;
  min-height: 600px;
}
.sidebar{
  float: left;
  width: 200px;
  height: 100%;
}
.content{
  width:  calc(100% - 200px);
  height: calc(100vh - 60px);
  text-align: center;
  float: right;
}
.foot{
    /* position: fixed;
    left: 0;
    right: 0;
    bottom: 0;*/
    width: 100%;
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    background-color: #f0f2f5;
    text-align:center;
}
.content-subject{
  padding: 20px 20px 10px 20px;
  margin-top: 0px;
  height: calc(100% - 80px);
  background-color: #f0f2f5;
}
.crumb{
  height: 85px;
}
.subject{
  padding: 20px;
  height: calc(100% - 40px);
  width: cacl(100% - 40px);
  background-color: #ffffff;
}
</style>
