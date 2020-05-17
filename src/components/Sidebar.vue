<template>
    <div class="sidebar">
       <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#2f4056" text-color="#fff" theme="dark" unique-opened router>
            <template v-for="item in items" >
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.id">
                        <template slot="title" class="menu-left"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.id">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-setting",
          index: "allUser",
          title: "用户信息管理"
        },
        {
          icon: "el-icon-setting",
          index: "allCommodity",
          title: "商品信息管理",
          subs: [
            {
              index: "allCommodity",
              title: "所有商品信息"
            },
            {
              index: "allCommodityRecord",
              title: "交易记录"
            },
            {
              index: "allCommodityStorage",
              title: "预售记录"
            }
          ]
        },
        {
          icon: "el-icon-menu",
          index: "2",
          title: "帖子信息管理",
          subs: [
            {
              index: "allPost",
              title: "帖子管理"
            },
            {
              index: "allReply",
              title: "评论管理"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", " ");
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  margin-top: 1px;
  height: calc(100vh - 62px);
  color: #c0c5cc;
}
.sidebar > ul {
  height: 100%;
}
.el-menu-vertical-demo {
  float: left;
  width: 100%;
}
.menu-left {
  float: left;
}
</style>
