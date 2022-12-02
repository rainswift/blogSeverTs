<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="博客名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="头像">
        <el-input v-model="form.headImg" />
      </el-form-item>
      <el-form-item label="介绍">
        <el-input v-model="form.introduce" />
      </el-form-item>
      <el-form-item label="gitHub">
        <el-input v-model="form.github" />
      </el-form-item>
      <el-form-item label="qq">
        <el-input v-model="form.qq" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="save">保存</el-button>
  </div>

</template>

<script setup>
import { ref,reactive } from 'vue';
import 'md-editor-v3/lib/style.css';
import request from '@/utils/request'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

const router = useRouter()
const text = ref('Hello Editor!');
let html =''
let user = JSON.parse(localStorage.getItem('userData'))
const form = reactive({
  name:user.name || '雨中燕',
  headImg:user.headImg ||'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6056f138-61fb-4f09-bc22-b277059a45e3/55d7f93c-3dcd-4de8-9472-596903311a86.jpeg',
  introduce:user.introduce ||'天下地上唯我独尊',
  github:user.github ||'https://github.com/rainswift',
  qq:user.qq ||'837484536',
  // userId: user.ID
})


const save = ((e)=>{
  request.post('http://localhost:8080/userSave',form).then(res => {
    ElMessage({
      message: '保存成功',
      type: 'success',
    })
    // router.push('/')
  })
  // editSave((obj)=>{

  // })
  console.log(e)
})



</script>