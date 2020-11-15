<template>
  <nav class="m-menu" :class="{ 'is-active': $store.state.menuOpen === true }">
    <header id="header" class="header" :class="headerClassHandler">
      <div class="wrap">
        <div class="header__content">
          <h1 class="logo">
            <nuxt-link to="/">北海岸及觀音山國家風景區</nuxt-link>
          </h1>
          <div class="header__menu">
            <button
              id="nav"
              class="mobile-menu-btn nav-menu"
              title="Mobile Menu Button"
              :class="{ 'is-active': $store.state.menuOpen === true }"
              @click.stop="ctrlMobileMenu"
            >
              <span class="m-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="m-menu__body">
      <div class="m-menu__content">
        <ul>
          <!-- Item 1 -->
          <li class="accordion">
            <div class="accordion__trigger">
              <nuxt-link to="./guide" title="북해안과 관인산 알기">
                <div class="ac-common ac-guide">북해안과 관인산 알기</div>
              </nuxt-link>
            </div>
          </li>

          <!-- Item 2 -->
          <li class="accordion">
            <div class="accordion__trigger">
              <nuxt-link to="./tourist" title="베이관명소">
                <div class="ac-common ac-tourist">베이관명소</div>
              </nuxt-link>
            </div>
          </li>

          <!-- Item 3 -->
          <li class="accordion">
            <div class="accordion__trigger">
              <nuxt-link to="/foods" title="반드시 먹어야 할 미식">
                <div class="ac-common ac-foods">반드시 먹어야 할 미식</div>
              </nuxt-link>
            </div>
          </li>

          <!-- Item 4 -->
          <li class="accordion">
            <div class="accordion__trigger">
              <nuxt-link to="/travel" title="일정추천">
                <div class="ac-common ac-travel">일정추천</div>
              </nuxt-link>
            </div>
          </li>

          <!-- Item 5 -->
          <li class="accordion">
            <div class="accordion__trigger">
              <nuxt-link to="/traffic" title="교통 정보">
                <div class="ac-common ac-traffic">교통 정보</div>
              </nuxt-link>
            </div>
          </li>

          <accordion-component>
            <accordionItem-component>
              <!-- slot 插槽 處理accordion標題   -->
              <template slot="accordion-trigger">
                <div class="ac-time ac-language">Language</div>
              </template>
              <!-- slot 插槽 處理傳遞accordion內容 -->
              <template slot="accordion-content">
                <li>
                  <a
                    href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="中文"
                  >
                    <span>中文</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="English"
                  >
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=3"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="日本語"
                  >
                    <span>日本語</span>
                  </a>
                </li>
              </template>
            </accordionItem-component>
          </accordion-component>
          <div class="guid-area">
            <!-- fb -->
            <a
              href="https://www.facebook.com/northguan/"
              target="_blank"
              rel="noopener noreferrer"
              title="facebook"
            >
              <div class="ac-fb ac-guid"></div>
              <span>facebook</span>
            </a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import accordion from '~/components/accordion.vue';
import accordionItem from '~/components/accordion-item.vue';

