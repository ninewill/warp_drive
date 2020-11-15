<template>
  <div class="container">
    <header class="header">
      <div class="wrap">
        <div class="header__content">
          <h1 class="logo">
            <nuxt-link to="/">北海岸及觀音山國家風景區</nuxt-link>
          </h1>
          <div class="header__menu">
            <ul>
              <li>
                <nuxt-link to="./guide" title="북해안과 관인산 알기" class="menu__link menu__link-icon01">
                  <span>북해안과 관인산 알기</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist" title="베이관명소" class="menu__link menu__link-icon02">
                  <span>베이관명소</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/foods" title="반드시 먹어야 할 미식" class="menu__link menu__link-icon03">
                  <span>반드시 먹어야 할 미식</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/travel" title="일정추천" class="menu__link menu__link-icon04 current04">
                  <span>일정추천</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/traffic" title="교통정보" class="menu__link menu__link-icon05">
                  <span>교통정보</span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <button
            class="language-btn tourist-language-btn"
            @click="showMenu = !showMenu"
            ref="dropdown"
            title="Language"
          >
            <span>Language</span>
            <ul v-show="showMenu">
              <li>
                <a
                  href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="中文"
                >ch</a>
              </li>
              <li>
                <a
                  href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="English"
                >en</a>
              </li>
              <li>
                <a
                  href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="日本語"
                >jp</a>
              </li>
            </ul>
          </button>
          <button
            id="nav"
            class="mobile-menu-btn nav-menu"
            title="Mobile Menu Button"
            :class="{ 'is-active': $store.state.menuOpen === true }"
            @click.stop="ctrlMobileMenu"
          >
            <span class="m-line"></span>
          </button>
          <menuMobile-component />
        </div>
      </div>
    </header>
    <div class="content">
      <div class="content__topbanner">
        <h2 class="h2">일정추천</h2>
      </div>
      <div class="content__section">
        <ul class="content__section-content">
          <li>
            <h3 class="h3">예려우 지질여행</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지하철 단수이역</span>
              </li>
              <li>
                <nuxt-link to="./tourist04" title="예려우 지질공원">예려우 지질공원</nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist03#mark-5" title="진바오리 라오제">진바오리 라오제</nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist03#mark-3" title="스터우산공원">스터우산공원</nuxt-link>
              </li>
              <li class="no-arror">
                <nuxt-link to="./tourist03#mark-6" title="진산완리 온천구">진산완리 온천구</nuxt-link>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/Qw9LnrQjawC2" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
            <figure class="photo photo01"></figure>
          </li>
          <li>
            <h3 class="h3">白沙灣戲水之旅</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지하철 단수이역</span>
              </li>
              <li>
                <nuxt-link to="./tourist01" title="쳰수이만">쳰수이만</nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist02#mark-2" title="바이사만">바이사만</nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist02#mark-3" title="푸구이자오 공원">푸구이자오 공원</nuxt-link>
              </li>
              <li class="no-arror">
                <nuxt-link to="./tourist02#mark-4" title="라오메이녹석조">라오메이녹석조</nuxt-link>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/a8J27tkzwYT2" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
            <figure class="photo photo02"></figure>
          </li>
          <li>
            <h3 class="h3">지룽읍내 슬로우여행</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지룽기차역</span>
              </li>
              <li>
                <nuxt-link to="./tourist06#mark-6" title="허핑도공원">허핑도공원</nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist06" title="정빈부두">정빈부두</nuxt-link>
              </li>
              <li class="no-arror">
                <nuxt-link to="./tourist06#mark-5" title="지룽묘입구 야시장">지룽묘입구 야시장</nuxt-link>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/iKAuFt4GSxVB9qHz6" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
            <figure class="photo photo03"></figure>
          </li>
          <li>
            <h3 class="h3">관음산 등산여행</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지하철 루저우역</span>
              </li>
              <li>
                <nuxt-link to="./tourist05#mark-2" title="링윈사">링윈사</nuxt-link>
              </li>
              <li>
                <nuxt-link to="./tourist05#mark-1" title="관인산 여행객센터">관인산 여행객센터</nuxt-link>
              </li>
              <li class="no-arror">
                <nuxt-link to="./tourist05#mark-3" title="잉한령 보도">잉한령 보도</nuxt-link>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/hStdDCc1UafFQY5J8" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
            <figure class="photo photo04"></figure>
          </li>
        </ul>
        <ul class="content__section-content-m">
          <li>
            <h3 class="h3">예려우 지질여행</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지하철 단수이역</span>
              </li>
              <li>
                <nuxt-link to="./tourist04" title="예려우 지질공원">예려우 지질공원</nuxt-link>
                <figure class="photo-m photo01-1-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist03#mark-5" title="진바오리 라오제">진바오리 라오제</nuxt-link>
                <figure class="photo-m photo01-2-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist03#mark-3" title="스터우산공원">스터우산공원</nuxt-link>
                <figure class="photo-m photo01-3-m"></figure>
              </li>
              <li class="no-arror">
                <nuxt-link to="./tourist03#mark-6" title="진산완리 온천구">진산완리 온천구</nuxt-link>
                <figure class="photo-m photo01-4-m"></figure>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/Qw9LnrQjawC2" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
          </li>
          <li>
            <h3 class="h3">白沙灣戲水之旅</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지하철 단수이역</span>
              </li>
              <li>
                <nuxt-link to="./tourist01" title="쳰수이만">쳰수이만</nuxt-link>
                <figure class="photo-m photo02-1-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist02#mark-2" title="바이사만">바이사만</nuxt-link>
                <figure class="photo-m photo02-2-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist02#mark-3" title="푸구이자오 공원">푸구이자오 공원</nuxt-link>
                <figure class="photo-m photo02-3-m"></figure>
              </li>
              <li class="no-arror">
                <nuxt-link to="./tourist02#mark-4" title="라오메이녹석조">라오메이녹석조</nuxt-link>
                <figure class="photo-m photo02-4-m"></figure>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/a8J27tkzwYT2" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
          </li>
          <li>
            <h3 class="h3">지룽읍내 슬로우여행</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지룽기차역</span>
              </li>
              <li>
                <nuxt-link to="./tourist06#mark-6" title="허핑도공원">허핑도공원</nuxt-link>
                <figure class="photo-m photo03-1-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist06" title="정빈부두">정빈부두</nuxt-link>
                <figure class="photo-m photo03-2-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist06#mark-5" title="지룽묘입구 야시장">지룽묘입구 야시장</nuxt-link>
                <figure class="photo-m photo03-3-m"></figure>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/iKAuFt4GSxVB9qHz6" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
          </li>
          <li>
            <h3 class="h3">관음산 등산여행</h3>
            <ul class="travel-path">
              <li>
                <span class="text-black">지하철 루저우역</span>
              </li>
              <li>
                <nuxt-link to="./tourist05#mark-2" title="링윈사">링윈사</nuxt-link>
                <figure class="photo-m photo04-1-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist05#mark-1" title="관인산 여행객센터">관인산 여행객센터</nuxt-link>
                <figure class="photo-m photo04-2-m"></figure>
              </li>
              <li>
                <nuxt-link to="./tourist05#mark-3" title="잉한령 보도">잉한령 보도</nuxt-link>
                <figure class="photo-m photo04-3-m"></figure>
              </li>
            </ul>
            <a class="btn" href="https://goo.gl/maps/hStdDCc1UafFQY5J8" target="_blank">
              <span>GOOGLE에서 일정과 노선 확인</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <footer-component />
    <transition name="fade" v-if="this.scrollValue > 0">
      <div class="float-block">
        <a
          href="javascript:;"
          class="float-block__top-btn"
          title="TOP"
          v-scroll-to="{ element: 'body' }"
        >TOP</a>
      </div>
    </transition>
  </div>
