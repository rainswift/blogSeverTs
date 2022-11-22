<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12" :offset="6">
            <h1>注册</h1>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
				
        <el-row>
          <el-col :span="12" :offset="6">
            <el-form ref="formRef" :model="myForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model.string="myForm.username" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model.string="myForm.password" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(formRef)">添加</el-button>
                <el-button @click="resetForm(formRef)">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
				
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
								<el-pagination  v-model:currentPage="page" background layout="prev, pager, next" :total="1000" @size-change="handleSizeChange"  @current-change="handleCurrentChange"/>
				  </el-col>
					
				</el-row>

        <el-row>
          <el-col :span="24" :offset="0">
				
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="username" label="用户名" width="180" />
							<el-table-column prop="password" label="密码" />
							<el-table-column prop="CreatedAt" label="创建时间" />
							<el-table-column label="Operations">
								<template #default="scope">
									<el-button size="small" @click="handleEdit(scope.$index, scope.row)"
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
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'

import request from '@/utils/request'

let tableData = ref([])

const page = ref(1)

const sortS = reactive({
  username: '',
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  // console.log(`current page: ${val}`)
	getUsers()
}

const submitSort = (formEl: FormInstance | undefined) => {
  // if (!formEl) return
  getUsers()
}

// 删除
const handleDelete = (item) =>{
	request.post('http://localhost:8080/userDelect', {
		 id: item.ID
	}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(res => {
	  getUsers()
	})
}

const getUsers = async () => {
	// http://localhost:8080/admin/all?page=1&limit=2
	request.get('http://localhost:8080/userList', {
	  params: {
	    page: page.value,
	    limit: 20,
			sort:sortS.username,
	  }
	}).then(res => {
	  tableData.value = res.data
	  console.log(tableData)
	})
	
}


onMounted(() => {
  getUsers()
})



const formRef = ref<FormInstance>()

const myForm = reactive({
  username: '',
  password: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  addUsers()
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const addUsers = async () => {
  request.post('http://localhost:8080/add', {
    username: myForm.username,
    password: myForm.password
  }).then(res => {

    console.log(res.data)
    getUsers()
  })
}

</script>
