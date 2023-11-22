<template>
  <el-row :gutter="12">
    <el-col :span="12" :offset="6">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-text class="card-header-title" tag="b" @click="getRate">💰 Exchange Rate Query</el-text>
          </div>
        </template>
        <el-form :inline="true" :model="formInline">

          <el-form-item label="transCur">
            <el-select v-model="transCur" placeholder="Pick a date">
              <el-option
                v-for="item in transCurList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="baseCur">
            <el-select v-model="baseCur" placeholder="Pick a date" filterable>
              <el-option
                v-for="item in baseCurList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

        </el-form>
        <el-divider />
        <span>{{ transCur }}</span>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import request from '../utils/request'

export default {
  data() {
    return {
      transCurList: [
        { value: 'CNY', label: 'CNY' },
        { value: 'JPY', label: 'JPY' },
      ],
      baseCurList: [
        { value: 'CNY', label: 'CNY' },
        { value: 'JPY', label: 'JPY' },
      ],
      transCur: 'JPY',
      baseCur: 'CNY',
      year: '',
      month: '',
      day: '',
      rateData: ''
    }
  },
  methods: {
    getRate() {
      request.get('/api/rate')
        .then(res => {
          if (res.data.code == 200) {
            this.transCur = res.data.data.transCur
            this.baseCur = res.data.data.baseCur
            this.rateData = res.data.data.rateData
          }
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-header-title
  color #000
  font-size 1.5em
</style>
  