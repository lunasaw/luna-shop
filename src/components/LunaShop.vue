<template>
  <div id="backcont">
    <div class="meituan-content">
      <div class="login-cont">
        <div class="meituan-title">青山商户端</div>
        <div class="meituan-user">
          <p>账号</p>
          <el-input v-model="name" class="inptflex" placeholder="请输入账号" clearable></el-input>
        </div>
        <div class="meituan-user">
          <p>密码</p>
          <el-input v-model="password" type="password" class="inptflex" placeholder="请输入密码" clearable></el-input>
        </div>
        <!-- 登录注册切换 -->
        <div class="reg-view">
          <p @click="regiserBtn">{{regiser?'注册':'登录'}}</p>
        </div>
        <!-- 登录注册按钮 -->
        <el-button class="meituan-btn" @click="login" v-if="regiser" type="success" size="medium">登录</el-button>
        <el-button class="meituan-btn" @click="regisert" v-else type="success" size="medium">注册</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  setup () {
    const { proxy } = getCurrentInstance()

    const user = reactive({
      name: '',
      password: '',
      regiser: true
    })
    const regiserBtn = () => {
      user.regiser = !user.regiser
    }
    const regisert = async () => {
      const registerUrl = proxy.$urls.m().register
      console.log(proxy.$urls.m().register)
      const data = {
        account: user.name,
        password: user.password
      }
      console.log(registerUrl)
      const res = await proxy.$request.doPost(registerUrl, data)
      ElMessage.success(res.data.msg)
      console.log(res)
      new proxy.$tips(res.data.msg).showToast()
    }
    const login = () => {
      console.log(user.name, user.password)
    }
    return {
      login,
      regisert,
      regiserBtn,
      ...toRefs(user)
    }
  }
}
</script>

<style>
</style>
