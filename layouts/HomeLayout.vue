<template>
  <div class="theme-container" :class="pageClasses">
    <Navbar v-if="shouldShowNavbar" />

    <Home />
    <Footer />
  </div>
</template>
<script>
import Home from '@theme/components/Home.vue';
import Navbar from '@theme/components/Navbar.vue';
import Footer from '@theme/components/Footer.vue';
export default {
  components: { Home, Navbar, Footer },
  data() {
    return {
      isSidebarOpen: false,
      navbarIsFixed: false,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'navbar-fixed': this.navbarIsFixed,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    window.addEventListener('scroll', e => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.navbarIsFixed =
        scrollTop > document.getElementById('navbar').clientHeight;
    });
  },

  methods: {},
};
</script>

<style lang="stylus"></style>
