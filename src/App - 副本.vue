<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12" :offset="6">
            <h1>珍爱网数据</h1>
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
	
				      <el-form-item label="用户名" prop="name">
				        <el-input v-model.string="sortS.name"  autocomplete="off" />
				      </el-form-item>
							<el-form-item label="性别" prop="gender">
								<el-select v-model="sortS.gender" class="m-2" placeholder="Select" >
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value"
								    />
								</el-select>
							</el-form-item>
							<el-form-item label="年龄" prop="age">
							  <el-input v-model.string="sortS.age" />
							</el-form-item>
							<el-form-item label="身高" prop="height">
							  <el-input v-model.string="sortS.height" />
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
              <el-table-column prop="name" label="用户名" width="180" />
              <el-table-column prop="photo" label="图片"  width="180" >
								<template #default="scope">
									<el-avatar shape="square" :size="100" fit="fill" :src="scope.row.photo" />
								</template>
              </el-table-column>
							<el-table-column prop="href" label="链接" >
								<template #default="scope">
									<el-link :href="scope.row.href" target="_blank">{{scope.row.href}}</el-link>
									<!-- <a target="_blank" :href="scope.row.href">{{scope.row.href}}</a> -->
								</template>
							</el-table-column>
							<el-table-column prop="house" label="婚姻状况" />
							<el-table-column prop="habitation" label="居住地" />
							<el-table-column prop="gender" label="性别" />
							<el-table-column prop="age" label="年龄" />
							<el-table-column prop="height" label="身高" />
							<el-table-column prop="education" label="收入" />
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

import instance from './axios/index'


let tableData = ref([])

const page = ref(1)

const options = [
  {
    value: '男士',
    label: '男士',
  },
  {
    value: '女士',
    label: '女士',
  },
]

const sortS = reactive({
  name: '',
	gender:'女士',
	age:"20,30",
	height:"160,170",
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

const getUsers = async () => {
	// http://localhost:8080/admin/all?page=1&limit=2
	instance.get('http://localhost:8080/all', {
	  params: {
	    page: page.value,
	    limit: 20,
			sort:sortS.name,
			gender:sortS.gender,
			age:sortS.age,
			height:sortS.height,
	  }
	}).then(res => {
	  tableData.value = res.data.data
	  console.log(tableData)
	})
	
  // instance.get('http://localhost:8080/users', {
  //   params: {
  //     pageNum: 1,
  //     pageSize: 20,
  //   }
  // }).then(res => {
  //   tableData.value = res.data.data
  //   console.log(tableData)
  // })
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
  instance.post('http://localhost:8080/add', {
    username: myForm.username,
    password: myForm.password
  }).then(res => {

    console.log(res.data)
    getUsers()
  })
}

</script>
