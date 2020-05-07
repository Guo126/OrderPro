<template>
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title }}</span>
        <div v-if="windowId !== -1" class="btn_group">
          <el-button style=" padding: 4px 4px" type="primary" @click="endMission()">完成当前任务</el-button>
          <el-button style=" padding: 4px 4px" type="success" @click="nextMission()">下一个</el-button>
          <el-button style=" padding: 4px 4px" type="primary" @click="end()">结束</el-button>
        </div>
      </div>
      <div v-if="!isStarted" class="start">
        <el-button v-if="windowId == -1" type="primary" round @click="getWin()">选择窗口</el-button>

        <el-button v-if="windowId !== -1" type="primary" round @click="start">点击开始</el-button>
        <!-- <el-button style=" padding: 3px 3px" type="primary" @click="start">开始</el-button> -->
      </div>
      <div v-if="isStarted" class="info-list">
        <el-row>
          <el-col :span="12">
            <el-card shadow="hover">业务ID：{{ dataObj.businessId }}</el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover">客户ID：{{ dataObj.customerInfo.userId }}</el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover">业务类型：{{ dataObj.businessTypeDesc }}</el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover">客户名称：{{ dataObj.customerInfo.userName }}</el-card>
          </el-col>
          <el-col :span="24">
            <el-card shadow="hover">业务内容：{{ dataObj.businessDesc }}</el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-dialog
      title="选择窗口"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-moda="enable"
      :close-on-press-escape="enable"
    >
      <div v-if="isSelected">
        您已选择 &nbsp;&nbsp;
        <el-button type="success" plain>{{ title }}</el-button>
      </div>
      <div v-if="!isSelected">
        <el-button
          v-for="item in winList"
          :key="item.window_id"
          type="primary"
          plain
          @click="windowId = item.window_id; title = item.window_desc"
        >{{ item.window_desc }}</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="confirm()">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isSelected: false,
      winList: [],
      windowId: -1,
      loading: true,
      enable: false,
      title: '窗口详情',
      isStarted: false,
      dialogVisible: true,
      info: {},
      dataObj: {
        customerInfo: {
          userId: undefined,
          userName: ''
        }
      }
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this.getWindow()
  },
  methods: {
    getWindow() {
      this.$store.dispatch('office/getWindow').then(res => {
        if (res.length == 0) {
          return
        }
        res.some(item => {
          if (item.onePerson) {
            this.windowId = item.windowMessage.window_id
            this.title = item.windowMessage.window_desc
            this.isSelected = true
            return true
          }
        })
        this.winList = res
      })
    },

    getWin() {
      this.getWindow()
      this.dialogVisible = true
    },
    confirm() {
      if (this.windowId == -1) {
        this.$notify({
          title: '提示',
          message: '请先选择窗口',
          type: 'warning'
        })
        return
      }
      this.dialogVisible = false
    },
    start() {
      this.$store
        .dispatch('office/start', { windowId: this.windowId })
        .then(res => {
          this.info = res
          // this.title = res.windowDesc;
          this.nextMission()
          this.isStarted = true
        })
        .catch(() => {
          this.loading = false
        })
    },
    end() {
      // if (!this.info.businessTypeId) {
      //   this.$notify({
      //     title: '提示',
      //     message: '请先点击开始！',
      //     type: 'warning'
      //   })
      //   return
      // }
      this.$store
        .dispatch('office/end')
        .then(res => {
          this.$notify({
            title: '提示',
            message: '打卡成功！',
            type: 'success'
          })
        })
        .catch(() => {
          this.loading = false
        })
    },
    endMission() {
      this.$store
        .dispatch('office/endMission')
        .then(res => {
          this.$notify({
            title: '提示',
            message: '处理成功！',
            type: 'success'
          })
          this.nextMission()
        })
        .catch(() => {})
    },
    nextMission() {
      if (!this.info.businessTypeId) {
        this.$notify({
          title: '提示',
          message: '请先点击开始！',
          type: 'warning'
        })
        return
      }
      this.$store
        .dispatch('office/getNext', {
          // officeId: this.userInfo.officeId,
          businessTypeId: this.info.businessTypeId
        })
        .then(res => {
          this.dataObj = res
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style scoped>
section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}

.box-card {
  margin-top: 16vh;
}

.info-list {
}
.start {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
}

.btn_group {
  display: flex;
  float: right;
  justify-content: space-between;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