</template>

<script>
import MenuMobile from "~/components/model/menu-mobile.vue";
import footer from "~/components/model/footer.vue";

export default {
  components: {
    "menuMobile-component": MenuMobile,
    "footer-component": footer,
  },
  data() {
    return {
      showMenu: false,
      scrollValue: 0,
    };
  },
  created() {},
  mounted() {
    this.$store.commit("GET_SCREEN_WIDTH");

    window.addEventListener("scroll", this.getScrollValue);
    window.addEventListener("resize", this.getScreenWidth);

    var swiperH = new Swiper(".swiper-container-h", {
      spaceBetween: 50,
      effect: "fade",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination-h",
        clickable: true,
      },
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getScrollValue);
    window.removeEventListener("resize", this.getScreenWidth);
  },
  methods: {
    getScreenWidth() {
      this.$store.commit("GET_SCREEN_WIDTH");
    },
    getScrollValue() {
      this.scrollValue =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    // 控制手機選單開啟/關閉
    ctrlMobileMenu() {
      let status = !this.$store.state.menuOpen;
      this.$store.commit("CTRL_MENU_OPEN", status);
    },
    //Language選單開啟/關閉
    dropdown(e) {
      let el = this.$refs.dropdown;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.showMenu = false;
      }
    },
  },
  computed: {
    menuOpenStatus() {
      return this.$store.state.menuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/utils/_utils.scss";
@import "~/assets/scss/_header-more.scss";

.content {
  @include min-width(map-get($tablet, sm)) {
    margin-bottom: 5rem;
  }
}

.content__topbanner {
  width: 100%;
  position: relative;

  @include min-width(map-get($phone, lg)) {
    padding-bottom: 26%;
    background: url("~assets/img/p4/p4-visual.jpg") no-repeat center/cover;
  }
}

.h2 {
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 1-1);
  color: $color-blue;

  @include min-width(map-get($phone, lg)) {
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: $color-white;
    font-size: map-get($font-size, 1);
    text-shadow: 3px 3px 10px #00000073;
  }
}

.h3 {
  color: $color-blue-dark-light;
  font-size: map-get($font-size, 4);
}

.h4 {
  color: $color-black;
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 4);
}

.content__section {
  padding-top: 0;
  position: relative;
  display: flex;

  @include min-width(map-get($phone, lg)) {
    padding-top: 3rem;
  }
}

.content__section-content {
  display: none;

  @include min-width(map-get($tablet, lg)) {
    display: block;
    width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  > li {
    margin-top: 2rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid $color-gray;

    &:last-child {
      border: none;
    }
  }
}

.travel-path {
  width: 100%;
  display: block;
  margin-top: 2rem;

  @include min-width(map-get($tablet, lg)) {
    display: flex;
  }

  > li {
    display: block;

    @include min-width(map-get($tablet, lg)) {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }

    &:after {
      content: "";
      width: 30px;
      height: 30px;
      display: block;
      margin: 1rem auto;
      position: relative;
      transform-origin: center;
      transform: rotate(90deg);
      background: url("~assets/img/icon/icon-arror.svg") no-repeat
        center/contain;

      @include min-width(map-get($tablet, lg)) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 1rem;
        transform: rotate(0deg);
      }
    }

    > a {
      height: 100%;
      display: block;
      text-align: center;
      line-height: 30px;
      font-size: map-get($font-size, 5);
      color: $color-red-light;

      @include min-width(map-get($tablet, lg)) {
        font-size: map-get($font-size, 7);
      }
    }

    > span {
      height: 100%;
      line-height: 30px;
      display: block;
    }

    .text-black {
      text-align: center;
      color: $color-black;
      font-size: map-get($font-size, 5);

      @include min-width(map-get($tablet, lg)) {
        font-size: map-get($font-size, 7);
      }
    }
  }

  .no-arror {
    &:after {
      display: none;
    }
  }
}

.btn {
  width: 100%;
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: map-get($font-size, 5);
  background-color: $color-red-light;

  @include min-width(map-get($tablet, lg)) {
    width: auto;
    padding: 0.5rem 1rem;
    font-size: map-get($font-size, 6);
  }
}

.photo {
  width: 100%;
  padding-bottom: 37.333%;
  margin-top: 1rem;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.photo01 {
  background-image: url("~assets/img/p4/p4-tour1.png");
}
.photo02 {
  background-image: url("~assets/img/p4/p4-tour2.png");
}
.photo03 {
  background-image: url("~assets/img/p4/p4-tour3.png");
}
.photo04 {
  background-image: url("~assets/img/p4/p4-tour4.png");
}

//mobile
.content__section-content-m {
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid $color-gray;

    &:last-child {
      border: none;
    }
  }
}
.photo-m {
  width: 100%;
  padding-bottom: 76%;
  margin-top: 1rem;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

//1
.photo01-1-m {
  background-image: url("~assets/img/p4/p4-tour1-1.jpg");
}
.photo01-2-m {
  background-image: url("~assets/img/p4/p4-tour1-2.jpg");
}
.photo01-3-m {
  background-image: url("~assets/img/p4/p4-tour1-3.jpg");
}
.photo01-4-m {
  background-image: url("~assets/img/p4/p4-tour1-4.jpg");
}

//2
.photo02-1-m {
  background-image: url("~assets/img/p4/p4-tour2-1.jpg");
}
.photo02-2-m {
  background-image: url("~assets/img/p4/p4-tour2-2.jpg");
}
.photo02-3-m {
  background-image: url("~assets/img/p4/p4-tour2-3.jpg");
}
.photo02-4-m {
  background-image: url("~assets/img/p4/p4-tour2-4.jpg");
}

//3
.photo03-1-m {
  background-image: url("~assets/img/p4/p4-tour3-1.jpg");
}
.photo03-2-m {
  background-image: url("~assets/img/p4/p4-tour3-2.jpg");
}
.photo03-3-m {
  background-image: url("~assets/img/p4/p4-tour3-3.jpg");
}

//4
.photo04-1-m {
  background-image: url("~assets/img/p4/p4-tour4-1.jpg");
}
.photo04-2-m {
  background-image: url("~assets/img/p4/p4-tour4-2.jpg");
}
.photo04-3-m {
  background-image: url("~assets/img/p4/p4-tour4-3.jpg");
}

// Mobile Menu Button
.mobile-menu-btn {
  width: 30px;
  height: 35px;
  display: block;
  z-index: 2000;

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }
}

.m-line {
  width: 30px;
  height: 2px;
  display: block;
  position: relative;
  margin: -0.5rem auto 0 auto;
  background-color: $color-blue;
  transition: all 0.2s ease;

  &:before,
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: $color-blue;
    transition: all 0.2s ease;
    top: 8px;
  }

  &:after {
    width: 30px;
    top: 16px;
  }

  @include min-width(map-get($phone, md)) {
    width: 30px;

    &:before {
      width: 30px;
    }

    &:after {
      width: 30px;
    }
  }
}

.m-menu {
  width: 100%;
  height: 100%;
  padding-top: 82px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 2500;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.37, 0, 0, 1);
  background-color: $color-white;
  overflow: hidden;

  @at-root &.is-active {
    transform: translateX(0);
  }

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }
}
</style>