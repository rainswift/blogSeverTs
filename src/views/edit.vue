<template>
  <md-editor v-model="text"  @onHtmlChanged="saveHtml" @onSave="save"/>
</template>

<script setup>
import { ref } from 'vue';
import {editSave}from '@/api/api'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import request from '@/utils/request'

const text = ref('Hello Editor!');
let html =''

const save = ((e)=>{
  let obj = {
    title:'cs',
    content:html,
    imgBg:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6056f138-61fb-4f09-bc22-b277059a45e3/55d7f93c-3dcd-4de8-9472-596903311a86.jpeg',
    label:'实用教程',
  }
  request.post('http://localhost:8080/editSave',obj).then(res => {
	  
	  console.log(res.data)
	})
  // editSave((obj)=>{

  // })
	console.log(e)
})
const saveHtml = ((e)=>{
	html = e
	console.log(html)
})


</script>