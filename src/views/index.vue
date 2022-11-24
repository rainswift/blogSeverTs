<template>
<div>
  <div class="page" id="body-wrap">
		<comHeader></comHeader>
    <main class="layout" id="content-inner">
      <div class="recent-posts" id="recent-posts">
        <div class="recent-post-item" v-for="(item,index) in 10">
          <div class="post_cover " :class="{'left':index%2==0,'right':index%2!=0}">
						<router-link :to="{path:'/details'}">
							<img
							  class="post_bg"
							  src="https://one.xbyzs.cf/api/raw/?path=/images/10003.jpg"
							  onerror="this.onerror=null;this.src='/img/404.jpg'"
							  alt="青年大学习截图api"
							/>
						</router-link>
          </div>
          <div class="recent-post-info">
						<router-link class="article-title" :to="{path:'/details'}">
							青年大学习截图api
						</router-link>
            <div class="article-meta-wrap">
              <span class="post-meta-date">
                <i class="far fa-calendar-alt"></i>
                <span class="article-meta-label">发表于</span>
                <time
                  datetime="2022-06-10T09:16:08.000Z"
                  title="发表于 2022-06-10 17:16:08"
                  style="display: inline"
                  >5 个月前</time
                >
              </span>
              <span class="article-meta">
                <span class="article-meta-separator">|</span>
                <i class="fas fa-inbox"></i>
                <a
                  class="article-meta__categories"
                  href="/categories/%E5%AE%9E%E7%94%A8%E6%95%99%E7%A8%8B/"
                  >实用教程</a
                >
              </span>
            </div>
            <div class="content">
              此api的功能是获取青年大学习完成后的结尾图
              所以你只需要手动看几秒青年大学习有了学习记录后，使用此api获取截图上交即可
            </div>
          </div>
        </div>
        <nav id="pagination">
          <div class="pagination">
            <span class="page-number current">1</span>
            <a class="page-number" href="/page/2/#content-inner">2</a>
            <span class="space">…</span>
            <a class="page-number" href="/page/5/#content-inner">5</a>
            <a class="extend next" rel="next" href="/page/2/#content-inner">
              <i class="fas fa-chevron-right fa-fw"></i>
            </a>
          </div>
        </nav>
      </div>
      <div class="aside-content" id="aside-content">
        <div class="card-widget card-info">
          <div class="is-center">
            <div class="avatar-img">
              <img
                src="https://www.chenxuezhi.top/img/avatar.jpg"
                onerror="this.onerror=null;this.src='/img/friend_404.gif'"
                alt="avatar"
              />
            </div>
            <div class="author-info__name">Cxz</div>
            <div class="author-info__description">专注技术分享，资源分享</div>
          </div>
          <div class="card-info-social-icons is-center">
            <a
              class="social-icon"
              href="https://github.com/chenxz21"
              target="_blank"
              title="Github"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              class="social-icon"
              href="mailto:chenxz21@outlook.com"
              target="_blank"
              title="Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
            <a
              class="social-icon"
              href="tencent://message/?uin=1986994368&amp;Site=&amp;Menu=yes"
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
import comHeader from '@/components/header'
export default defineConfig({
  // ...
  plugins: [comHeader],
})
// components: { comHeader },
</script>

<style scoped>

</style>
