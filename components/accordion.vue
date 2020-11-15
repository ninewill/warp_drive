<template>
  <li class="accordion">
    <slot></slot>
  </li>
</template>

<script>
export default {
  data() {
    return {
      accordion: {
        active: false,
      },
    };
  },
  provide() {
    return {
      accordion: this.accordion,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_utils.scss";

.accordion {
  border-bottom: 1px solid $color-gray-light;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
}
</style>