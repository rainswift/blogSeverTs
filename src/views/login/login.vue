<template>
	<el-row>
	  <el-col :span="12" :offset="6">
			<el-form  ref="formRef" :model="form" label-width="120px">
			  <el-form-item label="用户名">
			    <el-input v-model="form.username" />
			  </el-form-item>
				<el-form-item label="密码">
				  <el-input v-model="form.password" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
					<el-button>Cancel</el-button>
				</el-form-item>
			</el-form>
	    <!-- <el-form ref="formRef" :model="myForm" label-width="100px" class="demo-ruleForm">
	      <el-form-item label="用户名" prop="username">
	        <el-input v-model.string="myForm.username" type="text" autocomplete="off" />
	      </el-form-item>
	      <el-form-item label="密码" prop="password">
	        <el-input v-model.string="myForm.password" type="password" autocomplete="off" />
	      </el-form-item>

	    </el-form> -->
	  </el-col>
	</el-row>
  
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import request from '@/utils/request'
// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

const onSubmit = (formEl: FormInstance | undefined) => {
	  console.log(form.username)
	// if (!formEl) return
	addUsers()

}
const addUsers = async () => {
  request.post('http://localhost:8080/add', {
    username: form.username,
    password: form.password
  }).then(res => {

    console.log(res.data)

  })
}
</script>