<template>
  <main class="home" aria-labelledby="">
    <div class="bg">
      <div class="bg-top-border"></div>
      <div class="bg-top-shadow"></div>
      <div class="bg-bottom-border"></div>
      <div class="bg-bottom-shadow"></div>
      <div class="info">
        <div
          class="info-img"
          :style="'background-image: url(' + $withBase(data.homePicture) + ')'"
        ></div>
        <h1 class="info-title">{{ data.homeTitle }}</h1>
        <p class="info-desc">{{ data.homeDescription }}</p>
        <div class="btn-container">
          <a class="btn btn-start" :href="$withBase(data.actionLink)">{{
            data.actionText
          }}</a>
          <a class="btn btn-github" :href="data.github">Github</a>
        </div>
      </div>
    </div>

    <div class="feature">
      <h3 class="feature-title">特性</h3>
      <div class="feature-panel">
        <div
          class="feature-panel-item"
          v-for="(feature, featureIndex) in data.features"
          :key="featureIndex"
        >
          <div v-if="feature.comingSoon" class="feature-panel-item__comingsoon">
            <img :src="$withBase('/images/panel-tip.png')" />
          </div>

          <div class="feature-panel-item__img">
            <img :src="$withBase('feature.img')" />
          </div>
          <h4 class="feature-panel-item__title">{{ feature.title }}</h4>
          <p class="feature-panel-item__desc">{{ feature.details }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  },
};
</script>
