<template>
  <el-space wrap alignment="stretch" size="default">
    <el-card v-for="item in cardList" shadow="always" class="card">
      <template #header>
          <div class="card-header">
            <el-text tag="b" size="large" class="card-header-title" @click="goTo(item.name)">{{ item.title }}</el-text>
          </div>
        </template>
        <div class="card-body">
          <el-text line-clamp="2">{{ item.desc }}</el-text>
        </div>
        <div class="card-bottom">
          <el-link :href="item.url" :underline="false">
            <el-text type="info" size="small">{{ currentUrl + item.url }}</el-text>
          </el-link>
        </div>
    </el-card>
  </el-space>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          title: '💰 Exchange Rate Query',
          name: 'Rate',
          url: '/rate',
          desc: 'Exchange rates provided on this website are from UnionPay System.',
        },
      ],
      currentUrl: window.location.href.endsWith('/') ? window.location.href.split('/').slice(0, -1).join('/') : window.location.href,
    };
  },
  methods: {
    goTo(val) {
      this.$router.push({ name: val });
    },
  },
};
</script>

<style lang="stylus" scoped>
.card
  @media (min-width 640px)
    width 30vw
    

.card-header
  display flex
  justify-content space-between
  align-items center
  cursor pointer

.card-header-title
  color #000000

.card-body
  margin-top -0.5em

.card-bottom
  margin-top 1em
  line-height 1em
  display flex
  justify-content space-between
  align-items center
</style>
