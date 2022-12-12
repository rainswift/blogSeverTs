<template>
  <header class="not-top-img" id="page-header">
    <nav id="nav" class="show">
      <span id="blog_name">
        <a id="site-name" href="/">{{ user.name }}</a>
      </span>
      <div id="menus">
        <div id="search-button">
          <a class="site-page social-icon search">
            <i class="fas fa-search fa-fw"></i>
            <span> 搜索</span>
          </a>
        </div>
        <div class="menus_items">
          <div class="menus_item">
            <a class="site-page" href="/">
              <i class="fa-fw fas fa-home"></i>
              <span> 首页</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/archives/">
              <i class="fa-fw fas fa-clock"></i>
              <span> 时间轴</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/gedan">
              <i class="fa-fw fas fa-music"></i>
              <span> 歌单</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/game">
              <i class="fa-fw fas fa-gamepad"></i>
              <span> 游戏</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page" href="/artitalk">
              <i class="fa-fw fa fa-heartbeat"></i>
              <span> 时光</span>
            </a>
          </div>
          <div class="menus_item">
            <a class="site-page group" href="javascript:void(0);">
              <i class="fa-fw fas fa-tools"></i>
              <span> 工具</span>
              <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="menus_item_child">
              <li>
                <a class="site-page child" href="/google">
                  <span> 镜像</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="https://cxz21.cf/drive"
                >
                  <span> 嘿嘿盘</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="https://json.xbyzs.cf"
                >
                  <span> Json格式化</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="https://draw.xbyzs.cf"
                >
                  <span> Draw画布</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="https://enkey.xbyzs.cf"
                >
                  <span> EnKey</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="https://doc.xbyzs.cf"
                >
                  <span> ChenApi</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="https://cs.xbyzs.cf"
                >
                  <span> 跑流量</span>
                </a>
              </li>
              <li>
                <a
                  class="site-page child"
                  target="_blank"
                  rel="noopener"
                  href="http://mail.xbyzs.ml"
                >
                  <span> 临时邮箱</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="toggle-menu">
          <a class="site-page">
            <i class="fas fa-bars fa-fw"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {inject, ref} from 'vue'

defineProps<{ msg: string }>()
let user = ref({})
const count = ref(0)

const { storageService } = inject("global")
user.value = JSON.parse(storageService.get(storageService.USER_INFO))

// const getUserInfo =  () => {
//
// }
// getUserInfo()
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
