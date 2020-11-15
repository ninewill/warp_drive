<template>
  <header id="header" class="header">
    <div class="wrap">
      <div class="header__content">
        <h1 class="logo">
          <nuxt-link to="/">北海岸及觀音山國家風景區</nuxt-link>
        </h1>
        <div class="header__menu">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/northguan/"
                class="header__link icon-facebook"
                target="_blank"
                title="facebook"
              ></a>
            </li>
          </ul>
          <button
            class="language-btn"
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
                  >ch</a
                >
              </li>
              <li>
                <a
                  href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="English"
                  >en</a
                >
              </li>
              <li>
                <a
                  href="https://www.northguan-nsa.gov.tw/user/main.aspx?Lang=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="日本語"
                  >jp</a
                >
              </li>
            </ul>
          </button>
          <button
            id="nav"
            class="menu-btn nav-menu"
            title="Menu Button"
            :class="{ 'is-active': $store.state.menuOpen === true }"
            @click.stop="ctrlMobileMenu"
          >
            <span class="d-line"></span>
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
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import menu from "~/components/model/menu.vue";

export default {
  components: {
    // "menu-component": menu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    // 控制手機選單開啟/關閉
    ctrlMobileMenu() {
      let status = !this.$store.state.menuOpen;
      this.$store.commit('CTRL_MENU_OPEN', status);
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
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils/_utils.scss';

.header {
}

.wrap {
  max-width: calc(100% - 40px);
  margin: 0 auto;

  @include min-width(map-get($tablet, lg)) {
    max-width: 100%;
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
    width: 70px;
    height: 70px;
  }
}

.header__menu {
  display: flex;

  > ul {
    display: none;
    align-items: center;

    @include min-width(map-get($phone, lg)) {
      display: flex;
    }
  }
}

.header__link {
  width: 25px;
  height: 25px;
  display: flex;
  text-align: center;
  color: $color-gray-dark;
  margin: 0 1rem;
  transition: 0.1s;

  @include min-width(map-get($desktop, sm)) {
    &:hover {
      color: $color-red;
    }
  }
}

.icon-facebook {
  background: url('~assets/img/icon/icon-FB.svg') no-repeat center/contain;
}

.icon-instagram {
  background: url('~assets/img/icon/icon-IG.svg') no-repeat center/contain;
}

.icon-youtube {
  background: url('~assets/img/icon/icon-YT.svg') no-repeat center/contain;
}

.language-btn {
  display: none;
  position: relative;
  margin-right: 1rem;
  font-family: 'Roboto', sans-serif;

  @include min-width(map-get($phone, lg)) {
    display: block;
  }

  > span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 2;

    &:after {
      content: '';
      width: 0;
      height: 0;
      margin: 0 0.5rem;
      display: block;
      border-style: solid;
      border-width: 8px 6px 0 6px;
      border-color: $color-black transparent transparent transparent;
    }
  }

  > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 0.5rem;
    background-color: $color-gray-dark-d-d;

    > li {
      width: 100%;
      flex: 1;
      line-height: 2;
      transition: 0.2s;
      &:nth-child(-n + 2) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }

      > a {
        display: block;
      }
    }
  }
}

// Menu button
.menu-btn {
  position: relative;
  z-index: 3000;
  display: none;

  @include min-width(map-get($tablet, sm)) {
    width: 30px;
    height: 35px;
    display: block;
  }
}

// 電腦版選單
.d-line {
  display: block;
  position: relative;
  width: 30px;
  height: 2px;
  margin: -0.5rem auto 0 auto;
  background-color: $color-black;
  transition: all 0.2s ease;

  &:before,
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 20px;
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
  .d-line {
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

// Mobile Menu Button
.mobile-menu-btn {
  width: 30px;
  height: 35px;
  position: relative;
  display: block;
  z-index: 3000;

  @include min-width(map-get($tablet, sm)) {
    display: none;
  }
}

//手機版選單
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

// Mobile Menu close

.is-active {
  .m-line {
    width: 30px;
    transform: rotate(45deg);
    top: 8px;
    background-color: $color-black;

    &::before {
      transform: scale(0);
    }

    &::after {
      transform: rotate(-90deg);
      top: 0px;
      background-color: $color-black;
    }

    @include min-width(map-get($phone, md)) {
      width: 30px;
    }
  }
}
</style>
