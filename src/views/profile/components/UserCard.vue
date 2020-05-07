<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>个人信息</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>您好，</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.userInfo.name }}</div>
        <div class="user-role text-center text-muted">{{ user.userInfo.sex == 'm'?'女':'男' }}</div>
      </div>
    </div>

    <div class="user-bio">
      <!-- <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Education</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            JS in Computer Science from the University of Technology
          </div>
        </div>
      </div>-->

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <svg-icon icon-class="skill" />
          <span>个人信息</span>
        </div>
        <div class="user-bio-section-body">
          <!-- <div>{{user.userInfo.cityDesc}}|{{user.userInfo.areaDesc}}|{{user.userInfo.officeDesc}}</div> -->
          <div class="info">
            <el-button type="primary" plain>{{ user.userInfo.cityDesc }}</el-button>
            <el-button type="success" plain>{{ user.userInfo.areaDesc }}</el-button>
            <el-button type="warning" plain>{{ user.userInfo.officeDesc }}</el-button>
          </div>
          <br>
          <el-button type="success" @click="dialog = true">修改密码</el-button>
        </div>
      </div>
      <el-dialog title="修改密码" :visible.sync="dialog" width="30%">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="旧密码">
            <el-input v-model="form.oldPwd" placeholder="请输入旧密码" show-password />
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="form.newPwd" placeholder="请输入新密码" show-password />
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="success" @click="resetPwd()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          role: '',
          userInfo: {
            name: '',
            sex: ''
          }
        }
      }
    }
  },
  data() {
    return {
      dialog: false,
      form: {
        oldPwd: '',
        newPwd: ''
      }
    }
  },
  methods: {
    resetPwd() {
      if (this.form.oldPwd !== '' && this.form.newPwd !== '') {
        this.$store.dispatch('user/resetPwd', this.form).then(res => {
          if (res.code === 20000) {
            this.$notify({
              title: '提示',
              message: '修改成功！',
              type: 'success'
            })
            this.dialog = false
          } else {
            this.$notify({
              title: '提示',
              message: '请填写完整信息！',
              type: 'warning'
            })
          }
        })
      } else {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  .info {
    display: flex;
  }
  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
