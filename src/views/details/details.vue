<template>
  <div>
    <comHeader></comHeader>
    <main class="layout" id="content-inner">
      <div id="post">
        <div id="post-info">
          <h1 class="post-title">青年大学习截图api</h1>
          <div id="post-meta">
            <div class="meta-firstline">
					<span class="post-meta-date">
						<i class="fa-fw post-meta-icon far fa-calendar-alt">
						</i>
						<span class="post-meta-label">发表于</span>
						<time datetime="2022-06-10T09:16:08.000Z" title="发表于 2022-06-10 17:16:08" style="display: inline;">5 个月前</time>
					</span>
              <span class="post-meta-categories">
						<span class="post-meta-separator">|</span>
						<i class="fas fa-inbox fa-fw post-meta-icon">
						</i>
						<a class="post-meta-categories" href="/categories/%E5%AE%9E%E7%94%A8%E6%95%99%E7%A8%8B/">实用教程</a>
					</span>
            </div>
            <div class="meta-secondline">
              <span class="post-meta-separator">|</span>
              <span class="post-meta-wordcount">
						<i class="far fa-file-word fa-fw post-meta-icon">
						</i>
						<span class="post-meta-label">字数总计:</span>
						<span class="word-count">223</span>
						<span class="post-meta-separator">|</span>
						<i class="far fa-clock fa-fw post-meta-icon">
						</i>
						<span class="post-meta-label">阅读时长:</span>
						<span>1分钟</span>
					</span>
            </div>
          </div>
        </div>
        <md-editor previewOnly="true" v-model="contentData.content" />
      </div>
      <comAside></comAside>
    </main>
  </div>
</template>

<script lang="ts" setup>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import request from '@/utils/request'
import {ref} from "vue";
import { useRouter } from 'vue-router'
let router = useRouter();
let id = router.currentRoute.value.params.id

let contentData = ref({})
const deatils = (item) =>{
  request.post('http://localhost:8080/edit/deatils', {
    id:id*1
  }).then(res => {
    contentData.value = res.data

  })
}
deatils()
</script>

<style>
</style>