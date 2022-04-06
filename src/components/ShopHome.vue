<template>
  <el-container class="layout-container-demo" style="height: 500px; border: 1px solid #eee">
    <el-header>
      <div class="head-img header">
        <div>
          <img src="../assets/heima.png" alt="">
          <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template #title>
                后台管理系统
              </template>

              <el-menu-item-group title="首页">
                <el-menu-item index="1-1">
                  <el-icon :size="15">
                    <avatar />
                  </el-icon><span /> Option 1
                </el-menu-item>
                <el-menu-item index="1-2">
                  <el-icon :size="15">
                    <briefcase />
                  </el-icon><span /> Option 2
                </el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">
                  <el-icon :size="15">
                    <chat-line-round />
                  </el-icon><span /> Option 3
                </el-menu-item>
              </el-menu-item-group>

              <el-submenu index="1-2">
                <template #title>
                  <el-icon :size="15">
                    <message />
                  </el-icon><span /> Option6
                </template>
                <el-menu-item index="1-2-1">
                  <el-icon :size="15">
                    <d-arrow-right />
                  </el-icon><span /> Option 4-1
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      // 左侧菜单数据
      menulist: [],
      iconsObj: {

      },
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
      console.log(res)
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-submenu {
  width: 100%;
}
.el-header {
  background-color: #373d41;
  .head-img {
    width: 60x;
    height: 60px;
    margin-left: 0%;
    display: block;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0px 20px;
    .el-menu-item {
      padding: 0px;
    }
  }
}
.el-main {
  background-color: #eaedf1;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>>
