<template>
  <div class="theme-container docs-layout">
    <Navbar />
    <main class="docs">
      <div class="docs-sidebar">
        <nav class="docs-sidebar-nav">
          <div
            class="docs-sidebar-nav-item"
            v-for="(list, listkey) in sidebarConfig"
            :key="listkey"
          >
            <h2 class="docs-sidebar-nav-item__title">{{ list.title }}</h2>
            <ul class="docs-sidebar-nav-item__items">
              <li
                v-for="(item, key) in sidebarList[listkey].items"
                :key="key"
                class="docs-sidebar-nav-item__item"
              >
                <router-link
                  class="docs-sidebar-nav-item__page"
                  v-if="!item.items"
                  :to="item.path"
                  >{{ item.title }}</router-link
                >
                <div v-else>
                  <a
                    class="docs-sidebar-nav-item__group"
                    @click="switchCollapse"
                    v-if="item.items"
                    >{{ item.title }} <i class="iconfont">&#xe74a;</i></a
                  >
                  <div class="docs-sidebar-nav-item__collapse">
                    <ul class="docs-sidebar-nav-item__childitems">
                      <li
                        class="docs-sidebar-nav-item__childitem"
                        v-for="(childitem, childitem_key) in item.items"
                        :key="childitem_key"
                      >
                        <router-link
                          class="docs-sidebar-nav-item__childitem_link"
                          :to="childitem.path"
                          >{{ childitem.title }}
                          <span>{{
                            childitem.frontmatter.subtitle || ''
                          }}</span></router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        class="docs-markdown"
        :class="!!$page.frontmatter.iframe ? 'docs-markdown-demo' : ''"
      >
        <Content class="theme-default-content custom" />
        <div
          v-if="!!$page.frontmatter.iframe"
          class="docs-markdown-demo__iframe"
        >
          <iframe
            frameborder="0"
            :src="
              [
                $site.themeConfig.uiDemoAddress || '',
                $page.frontmatter.iframe,
              ].join('')
            "
          ></iframe>
          <div class="docs-markdown-demo__iframe_iphone"></div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import Navbar from '@theme/components/Navbar.vue';
import { getSidebarItems } from '@theme/util';

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      sidebarList: [],
      sidebarConfig: {},
      iframelink: '',
    };
  },

  methods: {
    switchCollapse(e) {
      let clickEl = e.target;
      if (e.target._prevClass == 'iconfont') {
        clickEl = e.target.parentNode;
      }

      let collapseEl = clickEl.parentNode.lastElementChild;
      let displayStatus = collapseEl.style.display;
      collapseEl.style.display =
        displayStatus == '' || displayStatus == 'block' ? 'none' : 'block';
      clickEl.children[0].innerHTML =
        displayStatus == '' || displayStatus == 'block'
          ? '&#xe749;'
          : '&#xe74a;';
    },
  },
  mounted() {
    this.sidebarList = getSidebarItems(this.$site);
    this.sidebarConfig = this.$site.themeConfig.sidebarConfig;
  },
};
</script>
