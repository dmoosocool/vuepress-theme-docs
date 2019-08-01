<template>
  <footer>
    <div class="footer-container">
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

      <div 
        class="footer-item" 
        v-for="(link, linkindex) in data.footerLinks"
        :key="linkindex"
      >
        <h3>{{ link.title }}</h3>
        <ul>
          <li 
            v-for="(itemlink, itemindex) in link.items"
            :key="itemindex"
          >
            <a :href="itemlink.link">{{ itemlink.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      {{ data.copyright }}
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    data() {
      return {
        ...this.$site.themeConfig,
        ...this.$page.frontmatter,
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
footer
  position relative
  padding 5rem 7.5rem 10rem
  background-color #fff
  z-index 10
  .footer-container 
    display flex
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
    h3 
      margin 0
      font-size 18px
      line-height 27px
      color #333
      padding-bottom 20px
    a
      color #666
      font-size 14px
      margin-bottom 8px
  .copyright
    position absolute
    left 0 
    bottom 0
    width 100%
    height 50px
    font-size 14px
    font-weight 500
    color rgba(255,255,255, .7)
    background #0000c2
    text-align center

</style>
