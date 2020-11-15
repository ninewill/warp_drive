<template>
  <div class="wrapper">
      <Nuxt />
  </div>
</template>


<script>
// import header from "~/components/model/header.vue";
// import mobileMenu from "~/components/model/menu-mobile.vue";

export default {
  data() {
    return {};
  },
  // components: {
  //   "header-component": header,
  //   "mobile-menu-component": mobileMenu,
  // },
  // computed: {
  //   menuOpenStatus() {
  //     return this.$store.state.menuOpen;
  //   },
  // },
    watch: {
    $route(name) {
      this.$store.commit("CTRL_MENU_OPEN", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_utils.scss";

.wrapper{
  position: relative;
}
</style>
