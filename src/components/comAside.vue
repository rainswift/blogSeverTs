<template>
  <div class="aside-content" id="aside-content">
    <div class="card-widget card-info">
      <div class="is-center">
        <div class="avatar-img">
          <img
              :src="user.headImg"
              onerror="this.onerror=null;this.src='/img/friend_404.gif'"
              alt="avatar"
          />
        </div>
        <div class="author-info__name">{{user.name}}</div>
        <div class="author-info__description">{{user.introduce}}</div>
      </div>
      <div class="card-info-social-icons is-center">
        <a
            class="social-icon"
            :href="user.github"
            target="_blank"
            title="Github"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
            class="social-icon"
            :href="user.qq"
            target="_blank"
            title="Email"
        >
          <i class="fas fa-envelope"></i>
        </a>
        <a
            class="social-icon"
            :href="user.qq"
            target="_blank"
            title="QQ"
        >
          <i class="fab fa-qq"></i>
        </a>
      </div>
    </div>
    <div class="card-widget card-announcement">
      <div class="item-headline">
        <i class="fas fa-bullhorn card-announcement-animation"></i>
        <span>公告</span>
      </div>
      <div class="announcement_content">微信公众号: 小白一只手</div>
    </div>
    <div class="sticky_layout">
      <div class="card-widget card-categories">
        <div class="item-headline">
          <i class="fas fa-folder-open"></i>
          <span>分类</span>
        </div>
        <ul class="card-category-list" id="aside-cat-list">
          <li class="card-category-list-item">
            <a
                class="card-category-list-link"
                href="/categories/%E5%AE%9E%E7%94%A8%E5%B7%A5%E5%85%B7/"
            >
              <span class="card-category-list-name">实用工具</span>
              <span class="card-category-list-count">15</span>
            </a>
          </li>
          <li class="card-category-list-item">
            <a
                class="card-category-list-link"
                href="/categories/%E5%AE%9E%E7%94%A8%E6%95%99%E7%A8%8B/"
            >
              <span class="card-category-list-name">实用教程</span>
              <span class="card-category-list-count">12</span>
            </a>
          </li>
          <li class="card-category-list-item">
            <a
                class="card-category-list-link"
                href="/categories/%E5%AE%9E%E7%94%A8%E6%BA%90%E7%A0%81/"
            >
              <span class="card-category-list-name">实用源码</span>
              <span class="card-category-list-count">4</span>
            </a>
          </li>
          <li class="card-category-list-item">
            <a
                class="card-category-list-link"
                href="/categories/%E5%AE%9E%E7%94%A8%E8%B5%84%E6%BA%90/"
            >
              <span class="card-category-list-name">实用资源</span>
              <span class="card-category-list-count">3</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="card-widget card-webinfo">
        <div class="item-headline">
          <i class="fas fa-chart-line"></i>
          <span>网站资讯</span>
        </div>
        <div class="webinfo">
          <div class="webinfo-item">
            <div class="item-name">文章数目 :</div>
            <div class="item-count">34</div>
          </div>
          <div class="webinfo-item">
            <div class="item-name">已运行时间 :</div>
            <div
                class="item-count"
                id="runtimeshow"
                data-publishdate="2021-11-06T16:00:00.000Z"
            >
              382 天
            </div>
          </div>
          <div class="webinfo-item">
            <div class="item-name">本站总访问量 :</div>
            <div class="item-count" id="busuanzi_value_site_pv">91774</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getUserInfo} from '@/api/api'

defineProps<{ msg: string }>()
let user = ref({})
const count = ref(0)
getUserInfo().then((res)=>{
  user.value = res.data

})
</script>

<style scoped>

</style>