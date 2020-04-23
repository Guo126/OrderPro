<template>
  <section>
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        placeholder="用户名"
        style="width: 30vw;"
        class="filter-item"
        clearable
        @keyup.enter.native="handleSearch"
      />
      <el-select
        v-model="listQuery.role"
        placeholder="角色"
        clearable
        style="width: 10vw"
        class="filter-item"
      >
        <el-option v-for="item in roleList" :key="item.code" :label="item.role" :value="item.code" />
      </el-select>

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
    <diy-table :headList="headList" :dataList="dataList" @remove="removeUser" type="user"></diy-table>
    <!-- 新增弹窗 -->
    <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="middle"
        label-width="70px"
        style="width: 400px; margin-left:100px;"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="temp.username" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="temp.pwd" />
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="temp.sex" class="filter-item" placeholder="点击选择">
            <el-option
              v-for="item in sexList"
              :key="item.key"
              :label="item.display_name"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="角色等级" prop="level">
          <el-select v-model="temp.level" class="filter-item" placeholder="点击选择">
            <el-option
              v-for="item in roleList"
              :key="item.code"
              :label="item.role"
              :value="item.code"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="城市" prop="city">
          <el-select
            v-model="temp.city"
            class="filter-item"
            placeholder="点击选择或搜索"
            @change="getArea"
            filterable
          >
            <el-option
              v-for="item in cityList"
              :key="item.city_id"
              :label="item.city_desc"
              :value="item.city_id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="区域" prop="area">
          <el-select
            v-model="temp.area"
            class="filter-item"
            placeholder="点击选择或搜索"
            @change="getOffice"
            filterable
          >
            <el-option
              v-for="item in areaList"
              :key="item.area_id"
              :label="item.area_desc"
              :value="item.area_id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="营业厅" prop="office">
          <el-select v-model="temp.office" class="filter-item" placeholder="点击选择或搜索" filterable>
            <el-option
              v-for="item in officeList"
              :key="item.office_id"
              :label="item.office_desc"
              :value="item.office_id"
            />
          </el-select>
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
    this.getCity();
  },
  data() {
    return {
      calendarTypeOptions: [
        { key: 1, display_name: "China" },
        { key: 2, display_name: "USA" },
        { key: 3, display_name: "Japan" },
        { key: 4, display_name: "Eurozone" }
      ],
      sexList: [
        { key: "y", display_name: "男" },
        { key: "m", display_name: "女" }
      ],
      dialogFormVisible: false,
      headList: [
        {
          prop: "name",
          label: "用户名"
        },
        {
          prop: "sex",
          label: "性别"
        },
        {
          prop: "levelDesc",
          label: "角色"
        },
        {
          prop: "workAge",
          label: "平均时长"
        },
        {
          prop: "cityDesc",
          label: "所属城市"
        },
        {
          prop: "areaDesc",
          label: "所属区域"
        },
        {
          prop: "officeDesc",
          label: "所属营业厅"
        }
      ],

      roleList: [
        {
          code: 1,
          role: "市级管理员"
        },
        {
          code: 2,
          role: "区级管理员"
        },
        {
          code: 3,
          role: "营业厅级管理员"
        },
        {
          code: 4,
          role: "业务员"
        }
      ],
      listQuery: {
        name: "",
        role: "" //0-》所有   1，2，3，4
      },
      dataList: [],
      cityList: [],
      areaList: [],
      officeList: [],
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
    getCity() {
      this.$store.dispatch("office/getCity").then(res => {
        this.cityList = res;
      });
    },
    getArea() {
      this.$store
        .dispatch("office/getArea", { cityId: this.temp.city })
        .then(res => {
          this.areaList = res;
        });
    },
    getOffice() {
      this.$store
        .dispatch("office/getOffice", { areaId: this.temp.area })
        .then(res => {
          this.officeList = res;
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