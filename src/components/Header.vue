<template>
    <div class="headerTop">
            <el-menu
            :default-active="activeIndex1"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#2f4056"
            text-color="#fff"
            active-text-color="#ffd04b"
             router>
            <div class="title" >狗窝后台管理系统</div>
            <!-- <el-menu-item index="homepage" >首页</el-menu-item>
            <el-menu-item index="head">我的面板</el-menu-item>
            <el-menu-item index="kcxq">课程管理</el-menu-item> -->
            <div class="header-right">
                <!-- <el-popover
                ref="popover4"
                width="300"
                trigger="click">
                <el-tabs  >
                    <el-tab-pane label="最新公告" name="first">最新公告 XXXXXXX</el-tab-pane>
                    <el-tab-pane label="历史消息" name="second">配置管理 XXXXXXX</el-tab-pane>
                </el-tabs>
                </el-popover> -->
                <!-- <el-badge is-dot class="item" v-popover:popover4 >
                    <i class="el-icon-bell bell"></i>
                </el-badge> -->
                <el-dropdown trigger="click" >
                <span class="el-dropdown-link urse">
                    <img class="user-logo el-icon--left" v-bind:src="url " >
                    {{this.$store.state.nickName}}
                    <div class="el-icon-arrow-down el-icon--right"></div>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">个人中心</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </div>
            </el-menu>
    </div>
</template>
<script>
export default {
  name: 'Head',
  data () {
    return {
      urse: '',
      url : 'http://t.cn/RCzsdCq',
      activeIndex1: ''
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path.replace('/ ', ' ')
    }
  },
  created: function() {
    this.findmessage();
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(this)
      console.log(key, keyPath)
    },
    handleClick () {
      console.log('123')
    },
    findmessage (){
            var params = new URLSearchParams();
            params.append('userName', this.$store.state.username);

            this.$axios({
                method: 'post',
                url:'/api/findAdminMessage',
                data: params
            }).then((response)=>{
                console.log(response.data);
                if(response.data.statu==200)
                {
                  this.$store.commit('setNickName', response.data.data.userMessages.nickName)
                  if( response.data.data.userMessages.img != null)
                  {
                       this.url = response.data.data.userMessages.img;
                  }
                  
                }
            })
            .catch(function (error) {
              console.log(error);
            });
    }

  }
}
</script>
<style scoped>
.headerTop{
  width: 100%;
  height: 60px;
}

.title{
    color: #ffffff;
    font-size: 24px;
    opacity: 1;
    width: 300px;
    float: left;
    line-height: 60px;
    text-align: center;
}
.header-right{
    float: right;
    height: 60px;
    margin-right: 50px;
}
.urse{
    color: #ffffff;
    line-height: 60px;
    font-size: 14px;
}
.user-logo{
    position: absolute;
    left:-50px;
    top:10px;
    width:40px;
    height:40px;
    border-radius: 50%;
}
.item{
    margin-right: 70px;
}
.el-icon-bell{
    width: 40px;
    color: #ffffff;
    margin-right: -10px;
}
.el-menu--horizontal{
    border-bottom: 0px;
}
</style>
