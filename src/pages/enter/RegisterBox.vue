<!-- 注册页面 -->
<template>
  <div id="register">
    <div class="content-body">
      <!-- 注册框 -->
      <div class="register-box">
        <div class="register-title-box">
          <p class="register-title">欢迎注册知乎</p>
          <div class="return-login">已有知乎账号?
            <router-link to="/adminLogin" style="color: #00c1de;">快捷登陆 ></router-link>
          </div>
        </div>
        <!-- 注册表单 -->
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="register-form">
          <!-- 姓名 -->
          <Form-item prop="name" class="form-name">
            <Input type="text" size="large" v-model="formInline.name" :disabled="disName" placeholder="设置会员名" maxlength="20" clearable/>
          </Form-item>
          <!-- 手机号 -->
          <Form-item prop="phone" class="form-phone">
            <Input type="text" size="large" v-model="formInline.phone" :disabled="disPhone" placeholder="设置你的手机号" maxlength="11" clearable/>
          </Form-item>
          <!-- 密码 -->
          <Form-item prop="password" class="form-password">
            <Input type="password" size="large" v-model="formInline.password" :disabled="disPassword" placeholder="设置你的登录密码" maxlength="20" clearable/>
          </Form-item>
          <!-- 确认密码 -->
          <Form-item prop="passwordCheck" class="form-passwordCheck">
            <Input type="password" size="large" v-model="formInline.passwordCheck" :disabled="disPasswordCheck" placeholder="请再次确认你的密码" maxlength="20" clearable/>
          </Form-item>
          <!-- 协议勾选框 -->
          <Form-item prop="agreement" class="form-agreement">
            <Checkbox-group v-model="formInline.agreement">
              <Checkbox v-model="disSubmit" :disabled="disAgreement">
                <router-link to="/agreement" style="color: #00c1de;">《法律声明和隐私权政策》</router-link>
              </Checkbox>
            </Checkbox-group>
          </Form-item>
          <!-- 注册按钮 -->
          <Form-item prop="submit" class="form-submit">
            <Button type="primary" long @click="registerSubmit('formInline')" :disabled="!disSubmit" class="form-submit-button">同意条款并注册</Button>
          </Form-item>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {
  },
  data () {
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写手机号'))
      } else {
        if (!Number.isInteger(+value)) {
          callback(new Error('请填写正确的手机号'))
        } else {
          callback()
        }
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.formInline.passwordCheck !== '') {
          // 对第二个密码框单独验证
          this.$refs.formInline.validateField('passwordCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formInline.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      disName: false,
      disPhone: false,
      disPassword: false,
      disPasswordCheck: false,
      disAgreement: false,
      disSubmit: false,
      formInline: {
        name: '',
        phone: '',
        password: '',
        passwordCheck: '',
        agreement: []
      },
      ruleInline: {
        name: [
          { required: true, message: '请填写用户名', trigger: 'blur' },
          { min: 2, max: 15, message: '用户名长度 2-15 个字符', trigger: 'blur' }
        ],
        phone: [
          { min: 11, max: 11, message: '请填写正确的手机号', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度 6-18 个字符', trigger: 'blur' }
        ],
        passwordCheck: [
          { validator: validatePassCheck, trigger: 'blur' }
        ],
        agreement: [
          { required: true, type: 'array', min: 1, message: '请勾选同意协议', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
  },
  methods: {
    registerSubmit (name) {
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.disSubmit = false
      //     this.axios.get('/api/user/register', {
      //       params: {
      //         json: JSON.stringify(this.formInline)
      //       }
      //     })
      //       .then((response) => {
      //         if (response.data === 200) {
      //           this.disName = true
      //           this.disPhone = true
      //           this.disPassword = true
      //           this.disPasswordCheck = true
      //           this.disAgreement = true
      //           this.disSubmit = false
      //           this.$Notice.success({
      //             title: '通知',
      //             desc: '注册成功，请返回登录!'
      //           })
      //         } else if (response.data === 201) {
      //           this.disSubmit = true
      //           this.$Notice.error({
      //             title: '通知',
      //             desc: '注册失败，数据问题！'
      //           })
      //         } else {
      //           this.disSubmit = true
      //           this.$Notice.error({
      //             title: '通知',
      //             desc: '异常！'
      //           })
      //         }
      //       })
      //       .catch((error) => {
      //         this.disSubmit = true
      //         this.$Notice.error({
      //           title: '通知',
      //           desc: '后端未启动，异常！'
      //         })
      //         console.info(error)
      //       })
      //   } else {
      //     this.$Notice.error({
      //       title: '通知',
      //       desc: '请填写完整！'
      //     })
      //   }
      // })
    }
  }
}
</script>

<style scoped>
  #register {
    width: 100%;
    height: 100%;
  }

  .content-body {
    width: 100%;
    height: 100%;
    padding: 70px;
  }

  .register-box {
    width: 1000px;
    height: 500px;
    background: #fff;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    padding-top: 30px;
    animation: bounceInDown 1.5s ease-in;
  }

  .register-title-box {
    height: auto;
    width: 100%;
    margin-bottom: 35px;
  }

  .register-title {
    font-size: 30px;
    color: #373d41;
  }

  .return-login {
    float: right;
    font-size: 13px;
    color: #73777a;
    margin-right: 50px;
  }

  .register-form {
    width: 330px;
    height: auto;
    margin: 0 auto;
  }

  .form-name,.form-phone,.form-password,.form-passwordCheck,.form-submit {
    width: 100%;
  }

  .form-submit-button {
    font-size: 14px;
    background: #33cde5;
    border-color: #00c1de;
  }

  .form-submit-button:hover {
    background: #00c1de;
  }

  .form-agreement {
    float: left;
  }
</style>
