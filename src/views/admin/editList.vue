<template>
  <div class="common-layout">
    <el-container>

      <el-main>

        <el-row>
          <el-col :span="12" :offset="6">
            <el-form ref="formRefSort" :inline="true"  :model="sortS" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model.string="sortS.username"  autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitSort(formRefSort)">搜索</el-button>
              </el-form-item>
            </el-form>
            <el-pagination background layout="prev, pager, next"
                           :page-size="limit"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :total="total" />
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24" :offset="0">

            <el-table  ref="multipleTableRef" :data="tableData" style="width: 100%" >
              <el-table-column type="selection" width="55" />
              <el-table-column prop="title" label="标题" width="180" />
              <el-table-column prop="introduce" label="介绍" />
              <el-table-column label="Operations">
                <template #default="scope">
                  <el-button size="small" @click="handleEdit(scope.row)"
                  >Edit</el-button
                  >
                  <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.row)"
                  >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection()">Clear selection</el-button>
            </div>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import {editList,editDelect} from '@/api/api'
import { useRouter } from 'vue-router';

const router = useRouter()
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
let tableData = ref([])
let total = ref(0)
const page = ref(1)
let limit = ref(10)
const sortS = reactive({
  username: '',
})
let ids = ref([])


const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  // console.log(`current page: ${val}`)
  getList()
}

const submitSort = (formEl: FormInstance | undefined) => {
  // if (!formEl) return
  getList()
}

// 删除
const handleDelete = (item) =>{
	editDelect({id: item.ID}).then((res)=>{

	})
}
// 修改
const handleEdit = (row) =>{
  router.push('/edit/'+row.ID)
}
//全选
const toggleSelection=()=>{
  let len =multipleTableRef.value!.getSelectionRows()
  let ids = []
  if(len.length > 0){
    len.map(item=>{
      ids.push(item.ID)
    })
  }
  editDelect({id:ids.join()}).then((res)=>{
    getList()
  })
}



const getList = async () => {
  editList({
    page: page.value,
    limit: limit.value,
    sort:"",
  }).then((res)=>{
    tableData.value = res.data
    total.value = res.total

  })
}

onMounted(() => {
  getList()
})




</script>
