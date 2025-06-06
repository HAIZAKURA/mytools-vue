<template>
  <el-container class="lab">

    <el-header class="lab-header">
      <el-text tag="b" size="large" class="lab-title" @click="goBackHome">HAIZAKURA Lab</el-text>
      <el-divider />
    </el-header>

    <el-main class="lab-main">
      <router-view />
    </el-main>

    <el-footer class="fixed-bottom-center">
      <a href="https://ipw.cn/ipv6webcheck/?site=lab.nya.run" title="本站支持IPv6访问" target="_blank">
        <img class="ipv6-badge" alt="本站支持IPv6访问" src="https://static.ipw.cn/icon/ipv6-certified-lite-s4.svg">
      </a>
    </el-footer>

  </el-container>
</template>

<script>
export default {
  methods: {
    goBackHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="stylus" scoped>
.lab
  font-family 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif

.lab-title
  cursor pointer
  margin-left 0.25em
  color #000000

.lab-header
  margin-top 1em

.fixed-bottom-center
  position fixed
  bottom 0
  left 50%
  transform translate(-50%, 0)
  text-align center
  width 100%
  z-index 999

.ipv6-badge
  display inline-block
  vertical-align middle
</style>