export default {
  data() {
    return {};
  },
  props: {
    scrollValue: Number,
  },
  components: {
    'accordion-component': accordion,
    'accordionItem-component': accordionItem,
  },
  computed: {
    menuOpenStatus() {
      return this.$store.state.menuOpen;
    },
  },
  methods: {
    // 控制手機選單開啟/關閉
    ctrlMobileMenu() {
      let status = !this.$store.state.menuOpen;
      this.$store.commit('CTRL_MENU_OPEN', status);
    },
  },
  computed: {
    // 控制 Header 區塊的 Class
    headerClassHandler() {
      let obj = {
        'is-menu-open': this.$store.state.menuOpen === true,
      };
      return obj;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils/_utils.scss';

#header {
  background-color: $color-white;
  z-index: 3500;
}

.wrap {
  max-width: calc(100% - 40px);
  margin: 0 auto;

  @include min-width(map-get($tablet, lg)) {
    max-width: 100%;
  }
}

.header {
  &.is-menu-open {
    box-shadow: 0px 3px 10px rgba($color-black, 0.3);
  }
}

.header__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  display: block;
  position: relative;

  > a {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;

    background: url('~assets/img/logo.svg') no-repeat center/contain;
    @include hidetext;
  }

  @include min-width(map-get($phone, lg)) {
    width: 250px;
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
  background-color: $color-black;
  transition: all 0.2s ease;

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: $color-black;
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

// Menu close

.is-active {
  .m-line {
    width: 30px;
    transform: rotate(45deg);
    top: 8px;

    &::before {
      transform: scale(0);
    }

    &::after {
      transform: rotate(-90deg);
      top: 0px;
    }

    @include min-width(map-get($phone, md)) {
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
  z-index: 2000;
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

.m-menu__body {
  width: 100%;
  height: 100%;
  padding-bottom: 0rem;
  position: relative;
  overflow: hidden;

  @include min-width(map-get($tablet, lg)) {
    padding-bottom: 2rem;
  }
}

.m-menu__content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -o-overflow-scrolling: touch;

  @include min-width(map-get($tablet, lg)) {
    height: calc(100% - 2rem);
  }

  > ul {
    width: 100%;
    height: 100%;
  }
}

.accordion__content {
  a {
    display: block;
    border-bottom: 1px solid $color-gray-light-d;
    background-color: $color-gray-light;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.125rem;
      display: block;
      margin-left: 20px;
      padding: 1rem 0;
      color: $color-gray-dark;
    }
  }
}

.accordion__trigger {
  padding: 10px 20px;

  > a {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.ac-language {
  font-family: 'Roboto', sans-serif;
  font-size: map-get($font-size, 5);
  color: $color-black;
}

.accordion {
  border-bottom: 1px solid $color-gray-light;
  cursor: pointer;
}

// 單一一個 link common 無收合
.ac-common {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: map-get($font-size, 5);
  color: $color-black;

  &::before {
    content: '';
    width: 50px;
    height: 50px;
    display: block;
    margin-right: 1rem;
    background: {
      size: contain;
      position: center;
      repeat: no-repeat;
    }
  }
}

.ac-guide {
  &::before {
    background-image: url('~assets/img/icon/icon-nav-1.svg');
  }
}

.ac-tourist {
  &::before {
    background-image: url('~assets/img/icon/icon-nav-2.svg');
  }
}

.ac-foods {
  &::before {
    background-image: url('~assets/img/icon/icon-nav-3.svg');
  }
}

.ac-travel {
  &::before {
    background-image: url('~assets/img/icon/icon-nav-4.svg');
  }
}

.ac-traffic {
  &::before {
    background-image: url('~assets/img/icon/icon-nav-5.svg');
  }
}

//guid-area 我的收藏 網站導覽 民航局網站

.guid-area {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  a {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    > span {
      height: 100%;
      display: block;
      margin-left: 1rem;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      font-size: map-get($font-size, 5);
      color: $color-black;
    }
  }

  .ac-guid {
    width: 80px;
    height: 100%;
    display: block;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 6.25rem;
      background-position: center center;
      background-repeat: no-repeat;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 80px;
      height: 80px;
      border: 0.0625rem solid $color-gray-light-d;
      border-radius: 50%;
    }
  }

  .ac-fb {
    &::before {
      background-image: url('~assets/img/icon/icon-FB-m.svg');
    }
  }

  .ac-ig {
    &::before {
      background-image: url('~assets/img/icon/icon-IG-m.svg');
    }
  }

  .ac-yt {
    &::before {
      background-image: url('~assets/img/icon/icon-YT-m.svg');
    }
  }
}

.language {
  margin: 1rem 0;

  a {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0 1.5rem;
  }

  .ac-english {
    text-align: center;
    border: 0.0625rem solid $color-gray-light-d;
    border-radius: 3.125rem;
    padding: 0.5rem;
  }
}
</style>
