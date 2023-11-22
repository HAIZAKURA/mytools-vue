<template>
  <el-row :gutter="12">
    <el-col :span="8" :offset="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <el-text class="card-header-title" tag="b" @click="getRate">💰 Exchange Rate Query</el-text>
          </div>
        </template>
        <el-form size="large" label-position="left" label-width="150px">

          <el-form-item label="Transaction Currency">
            <el-select v-model="transCur" placeholder="Pick a Transaction Currency" filterable>
              <el-option
                v-for="item in transCurList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="Base Currency">
            <el-select v-model="baseCur" placeholder="Pick a Base Currency" filterable>
              <el-option
                v-for="item in baseCurList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item label="Settlement Date">
            <el-date-picker
              v-model="rawDate"
              type="date"
              placeholder="Pick a Settlement Date"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="success" icon="Search" circle @click="getRate"></el-button>
          </el-form-item>

        </el-form>

        <el-divider v-if="rateData"></el-divider>

        <div class="div-rate" v-if="rateData">
          <el-text type="danger" tag="b" class="rate-1">1</el-text>
          <el-text type="primary" tag="b" class="rate-2">&nbsp;{{ transCur }}</el-text>
          <el-text class="rate-1" style="color: #000;">&nbsp;=&nbsp;</el-text>
          <el-text type="danger" tag="b" class="rate-1">{{ rateData }}</el-text>
          <el-text type="primary" tag="b" class="rate-2">&nbsp;{{ baseCur }}</el-text>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import request from '../utils/request'
import { ElMessage } from 'element-plus'

export default {
  data() {
    return {
      transCurList: [
        { value: 'CNY', label: 'CNY, Yuan Renminbi' },
        { value: 'JPY', label: 'JPY, Yen' },
        { value: 'EUR', label: 'EUR, Euro' },
        { value: 'GBP', label: 'GBP, Pound Sterling' },
        { value: 'HKD', label: 'HKD, Hong Kong Dollar' },
        { value: 'USD', label: 'USD, U.S.Dollar' },
      ],
      baseCurList: [
        { value: 'CNY', label: 'CNY, Yuan Renminbi' },
        { value: 'JPY', label: 'JPY, Yen' },
        { value: 'EUR', label: 'EUR, Euro' },
        { value: 'GBP', label: 'GBP, Pound Sterling' },
        { value: 'HKD', label: 'HKD, Hong Kong Dollar' },
        { value: 'USD', label: 'USD, U.S.Dollar' },
      ],
      transCur: 'JPY',
      baseCur: 'CNY',
      rawDate: '',
      rateData: ''
    }
  },
  created: function() {
    this.rawDate = new Date()
  },
  methods: {
    getRate() {
      let year = this.rawDate.getFullYear()
      let month = this.rawDate.getMonth() + 1
      month = month < 10 ? '0' + month : month
      let day = this.rawDate.getDate()
      day = day < 10 ? '0' + day : day
      request.get('/api/rate', { params: { year: year, month: month, day: day, transCur: this.transCur, baseCur: this.baseCur } })
        .then(res => {
          if (res.data.code == 200) {
            this.transCur = res.data.data.transCur
            this.baseCur = res.data.data.baseCur
            this.rateData = res.data.data.rateData
          } else if (res.data.code == 400) {
            ElMessage({
              message: '400 Bad Request',
              type: 'error',
            })
          } else if (res.data.code == 502) {
            ElMessage({
              message: '502 Bad Gateway',
              type: 'error',
            })
          } else {
            ElMessage({
              message: 'Undefined Error',
              type: 'error',
            })
          }
        })
        .catch(err => {
          ElMessage({
              message: err,
              type: 'error',
            })
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-header-title
  color #000
  font-size 1.5em

.div-rate
  text-align center
  margin-top -0.25em

.div-rate-2
  text-align center
  margin-top 0.5em

.rate-1
  font-size 2em

.rate-2
  font-size 1em
</style>
  