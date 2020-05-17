<template>
  <div class="messageFrom">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%"
    >
      <el-table-column prop="id" label="账号ID" width="80"></el-table-column>
      <el-table-column prop="userName" label="账户名" width="180"></el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别" width="60"></el-table-column>
      <el-table-column prop="introduce" label="自我介绍" width="180"></el-table-column>
      <el-table-column prop="bornTime" label="注册时间" width="180"></el-table-column>
      <el-table-column prop="state" label="账户状态" width="80"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改密码</el-button>
           <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">恢复账号</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">停用账号</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagesize"
      layout="total, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "AllUser",
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
      tableData: []
    };
  },
  created: function() {
    this.table();
  },
  methods: {
    table: function() {
      var params = new URLSearchParams();
      this.$axios({
        method: "post",
        url: "/api/findALLUserMessage",
        data: params
      })
        .then(response => {
          console.log(response.data.data);
          console.log(response.data.data.length);
          var data = [];
          for (var i = 0; i < response.data.data.length; i++) {
            var dataone = {};
            dataone.id = response.data.data[i].id;
            dataone.userName = response.data.data[i].username;
            if(response.data.data[i].state == 0)
            {
                dataone.state = "已停用";
            }else{
                dataone.state = "正常";
            }
            dataone.nickname = response.data.data[i].userMessages.nickName;
            dataone.email = response.data.data[i].userMessages.email;
            dataone.sex = response.data.data[i].userMessages.sex;
            dataone.introduce = response.data.data[i].userMessages.introduce;
            dataone.bornTime = response.data.data[i].userMessages.bornTime;
            data.push(dataone);
          }
          this.tableData = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    inf: function() {
      console.log(this.tableData);
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    handleDelete(index, row) {
      console.log(index, row);
    //   var params = new URLSearchParams();
    //   params.append("id", row.uid);
    //   this.$axios({
    //     method: "post",
    //     url: "http://localhost:8080/dropuser.do",
    //     data: params
    //   })
    //     .then(response => {
    //       if (response.data.success == "true") {
    //         alert("删除成功");
    //       } else {
    //         alert("别删他 他还有书没还");
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    }
  }
};
</script>

<style scoped>
.messageFrom {
  width: 100%;
  height: 100%;
}
.content {
  width: 500px;
  height: 100%;
  max-height: 500px;
  margin: 0 auto;
  background: yellow;
}
</style>
