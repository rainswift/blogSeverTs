<template>
	<div class="login">
		<el-form  ref="formRef" :model="form"  class="login-form">
			<h3 class="title">登录</h3>
		  <el-form-item label="用户">
		    <el-input v-model="form.username" />
		  </el-form-item>
			<el-form-item label="密码">
			  <el-input v-model="form.password" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onLoad(formRef)">登录</el-button>
				<el-button @click="onSubmit(formRef)">注册</el-button>
			</el-form-item>
		</el-form>
		<!-- <div id="particles-js">
		    <canvas class="particles-js-canvas-el"></canvas>
		</div> -->
	</div>
  
</template>

<script lang="ts" setup>

import { reactive,onMounted } from 'vue'
import { useRouter } from 'vue-router';
import request from '@/utils/request'
import { ElMessage } from 'element-plus'
import {getUserInfo} from '@/api/api'
// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})
onMounted(()=>{
	setTimeout(()=>{
		import('./js/lizi.js')
		particlesJS()
	},3000)
})

const onSubmit = (formEl: FormInstance | undefined) => {
	  console.log(form.username)
	// if (!formEl) return
	addUsers()

}
const router = useRouter()
const onLoad = async()=>{
	request.post('http://localhost:8080/login', {
	  username: form.username,
	  password: form.password
	}).then(res => {
		ElMessage({
			message: '登录成功',
			type: 'success',
		})
		getUserInfo({id:res.data.ID}).then((r)=>{
			localStorage.setItem('userData',JSON.stringify(r.data))
		})
    localStorage.setItem('token',res.token)
    

    // router.push('/edit')
	
	})
}
const addUsers = async () => {
  request.post('http://localhost:8080/add', {
    username: form.username,
    password: form.password
  }).then(res => {

  })
}
</script>

<style scoped  lang="scss">
	
	.boby{
	    position: fixed;
	    top: 0px;
	    left: 0px;
	    height: 100%;
	    width: 100%;
	    background: #ffffff;
	    background: radial-gradient( at center, #333, #000);
	}
	
	#particles-js {
	    background-size: cover;
	    background-position: 50% 50%;
	    background-repeat: no-repeat;
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.login {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 100%;
	  background-image: url("http://vue.ruoyi.vip/static/img/login-background.f9f49138.jpg");
	  background-size: cover;
	}
	.title {
	  margin: 0px auto 30px auto;
	  text-align: center;
	  color: #707070;
	}
	
	.login-form {
	  border-radius: 6px;
	  background: #ffffff;
	  width: 400px;
	  padding: 25px 25px 5px 25px;
	  .el-input {
	    height: 38px;
	    input {
	      height: 38px;
	    }
	  }
	  .input-icon {
	    height: 39px;
	    width: 14px;
	    margin-left: 2px;
	  }
	}
	.login-tip {
	  font-size: 13px;
	  text-align: center;
	  color: #bfbfbf;
	}
	.login-code {
	  width: 33%;
	  height: 38px;
	  float: right;
	  img {
	    cursor: pointer;
	    vertical-align: middle;
	  }
	}
	.el-login-footer {
	  height: 40px;
	  line-height: 40px;
	  position: fixed;
	  bottom: 0;
	  width: 100%;
	  text-align: center;
	  color: #fff;
	  font-family: Arial;
	  font-size: 12px;
	  letter-spacing: 1px;
	}
	.login-code-img {
	  height: 38px;
	}
</style>