<template>
  <footer class="footer">
    <div class="copyright">
      <span>Copyright © 2020</span>
      <span>북해안과 관인산국가풍경구는</span>
      <span>All rights reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_utils.scss";

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  background-color: $color-blue;
  line-height: 2;

  @include min-width(map-get($phone, lg)) {
    padding: 2rem 1rem;
      line-height: 1;
  }
}

.copyright {
  @include min-width(map-get($phone, lg)) {
  }

  > span {
    display: block;
    text-align: center;
    font-family: "Roboto", sans-serif;

    @include min-width(map-get($phone, lg)) {
      display: inline-block;
    }
  }
}
</style>