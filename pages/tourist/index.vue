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
                <nuxt-link
                  to="./tourist"
                  title="베이관명소"
                  class="menu__link menu__link-icon02 current02"
                >
                  <span>베이관명소</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/foods" title="반드시 먹어야 할 미식" class="menu__link menu__link-icon03">
                  <span>반드시 먹어야 할 미식</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/travel" title="일정추천" class="menu__link menu__link-icon04">
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
      <div class="content__section">
        <div class="content__section-wrap">
          <h2 class="h2">베이관명소</h2>
          <ul class="content__item">
            <li>
              <nuxt-link to="/tourist05" class="tourist05">
                <h3 class="h3">관인산</h3>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tourist01" class="tourist01">
                <h3 class="h3">싼즈구</h3>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tourist02" class="tourist02">
                <h3 class="h3">스먼구</h3>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tourist03" class="tourist03">
                <h3 class="h3">진산구</h3>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tourist04" class="tourist04">
                <h3 class="h3">완리구</h3>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tourist06" class="tourist06">
                <h3 class="h3">지룽지구</h3>
              </nuxt-link>
            </li>
          </ul>
        </div>
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
  mounted() {
    this.$store.commit("GET_SCREEN_WIDTH");

    window.addEventListener("scroll", this.getScrollValue);
    window.addEventListener("resize", this.getScreenWidth);
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
  padding: 0 1rem;

  @include min-width(map-get($tablet, lg)) {
    padding: 0;
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
    font-size: map-get($font-size, 1-2);
  }

  @include min-width(map-get($tablet, lg)) {
    margin-top: 0;
    font-size: map-get($font-size, 1);
    color: $color-white;
    text-shadow: 3px 3px 10px #00000073;
  }
}

.h3 {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  font-size: map-get($font-size, 4);
  color: $color-white;

  @include min-width(map-get($phone, lg)) {
    font-size: map-get($font-size, 2);
  }

  @include min-width(map-get($tablet, lg)) {
    font-size: map-get($font-size, 6);
  }
}

.content__section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: none;

  @include min-width(map-get($tablet, lg)) {
    height: 725px;
    background: url("~assets/img/p2/p2-0-bg.jpg") no-repeat center/cover;
  }

  @include min-width(1320px) {
    padding-bottom: 46.875%;
  }
}

.content__section-wrap {
  width: 100%;

  @include min-width(map-get($tablet, lg)) {
    width: 960px;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  @include min-width(1320px) {
    width: 1200px;
  }
}

.content__item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;

  @include min-width(map-get($tablet, lg)) {
    height: 400px;
    margin-top: 4.6875rem;
    flex-direction: row;
  }

  > li {
    width: 100%;
    height: 225px;
    margin: 0 0.5rem;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 1rem;
    transition: 0.2s;
    margin-bottom: 1.75rem;

    @include min-width(map-get($phone, lg)) {
      height: 300px;
    }

    @include min-width(map-get($tablet, sm)) {
      height: 600px;
    }

    @include min-width(map-get($tablet, lg)) {
      width: 16.666%;
      height: 300px;
      margin-bottom: 0;
      &:hover {
        width: 20%;
        height: 350px;
        z-index: 500;
      }
    }

    > a {
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
      border-radius: 1rem;
    }
  }
}

.tourist01 {
  background: url("~assets/img/p2/p2-0-a1-mobile.jpg") no-repeat center/cover;

  @include min-width(map-get($tablet, lg)) {
    background: url("~assets/img/p2/p2-0-a1.jpg") no-repeat center/cover;
  }
}

.tourist02 {
  background: url("~assets/img/p2/p2-0-a2-mobile.jpg") no-repeat center/cover;

  @include min-width(map-get($tablet, lg)) {
    background: url("~assets/img/p2/p2-0-a2.jpg") no-repeat center/cover;
  }
}

.tourist03 {
  background: url("~assets/img/p2/p2-0-a3-mobile.jpg") no-repeat center/cover;

  @include min-width(map-get($tablet, lg)) {
    background: url("~assets/img/p2/p2-0-a3.jpg") no-repeat center/cover;
  }
}

.tourist04 {
  background: url("~assets/img/p2/p2-0-a4-mobile.jpg") no-repeat center/cover;

  @include min-width(map-get($tablet, lg)) {
    background: url("~assets/img/p2/p2-0-a4.jpg") no-repeat center/cover;
  }
}

.tourist05 {
  background: url("~assets/img/p2/p2-0-a5-mobile.jpg") no-repeat center/cover;

  @include min-width(map-get($tablet, lg)) {
    background: url("~assets/img/p2/p2-0-a5.jpg") no-repeat center/cover;
  }
}

.tourist06 {
  background: url("~assets/img/p2/p2-0-a6-mobile.jpg") no-repeat center/cover;

  @include min-width(map-get($tablet, lg)) {
    background: url("~assets/img/p2/p2-0-a6.jpg") no-repeat center/cover;
  }
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