<template>
  <div class="messageFrom">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      height="80vh"
      style="width: 100%"
    >
      <el-table-column prop="id" label="评论序号" width="80"></el-table-column>
      <el-table-column prop="topicID" label="评论帖子ID" width="120"></el-table-column>
      <el-table-column prop="uname" label="评论人昵称" width="180"></el-table-column>
      <el-table-column prop="fname" label="被评论人昵称" width="180"></el-table-column>
      <el-table-column prop="content" label="内容" width="400"></el-table-column>
      <el-table-column prop="time" label="时间" width="150"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除该评论</el-button>
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
  name: "post",
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
        url: "/api/findALLReply",
        data: params
      })
        .then(response => {
          console.log(response.data.data);
          console.log(response.data.data.length);
          var data = [];
          for (var i = 0; i < response.data.data.length; i++) {
            var dataone = {};
            dataone.id = response.data.data[i].id;
            dataone.uname = response.data.data[i].userName;
            dataone.fname = response.data.data[i].fromName;
            if( response.data.data[i].userName == response.data.data[i].fromName)
            {
                    dataone.fname = "";
            }
            dataone.content = response.data.data[i].reply.content;
            dataone.topicID = response.data.data[i].reply.topicID;
            dataone.time = response.data.data[i].reply.time;
            console.log(dataone.image);
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
 