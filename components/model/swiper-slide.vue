<template>
  <!-- Swiper -->
  <div class="swiper-container swiper-container-h">
    <div class="swiper-wrapper">
      <div class="swiper-slide section-one">
        <div class="slide-title">
          <h1 class="h1">푸구이자오 등대</h1>
        </div>
      </div>
      <div class="swiper-slide section-two">
        <div class="slide-title">
          <h1 class="h1">라오메이녹석조</h1>
        </div>
      </div>
      <div class="swiper-slide section-three">
        <div class="slide-title">
          <h1 class="h1">스먼웨딩광장</h1>
        </div>
      </div>
      <div class="swiper-slide section-four">
        <div class="slide-title">
          <h1 class="h1">벚꽃길</h1>
        </div>
      </div>
      <div class="swiper-slide section-five">
        <div class="slide-title">
          <h1 class="h1">대만행복북해안</h1>
        </div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {};
  },
  computed: {},
  mounted() {
    var swiperH = new Swiper(".swiper-container-h", {
      spaceBetween: 50,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-h",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_utils.scss";

.h1 {
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 1-1);
  text-shadow: 1px 1px 10px $color-black;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  letter-spacing: 3px;
  line-height: 1;
  text-align: right;
  transition: line-height 0.85s cubic-bezier(0.77, 0, 0.175, 1);
  transition-delay: 0s;

  @include min-width(map-get($tablet, lg)) {
    height: 80px;
    line-height: 4;
    font-size: map-get($font-size, 1);
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100vw !important;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-title {
  width: 100%;
  position: relative;
  right: 5%;
  margin-top: -200px;

  @include min-width(map-get($phone, md)) {
    
  }

   @include min-width(map-get($phone, lg)) {
     right: -10%;
    width: 400px;
  }

  @include min-width(map-get($tablet, md)) {
    right: -20%;
  }

  @include min-width(map-get($desktop, md)) {
    right: -25%;
  }
}

.section-one {
  background: url("~assets/img/bg/index-bg/index-1visual-1-mobile.jpg")
    no-repeat center/cover;

  @include min-width(map-get($tablet, sm)) {
    background: url("~assets/img/bg/index-bg/index-1visual-1.jpg") no-repeat
      center/cover;
  }
}

.section-two {
  background: url("~assets/img/bg/index-bg/index-1visual-2-mobile.jpg")
    no-repeat center/cover;

  @include min-width(map-get($tablet, sm)) {
    background: url("~assets/img/bg/index-bg/index-1visual-2.jpg") no-repeat
      center/cover;
  }
}

.section-three {
  background: url("~assets/img/bg/index-bg/index-1visual-3-mobile.jpg")
    no-repeat center/cover;

  @include min-width(map-get($tablet, sm)) {
    background: url("~assets/img/bg/index-bg/index-1visual-3.jpg") no-repeat
      center/cover;
  }
}

.section-four {
  background: url("~assets/img/bg/index-bg/index-1visual-4-mobile.jpg")
    no-repeat center/cover;

  @include min-width(map-get($tablet, sm)) {
    background: url("~assets/img/bg/index-bg/index-1visual-4.jpg") no-repeat
      center/cover;
  }
}

.section-five {
  background: url("~assets/img/bg/index-bg/index-1visual-5-mobile.jpg")
    no-repeat center/cover;

  @include min-width(map-get($tablet, sm)) {
    background: url("~assets/img/bg/index-bg/index-1visual-5.jpg") no-repeat
      center/cover;
  }
}

.swiper-pagination-bullets {
  width: auto;
  display: flex;
  justify-content: flex-end;
  margin-left: 31.25rem;
}

.swiper-pagination-f {
  width: 15% !important;
  margin-right: 10%;
  display: block;

  @include max-width(map-get($tablet, sm)) {
    display: none;
  }
}
</style>