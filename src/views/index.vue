<template>
<div>
  <div class="page" id="body-wrap">
		<comHeader></comHeader>
    <main class="layout" id="content-inner">
      <div class="recent-posts" id="recent-posts">
        <div class="recent-post-item" v-for="(item,index) in contentList">
          <div class="post_cover " :class="{'left':index%2==0,'right':index%2!=0}">
						<router-link :to="{path:'/details/'+item.ID}">
							<img
							  class="post_bg"
							  :src="item.imgBg"
							  onerror="this.onerror=null;this.src='/img/404.jpg'"
							  alt="青年大学习截图api"
							/>
						</router-link>
          </div>
          <div class="recent-post-info">
						<router-link class="article-title" :to="{path:'/details/'+item.ID}">
							{{item.title}}
						</router-link>
            <div class="article-meta-wrap">
              <span class="post-meta-date">
                <i class="far fa-calendar-alt"></i>
                <span class="article-meta-label">发表于</span>
                <time
                  :datetime="item.CreatedAt"
                  :title="'发表于' +item.CreatedAt"
                  style="display: inline"
                  >5 个月前</time
                >
              </span>
              <span class="article-meta">
                <span class="article-meta-separator">|</span>
                <i class="fas fa-inbox"></i>
                <a
                  class="article-meta__categories"
                  href="javascrit()"
                  >{{item.label}}</a
                >
              </span>
            </div>
            <div class="content">
              {{item.introduce}}
            </div>
          </div>
        </div>
				<el-empty description="没有发布文章" v-if="contentList.length == 0" />
				<el-pagination background layout="prev, pager, next"
                       :page-size="limit"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :total="total" />
      </div>
      <comAside></comAside>
    </main>
    <footer id="footer" style="background: #ffffff">
      <div id="footer-wrap">
        <div class="copyright">©2021 - 2022 By Cxz</div>
      </div>
    </footer>
  </div>
</div>

</template>

<script lang="ts" setup>

import request from '@/utils/request'
import {editList} from '@/api/api'
import {ref} from "vue";

const page = ref(1)
let total = ref(0)
let limit = ref(10)
let contentList = ref([])



const getList = async () => {
	editList({
		page: page.value,
		limit: limit.value,
		sort:"",
	}).then((res)=>{
			console.log(res)
		  contentList.value = res.data
		  total.value = res.total
		  
	})
}
getList()

const handleSizeChange = (val: number) => {
  page.value = val
  getList()
}
const handleCurrentChange = (val: number) => {
  page.value = val
  getList()
}
</script>

<style scoped>

</style>
