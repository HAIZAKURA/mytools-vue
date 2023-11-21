<script setup>
</script>

<template>
  <el-container class="lab">

    <el-header class="lab-header">

      <el-text tag="b" size="large" class="lab-title" @click="goBackHome">HAIZAKURA Lab</el-text>

      <el-divider />

    </el-header>

    <el-main class="lab-main">

      <router-view />

    </el-main>

  </el-container>
</template>

<script>
export default {
  methods: {
      goBackHome() {
          this.$router.push({ name: 'Home' })
      }
  }
}
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
</style>
