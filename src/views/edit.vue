<template>
	<el-form :model="form" label-width="120px">
		<el-form-item label="标题">
			<el-input v-model="form.title" />
		</el-form-item>
		<el-form-item label="图片">
			<el-input v-model="form.imgBg" />
		</el-form-item>
    <el-form-item label="介绍">
      <el-input v-model="form.introduce" />
    </el-form-item>
		<el-form-item label="分类">
			<el-radio-group v-model="form.label">
				<el-radio label="实用教程" />
				<el-radio label="实用资源" />
				<el-radio label="实用源码" />
				<el-radio label="实用工具" />
			</el-radio-group>
		</el-form-item>
		<el-form-item label="内容">
			<md-editor v-model="form.content"  @onHtmlChanged="saveHtml" @onSave="save"/>
		</el-form-item>
		
		
	</el-form>
 
</template>

<script setup>
import { ref,reactive } from 'vue';
import {editSave,editDeatils}from '@/api/api'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import request from '@/utils/request'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

const router = useRouter()
let id = router.currentRoute.value.params.id

const text = ref('Hello Editor!');
let html =''
let form = reactive({
  title:'cs',
  content:'Hello Editor!',
  imgBg:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6056f138-61fb-4f09-bc22-b277059a45e3/55d7f93c-3dcd-4de8-9472-596903311a86.jpeg',
  label:'实用教程',
  introduce:'介绍'
})

if(id){
  const deatils = (item) =>{
    editDeatils({
      id:id*1
    }).then(res => {
      let data =  res.data
      form.title = data.title
      form.content = data.content
      form.imgBg = data.imgBg
      form.label = data.label
      form.introduce = data.introduce
      form.ID = data.ID
      // contentData.value = res.data
    })
  }
  deatils()
}

const save = ((e)=>{
  editSave(form).then(res => {
    ElMessage({
      message: '文章发布成功',
      type: 'success',
    })
    // router.push('/')
  })
	console.log(e)
})
const saveHtml = ((e)=>{
	html = e
})


</script>