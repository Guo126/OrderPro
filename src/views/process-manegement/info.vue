<template>
  <section>
    <div class="filter-container">
      <el-input
        v-model="listQuery.id"
        placeholder="窗口ID"
        style="width: 20vw;"
        class="filter-item"
        clearable
        @keyup.enter.native="handleSearch"
      />

      <el-input
        v-model="listQuery.name"
        placeholder="窗口名称"
        style="width: 20vw;"
        class="filter-item"
        clearable
        @keyup.enter.native="handleSearch"
      />

      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-search"
        @click="handleSearch"
      >搜索</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >新增</el-button>
    </div>
    <!-- 表格 -->
    <diy-table :headList="headList" :dataList="dataList" @remove="removeUser" type="window"></diy-table>

    <!-- 新增弹窗 -->
    <el-dialog title="新增业务" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="middle"
        label-width="70px"
        style="width: 400px; margin-left:100px;"
      >
        <el-form-item label="窗口名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>

        <!-- <el-form-item label="业务类型" prop="sex">
          <el-select v-model="temp.sex" class="filter-item" placeholder="点击选择">
            <el-option
              v-for="item in sexList"
              :key="item.key"
              :label="item.display_name"
              :value="item.key"
            />
          </el-select>
        </el-form-item> -->

        <el-form-item label="业务类型" prop="username">
          <el-input v-model="temp.username" />
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="createUser()">确认</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import diyTable from "../../components/Table/index";
import { mapGetters } from "vuex";
export default {
  created() {
    this.listQuery = {
      name: undefined,
      role: undefined, //  1，2，3，4
      level: this.userInfo.levelId,
      areaId: this.userInfo.areaId
    };
    this.handleSearch();
  },
  data() {
    return {
      
      
      dialogFormVisible: false,
      headList: [
        {
          prop: "id",
          label: "窗口ID"
        },
        {
          prop: "name",
          label: "窗口名称"
        },
        {
          prop: "type",
          label: "业务类型"
        }
      ],

      listQuery: {
        name: "",
        id: "" //0-》所有   1，2，3，4
      },
      dataList: [],
      typeList: [],
      temp: {
        name: "",
        username: "",
        pwd: "",
        sex: "",
        level: undefined,
        city: undefined,
        area: undefined,
        office: undefined
      }
    };
  },
  components: { diyTable },
  computed: {
    ...mapGetters(["userInfo", "roles"])
  },
  methods: {
    
    getArea() {
      this.$store
        .dispatch("office/getArea", { cityId: this.temp.city })
        .then(res => {
          this.areaList = res;
        });
    },
    
    handleSearch() {
      this.loading = true;
      this.$store
        .dispatch("user/search", this.listQuery)
        .then(res => {
          let temp = res.data;
          temp.forEach(item => {
            item.sex = item.sex == "m" ? "女" : "男";
          });
          this.dataList = temp;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleCreate() {
      this.dialogFormVisible = true;
    },
    createUser() {
      let msg = "";
      let showError = false;
      if (Object.values(this.temp).some(item => !item || item == "")) {
        showError = true;
        msg = "请填写完整信息";
      } else if (this.temp.pwd.length < 5) {
        showError = true;
        msg = "密码不得小于5位";
      }
      if (showError) {
        this.$notify({
          title: "提示",
          message: msg,
          type: "warning"
        });
        return;
      }

      this.loading = true;

      this.$store
        .dispatch("user/create", this.temp)
        .then(res => {
          this.$notify({
            title: "提示",
            message: "新增成功！",
            type: "success"
          });
          this.handleSearch();
          this.loading = false;
          this.dialogFormVisible = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    removeUser(id) {
      this.$store.dispatch("user/remove", { targetToken: id }).then(res => {
        this.$notify({
          title: "提示",
          message: "删除成功！",
          type: "success"
        });
        this.handleSearch();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  padding: 5vh 5vw;
}
</style>