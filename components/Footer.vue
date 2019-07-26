<template>
  <footer>
    <div class="footer-logo">
      <img
        class="footer-logo-img"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span ref="siteName" class="footer-logo-name" v-if="$siteTitle">{{
        $siteTitle
      }}</span>
    </div>

    <div class="footer-item" v-for="link in data.footerLinks">
      <h3>{{ link.title }}</h3>
      <ul>
        <li v-for="itemlink in link.items">
          <a :href="itemlink.link">{{ itemlink.text }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$site.themeConfig;
    },
  },
};
</script>

<style lang="stylus" scoped>
footer
  position relative
  padding 5rem 7.5rem
  background-color #fff
  display flex
  z-index 10
  .footer-logo
    display inline-block
    flex 1
    &-img
      float left
      width 20px
      height 20px
    &-name
      float left
      margin-left 10px
      line-height 20px
      font-style italic
      font-weight bold
  .footer-item
    flex 1
    ul
      list-style none
      padding 0
      margin 0
</style>
