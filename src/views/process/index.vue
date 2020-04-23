<template>
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
        <div class="btn_group">
          <el-button style=" padding: 3px 3px" type="primary" @click="start">开始</el-button>
          <el-button style=" padding: 3px 3px" type="success" @click="next">下一个</el-button>
          <el-button style=" padding: 3px 3px" type="primary" @click="end">结束</el-button>
        </div>
      </div>
      <div>
          <div>业务ID：{{dataObj.businessId}}</div>
          <div>业务类型：{{dataObj.businessTypeDesc}}</div>
          <div>业务内容：{{dataObj.businessDesc}}</div>
          <div>客户ID：{{dataObj.customerInfo.userId}}</div>
          <div>客户名称：{{dataObj.customerInfo.userName}}</div>
      </div>
    </el-card>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "窗口详情",
      info: {},
      dataObj: {
          customerInfo:{}
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    start() {
      this.$store
        .dispatch("office/start")
        .then(res => {
          this.info = res;
          this.title = res.windowDesc;
          this.next();
        })
        .catch(() => {
          this.loading = false;
        });
    },
    end() {
        if (!this.info.businessTypeId) {
        this.$notify({
          title: "提示",
          message: "请先点击开始！",
          type: "warning"
        });
        return;
      }
      this.$store
        .dispatch("office/end")
        .then(res => {
          this.$notify({
          title: "提示",
          message: "打卡成功！",
          type: "success"
        });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    next() {
      if (!this.info.businessTypeId) {
        this.$notify({
          title: "提示",
          message: "请先点击开始！",
          type: "warning"
        });
        return;
      }
      this.$store
        .dispatch("office/getNext", {
          officeId: this.userInfo.officeId,
          businessTypeId: this.info.businessTypeId
        })
        .then(res => {
          this.dataObj = res;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>
<style>
section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
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
