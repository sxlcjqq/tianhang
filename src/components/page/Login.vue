<template>
    <div class="login-wrap">
        <div class="ms-title">
          <img class="ms-logo" src="../../../static/img/login_bgs.jpg"/>
        </div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                  <el-input
                    placeholder="用户名" size="large"
                    v-model="ruleForm.username" >
                    <i slot="prefix" class="qq_input_usericon"></i>
                  </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                      placeholder="密码" size="large"
                      v-model="ruleForm.password">
                      <i slot="prefix" class="qq_input_passicon"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="validate">
                    <el-input
                      placeholder="验证码" size="large"
                      v-model="ruleForm.validate">
                      <i slot="prefix" class="qq_input_valiicon"></i>
                      <i slot="suffix" class="qq_input_vali">
                        <img :src="validateUrl"/>
                      </i>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" size="large" @click="submitForm('ruleForm')" class="loginbtn">登　录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    validate: ''
                },
                validateUrl: './static/img/login_vali.jpg',
                // validateUrl: '../../../static/img/login_vali.jpg',
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    validate: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('qq_username',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
      position: relative;
      width:100%;
      height:100%;
      background:#ffffff;
    }
    .ms-title{
      width:100%;
      text-align: center;
    }
    .ms-login{
      width: 450px;
      padding:30px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0.5px 0.866px 35px 0px rgb( 150, 150, 150 );
      margin: 50px auto 20px;
    }
    .ms-logo{
      display: block;
      margin:0 auto 0;
      max-width: 100%;
    }
    /*
    .ms-text{
      display: block;
      margin:28px auto 0;
      width:725px;
      height:49px;
    } */
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
    }
    .loginbtn{
      padding:0;
      background-color: #3e8860;
      font-size: 20px;
      border:none;
      border-radius: 5px;
      line-height: 48px;
      height: 48px;
      margin-top: 10px;
    }
    .loginbtn:hover{
      background-color: #3e8860;
    }
    .qq_input_usericon{
      width: 20px;
      height: 20px;
      display: block;
      margin-top: 14px;
      margin-left: 6px;
      vertical-align: middle;
      background: url(../../../static/img/login_user.png) no-repeat center center;
      background-size: contain;
    }
    .qq_input_passicon{
      width: 20px;
      height: 20px;
      display: block;
      margin-top: 14px;
      margin-left: 6px;
      vertical-align: middle;
      background: url(../../../static/img/login_pass.png) no-repeat center center;
      background-size: contain;
    }
    .qq_input_valiicon{
      width: 20px;
      height: 20px;
      display: block;
      margin-top: 14px;
      margin-left: 6px;
      vertical-align: middle;
      background: url(../../../static/img/login_vali.png) no-repeat center center;
      background-size: contain;
    }
    .qq_input_vali{
        display: block;
    }
    .qq_input_vali img{
      max-width: 137px;
      max-height: 35px;
      margin-top: 6px;
      margin-right: 3px;
      display: block;
    }
</style>
<style>
.login-wrap .el-input__inner{
  height: 48px;
  line-height: 48px;
  font-size: 18px;
}
.login-wrap .el-input--prefix .el-input__inner {
  padding-left: 48px;
}
</style>
