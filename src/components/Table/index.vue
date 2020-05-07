<template>
  <div>
    <el-table :data="dataList" stripe border style="width: 100%">
      <el-table-column
        v-for="item in headList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        width="{ item.prop == 'rule' ? 300 :180 }"
      />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">

          <el-button
            v-if="type == 'office'"
            type="primary"
            icon="el-icon-edit"
            circle
            size="mini"
            @click="edit(scope.row)"
          />
          <el-button
            v-if="type == 'window' "
            type="primary"
            icon="el-icon-view"
            circle
            size="mini"
            @click="check(scope.row)"
          />
          <el-button
            v-if="type == 'user' || type== 'office'"
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
            @click="handleClick(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    headList: {
      type: Array,
      default: function() {return []}
    },
    dataList: {
      type: Array,
      default: function() {return []}
    },
    type: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      dialogFormVisible: false,
      temp: {
        name: '',
        rule: '',
        content: '',
        type: ''
      }
    }
  },
  methods: {
    handleClick(row) {
      switch (this.type) {
        case 'user':
          this.$emit('remove', row.token)
          break
        case 'office':
          this.$emit('remove', row.id)
      }
    },
    check(row) {
      this.$emit('check', row)
    },
    edit(row) {
      this.$emit('edit', row)
    }
  }
}
</script>
