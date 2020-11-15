<template>
  <div class="container">
    <header-component />
    <menu-component />
    <menuMobile-component />
    <home-component />
  </div>
</template>

<script>
import header from '~/components/model/header.vue';
import Menu from '~/components/model/menu.vue';
import MenuMobile from '~/components/model/menu-mobile.vue';
import home from '~/components/home.vue';

export default {
  components: {
    'header-component': header,
    'menu-component': Menu,
    'menuMobile-component': MenuMobile,
    'home-component': home,
  },
  data() {
    return {};
  },
  computed: {
    menuOpenStatus() {
      return this.$store.state.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils/_utils.scss';
</style>
