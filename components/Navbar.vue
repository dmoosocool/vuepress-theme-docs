<template>
  <header class="navbar" id="navbar">
    <div class="navbar-container">
      <div class="navbar-left">
        <div class="logo">
          <router-link :to="$localePath" class="home-link">
            <img
              class="logo-img"
              v-if="$site.themeConfig.logo"
              :src="$withBase($site.themeConfig.logo)"
              :alt="$siteTitle"
            />
            <span
              ref="siteName"
              class="site-name"
              v-if="$siteTitle"
              :class="{ 'can-hide': $site.themeConfig.logo }"
              >{{ $siteTitle }}</span
            >
          </router-link>
        </div>
      </div>

      <div class="navbar-right navbar-links" @show="navList.length">
        <div
          class="navbar-links-item"
          v-for="(nav, index) in navList"
          :key="index"
        >
          <router-link :to="nav.link" v-if="!isExternal(nav.link)">
            {{ nav.text }}
          </router-link>

          <a
            v-else
            :href="nav.link"
            class="nav-link external"
            :target="isMailto(nav.link) || isTel(nav.link) ? null : '_blank'"
            :rel="
              isMailto(nav.link) || isTel(nav.link)
                ? null
                : 'noopener noreferrer'
            "
          >
            {{ nav.text }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { isExternal, isMailto, isTel } from '@parent-theme/util';
export default {
  data() {
    return {
      navList: [
        {
          link: '/',
          text: 'home',
        },
        {
          link: '/a',
          text: 'test',
        },
      ],
    };
  },

  mounted() {
    this.navList = this.$themeConfig.nav || [];
  },

  methods: {
    isExternal,
    isMailto,
    isTel,
  },
};
</script>
