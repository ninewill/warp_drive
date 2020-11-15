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
                <nuxt-link
                  to="./guide"
                  title="북해안과 관인산 알기"
                  class="menu__link menu__link-icon01 current01"
                >
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
    <div class="content-wrap">
      <div class="content">
        <h2 class="h2">북해안과 관인산 알기</h2>
      </div>
      <div class="download-block">
        <a
          :href="require('~/assets/documents/map.jpg')"
          download
          class="download-block__download"
          title="download"
        >
          <span>Download</span>
        </a>
      </div>
      <div class="content-description">
        <div class="scrollbox">
          <h3 class="h3">북해안과 관인산 알기</h3>
          <p>북해안(北海岸)과 관인산(觀音山)국가풍경구는 대만 본도의 최북단에 위치하고 있는데 그 범위는 신베이시(新北市) 우구(五股), 바리(八里), 싼즈(三芝), 스먼(石門), 진산(金山), 완리(萬里) 등 6개 행정구에 걸쳐 있으며 이외에도 지룽(基隆) 와이무산(外木山), 칭런호(情人湖)와 허핑도(和平島) 등 명소를 포함하고 있다. 구내 관광자원이 매우 풍부한데 국제적으로 유명한 예려우(野柳)지질공원, 허핑도(和平島)지질지형경관 등 빈해와 산역의 특색있는 생태경관과 휴게자원, 다양한 인문특질과 편리한 교통, 풍부하고 다원적인 여행노선을 구비하고 있어 자세하게 탐방해 볼만한 곳이다.</p>
        </div>
      </div>
    </div>
    <footer-component />
    <transition name="fade" v-if="this.scrollValue > 0">
      <div class="float-block top-block">
        <a
          href="javascript:;"
          class="float-block__top-btn"
          title="TOP"
          v-scroll-to="{ element: 'body' }"
        >TOP</a>
      </div>
    </transition>
    <div class="float-block download-desktop-block">
      <a
        :href="require('~/assets/documents/map.jpg')"
        download
        class="float-block__download"
        title="download"
      ></a>
    </div>
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

    if ($(window).width() < 767) {
      // 當視窗寬度小於767px時執行
    } else {
      // 當視窗寬度不小於767px時執行

      $(".scrollbox").mCustomScrollbar({
        axis: "y", // horizontal scrollbar
        theme: "dark-thin", //theme
      });
    }
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

.content-wrap {
  position: relative;
  margin-top: 5rem;
  padding: 0 1rem;

  @include min-width(map-get($tablet, lg)) {
    margin-top: 0;
    padding: 0;
  }
}

.content {
  width: 100%;
  padding-bottom: 67.8385%;
  position: relative;
  background-image: url(~assets/img/p1/p1-bigmap-mobile.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @include min-width(map-get($tablet, lg)) {
    padding-bottom: 68.125%;
    background-image: url(~assets/img/p1/p1-bigmap.jpg);
  }
}

.h2 {
  position: relative;
  top: -3.25rem;
  font-family: "Dokdo", cursive;
  text-align: center;
  font-size: map-get($font-size, 2);
  color: $color-blue;

  @include min-width(map-get($phone, lg)) {
    top: -3.5rem;
    font-size: map-get($font-size, 1-1);
  }

  @include min-width(map-get($tablet, lg)) {
    top: 3.75rem;
    font-size: map-get($font-size, 1-2);
  }

  @include min-width(map-get($desktop, md)) {
    font-size: map-get($font-size, 1);
  }
}

.h3 {
  position: relative;
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 3);
  color: $color-blue;
}

.download-block {
  margin-top: 2rem;
  display: block;

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }
}

.download-block__download {
  display: block;
  background-color: $color-red-light;

  > span {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    letter-spacing: 2px;
    color: $color-white;
    font-family: "Roboto", sans-serif;

    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      background-image: url("~assets/img/icon/icon-download.svg");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 50%;
    }
  }
}

.content-description {
  background-color: $color-white;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @include min-width(map-get($tablet, lg)) {
    width: 350px;
    position: absolute;
    top: 15%;
    right: 35px;
    margin-top: 0;
    border-radius: 10px;
    padding: 1rem;
  }

  @include min-width(map-get($desktop, md)) {
    right: 150px;
  }
}

.scrollbox {
  @include min-width(map-get($tablet, lg)) {
    height: 200px;
  }

  p {
    margin-top: 1rem;
    color: $color-black;
    line-height: 2;

    @include min-width(map-get($phone, lg)) {
      line-height: 1.8;
    }
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

.top-block {
  display: block;

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }
}

.download-desktop-block {
  display: none;

  @include min-width(map-get($tablet, lg)) {
    display: block;
  }
}

.download-block {
  display: block;

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }
}
</style>