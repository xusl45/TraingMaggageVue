<!-- 登录页面 -->
<template>
  <div id="login">
    <div class="content-body">
      <div class="content-body-box">
        <!-- 左边的文字链接 -->
        <div class="text-link-box">
          <p>{{IntroTitle}}</p>
          <div v-for="item in IntroContent" :key="item.msg" style="margin-bottom: 5px">
            <router-link to="/adminLogin">{{item.msg}}</router-link>
          </div>
        </div>
        <!-- 右边的登录框 -->
        <div class="login-box">
          <div class="login-box-title">密码登录</div>
          <!-- 表单-->
          <el-form ref="formInline" :model="formInline" :rules="ruleInline" inline class="login-form">
            <!-- 账号 -->
            <el-form-item prop="userName" class="form-user">
              <el-input v-model="formInline.user" placeholder="用户账号"  style="width:350px;font-size: 14px;margin-bottom: 20px" ></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password" class="form-password">
              <el-input placeholder="请输入密码" v-model="formInline.password"  style="width:350px;font-size: 14px;margin-bottom: 20px" show-password></el-input>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-form-item class="form-submit"  >
              <el-button type="primary"  long @click="login"  class="form-submit-button" round>登录</el-button>
            </el-form-item>
          </el-form>
          <div class="link-bottom-box">
            <router-link to="/adminRegister" class="link-register">免费注册</router-link>
            <router-link to="/adminForget" class="link-forget">忘记密码</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      IntroTitle: '狗窝后台管理',
      IntroContent: [
        {msg: '智能管理用户信息'},
        {msg: '资深程序猿'},
        {msg: '大数据算法'},
        {msg: '数据管理'}
      ],
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
  },
  methods: {
    login: function () {
            var params = new URLSearchParams();
            params.append('userName', this.formInline.user);
            params.append('password', this.formInline.password);

            this.$axios({
                method: 'post',
                url:'/api/adminLogin',
                data: params
            }).then((response)=>{
                console.log(response.data);
                if(response.data.statu==200)
                {
                  this.$store.commit('setID', response.data.data.id)
                  this.$store.commit('setUsername', response.data.data.username)
                  this.$router.push({name: 'index' });
                  
                }else{
                   alert("账号或密码错误");
                }
            })
            .catch(function (error) {
              console.log(error);
            });

        },
  }
}
</script>

<style scoped>
  #login {
    height: 100%;
    width: 100%;
  }

  .content-body {
    height: 400px;
    width: 100%;
    padding: 140px;
  }

  .content-body-box {
    height: 400px;
    width: 1000px;
    margin: 0 auto;
  }

  .text-link-box {
    height: 400px;
    width: 300px;
    float: left;
    margin-top: 70px;
    margin-left: 40px;
    animation: bounceInLeft 1.5s ease-in;
  }

  .text-link-box p{
    color: white;
    font-size: 30px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .text-link-box a{
    color: white;
    font-weight: 100;
    font-size: 15px;
    letter-spacing: 1px;
    margin-left: 5px;
  }

  .login-box {
    height: 350px;
    width: 370px;
    float: right;
    border-radius: 10px;
    background: rgba(204, 204, 204, 0.1);
    padding: 35px 25px 0 25px;
    margin-right: 20px;
    animation: bounceInRight 1.5s ease-in;
    transition: box-shadow 0.5s;
    -moz-transition:box-shadow 0.5s; /* Firefox 4 */
    -webkit-transition:box-shadow 0.5s; /* Safari and Chrome */
    -o-transition:box-shadow 0.5s; /* Opera */
  }

  .login-box:hover {
    background: rgba(87, 87, 87, 0.2);
    box-shadow: 0 0 10px #fff;
  }

  .login-box-title {
    width: 100%;
    height: 40px;
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: white;
    margin-bottom: 10px;
  }

  .form-user,.form-password {
    margin-bottom: 25px;
    width: 100%;
    height: 50px;
  }

  .form-submit {
    margin-bottom: 15px;
    width: 100%;

  }
  .form-submit-button {
    background: #00c1de;
    border-color: #00c1de;
    width: 350px;
    height: 40px;
  }

  .link-bottom-box {
    height: 20px;
    width: 100%;
    margin-bottom: 10px;
  }

  .link-forget,.link-register {
    float: right;
    font-size: 12px;
    margin-left: 10px;
    color: #9b9ea0;
  }

  .link-forget:hover,.link-register:hover {
    color: #00c1de;
  }

  .link-third-box {
    height: 30px;
    width: 100%;
  }

  .link-third-text {
    margin: 0 auto;
    float: left;
    line-height: 25px;
    color: white;
  }

  .link-third-icon-qq,.link-third-icon-alipay {
    height: 20px;
    width: 20px;
    margin-left: 10px;
    float: left;
    margin-top: 2px;
  }

  .link-third-icon-weixin,.link-third-icon-taobao {
    height: 22px;
    width: 22px;
    margin-left: 8px;
    float: left;
    margin-top: 1px;
  }
</style>
