<template>
  <md-editor v-model="text"  @onHtmlChanged="saveHtml" @onSave="save"/>
</template>

<script setup>
import { ref } from 'vue';
import {editSave}from '@/api/api'
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
let html =''

const save = ((e)=>{
  let obj = {
    title:'cs',
    content:html
  }
  editSave((obj)=>{

  })
	console.log(e)
})
const saveHtml = ((e)=>{
	html = e
	console.log(html)
})


</script>