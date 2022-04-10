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
          <el-input v-model="name" class="inptflex" placeholder="请输入密码" clearable></el-input>
        </div>
        <!-- 登录注册切换 -->
        <div class="reg-view">
            <p>注册</p>
        </div>
        <!-- 登录注册按钮 -->
        <el-button class="meituan-btn" type="success" size="medium">登录</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
</style>
