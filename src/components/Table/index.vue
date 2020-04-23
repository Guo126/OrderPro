<template>
  <div>
    <el-table :data="dataList"  stripe border style="width: 100%">
      <el-table-column
        v-for="item in headList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        width="{ item.prop == 'rule' ? 300 :180 }"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          
          <el-button
            v-if="type == 'office'"
            @click="edit(scope.row)"
            type="primary"
            icon="el-icon-edit"
            circle
            size="mini"
          ></el-button>
          <el-button
            v-if="type == 'window' "
            @click="check(scope.row)"
            type="primary"
            icon="el-icon-view"
            circle
            size="mini"
          ></el-button>
          <el-button
            v-if="type == 'user' || type== 'office'"
            @click="handleClick(scope.row)"
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      switch (this.type) {
        case "user":
          this.$emit("remove", row.token);
          break;
        case "office":
          this.$emit("remove", row.id);
      }
    },
    check(row) {
      this.$emit("check", row);
    },
    edit(row) {
      this.$emit("edit", row);
    }
  },
  props: {
    headList: {
      type: Array,
      default: []
    },
    dataList: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      dialogFormVisible: false,
      temp: {
        name: "",
        rule: "",
        content: "",
        type: ""
      }
    };
  }
};
</script>