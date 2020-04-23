<template>
  <section>
    <div class="filter-container">
      <el-input
        v-model="listQuery.name"
        placeholder="业务名称"
        style="width: 20vw;"
        class="filter-item"
        clearable
        @keyup.enter.native="handleSearch"
      />

      <el-select
        v-model="listQuery.typeId"
        style="width: 20vw;"
        class="filter-item"
        placeholder="点击选择业务类型"
        clearable
      >
        <el-option
          v-for="item in typeList"
          :key="item.business_type_id"
          :label="item.business_type_desc"
          :value="item.business_type_id"
        />
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
    <diy-table
      :headList="headList"
      :dataList="dataList"
      @remove="removeProcess"
      @check="checkProcess"
      @edit="editProcess"
      type="office"
    ></diy-table>

    <!-- 新增弹窗 -->
    <el-dialog title="新增业务" :visible.sync="dialogFormVisible">
      <el-form
        :model="temp"
        label-position="middle"
        label-width="70px"
        style="width: 400px; margin-left:100px;"
      >
        <el-form-item label="业务名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>

        <el-form-item label="业务类型" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="点击选择">
            <el-option
              v-for="item in typeList"
              :key="item.business_type_id"
              :label="item.business_type_desc"
              :value="item.business_type_id"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="业务内容" prop="content">
          <el-input type="textarea" v-model="temp.content" />
        </el-form-item>
        <!-- <el-form-item label="业务规则" prop="rule">
          <el-input type="textarea" v-model="temp.rule" />
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="createProcess()">确认</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import diyTable from "../../components/Table/index";
import { mapGetters } from "vuex";
export default {
  created() {
    this.getTypeList();
  },
  data() {
    return {
      dialogFormVisible: false,
      headList: [
        {
          prop: "id",
          label: "业务ID"
        },
        {
          prop: "type",
          label: "业务类型"
        },
        {
          prop: "name",
          label: "业务名称"
        },
        {
          prop: "content",
          label: "业务内容"
        }
      ],

      listQuery: {
        name: "",
        typeId: "" //0-》所有   1，2，3，4
      },
      dataList: [],
      typeList: [],
      typeMap: undefined,
      temp: {
        name: "",
        content: "",
        type: ""
      },
      currId: 0,
      oprationType: 0 ,//0 创建   1 修改
    };
  },
  components: { diyTable },
  computed: {
    ...mapGetters(["userInfo", "roles"])
  },
  methods: {
    checkProcess(row) {
      // const {} = row;
      this.dialogFormVisible = true;
    },
    editProcess(row) {
      const { id , name ,content ,type_id ,type} = row;
      // this.currId = id;
      this.temp.id = id;
      this.temp.name = name;
      this.temp.content = content;
      this.temp.type_id = type_id;
      this.temp.type = type;

      this.oprationType = 1;
      this.dialogFormVisible = true;
    },

    getTypeList() {
      this.$store.dispatch("business/getTypeList").then(res => {
        this.typeList = res;
        let map = new Map();
        res.forEach(item => {
          map.set(item.business_type_id, item.business_type_desc);
        });
        this.typeMap = map;
        this.handleSearch();
      });
    },

    handleSearch() {
      this.loading = true;
      this.$store
        .dispatch("business/getBusiness",this.listQuery)
        .then(res => {
          let temp = res;

          temp = temp.map(item => {
            return {
              id: item.business_id,
              name: item.business_desc,
              content: item.business_detail,
              type: this.typeMap.get(item.business_type_id),
              type_id: item.business_type_id
            };
          });
          this.dataList = temp;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleCreate() {
      this.temp = {
        name: "",
        content: "",
        type: ""
      },
      this.oprationType = 0;

      this.dialogFormVisible = true;
    },
    createProcess() {
      let msg = "";
      let showError = false;
      
      if (Object.values(this.temp).some(item => !item || item == "")) {
        showError = true;
        msg = "请填写完整信息";
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
      let url = this.oprationType == 0 ? "business/create" : "business/rename";
      // let temp = this.temp;
      // temp['id'] = this.currId;
      this.$store
        .dispatch(url, this.temp)
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
    removeProcess(id) {
      this.$store.dispatch("business/deleteBusiness", { id: id }).then(res => {
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