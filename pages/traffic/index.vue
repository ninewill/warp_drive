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
                  class="menu__link menu__link-icon01"
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
                <nuxt-link to="/traffic" title="교통정보" class="menu__link menu__link-icon05 current05">
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
        <h2 class="h2">교통 정보</h2>
      </div>
      <div class="content__section">
        <div class="content__section-wrap">
          <ul class="content__section-content">
            <li>
              <h3 class="h3 icon car">자가운전</h3>
              <ol class="traffic-info">
                <li>
                  <h4 class="h4">북해안</h4>
                  <p>1.타이베이→스린→주웨이→훙수린→2호 성도→싼즈→스먼→진산→완리</p>
                  <p>2.고속도로 국도1호→우구인터체인지→64호 쾌속도로→우구(단수이방향) →관두대교→주웨이→훙수린→2호 성도→싼즈→스먼→진산→완리</p>
                  <p>3.고속도로 국도3호→시즈→완리방향→지진인터체인지→좌회전하여 2호 성도로→완리→진산→스먼→싼즈</p>
                </li>
                <li>
                  <h4 class="h4">관인산</h4>
                  <p>1.고속도로 국도1호→우구인터체인지→64호 쾌속도로(바리방향) →관인산인터체인지→링윈로 3단→관인산</p>
                  <p>2.타이베이→스린→다두로→관두대교→싼충우구방향→청타이로(현도 103)→링윈로(향도북53-1)→관인산</p>
                </li>
                <li>
                  <h4 class="h4">칭런호공원</h4>
                  <p>1.국도3호→지진인터체인지에서 내려옴→지진1로(대2선) →지진1로 208항</p>
                </li>
                <li>
                  <h4 class="h4">허핑도공원</h4>
                  <p>1.국도1호→지룽인터체인지에서 내려옴→중정로→정빈로→허핑교→허1로→핑1로</p>
                  <p>2.국도1호→62호 쾌속도로(다화 시스템)→댜오허가→베이닝로→정빈로→허핑교→허1로→핑1로</p>
                </li>
              </ol>
            </li>
            <li>
              <h3 class="h3 icon bus">버스노선</h3>
              <ol class="traffic-info">
                <li>
                  <h4 class="h4">북해안노선</h4>
                  <p>1.단수이 지하철역에서 862(지하철 단수이역-지룽역) 혹은 863(단수이-진산) 시외버스 탑승</p>
                </li>
                <li>
                  <h4 class="h4">관인산</h4>
                  <p>1.지하철 루저우역에서 싼충객운(오렌지20) 버스를 탑승하여 관인산여객센터에서 하차</p>
                  <p>2.타이베이 기차역 부근 타청가에서 싼충객운(785 베이먼-관인산) 탑승하여 링윈사에서 하차후 도보로 약 20분</p>
                </li>
                <li>
                  <h4 class="h4">진산완리</h4>
                  <p>1.타이베이시외버스터미널에서 진산으로 가는 궈광객운1815(타이베이－진산청년활동중심) 탑승</p>
                  <p>2.타이베이에서 진산으로 가는 지룽객운1068 (대만대학-진산) 탑승</p>
                  <p>3.지룽기차역 옆, 단수이 지하철역 앞에서 두 지역을 오가는 지룽, 단수이객운을 탑승하여 연도의 각 관광명소에서 하차하여 안내를 따라 관광한다</p>
                  <p>4.타이베이역에서 진산으로 가는 황자객운1717노선을 탑승하여 진산 도착</p>
                </li>
                <li>
                  <h4 class="h4">예려우</h4>
                  <p>1.단수이 지하철역에서 【즐거운 대만여행-황관북해안 노선】 탑승하면 예려우에 도착</p>
                  <p>2.지룽기차역에서 790(지룽-진산), 862(지룽-단수이)노선의 버스를 탑승</p>
                </li>
                <li>
                  <h4 class="h4">지룽지역</h4>
                  <p>1.지룽시 버스101호를 탑승하여 「허핑도공원역」에서 하차하여 도보로 약 5분이면 도착. 혹은 【즐거운 대만여행T99빈해 치지노선】을 탑승하여 「허핑도공원역」에서 하차</p>
                  <p>2.지룽시 버스505, 509호를 탑승하여 「타이베이 다진역」에서 하차하여 산으로 도보 약 15분 올라가면 바로 칭런호공원에 도착</p>
                </li>
              </ol>
            </li>
          </ul>

          <a
            class="btn"
            href="http://www.crownnorthcoast.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>즐거운 대만여행-황관북해안노선(웹 외부연결)</span>
          </a>
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
  created() {},
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
  @include min-width(map-get($tablet, sm)) {
    margin-bottom: 5rem;
  }
}

.content__topbanner {
  width: 100%;
  position: relative;

  @include min-width(map-get($phone, lg)) {
    padding-bottom: 26%;
    background: url("~assets/img/p5/p5-visual.jpg") no-repeat center/cover;
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
  color: $color-green-light-d;
  font-size: map-get($font-size, 4);
  font-weight: 500;

  @include min-width(map-get($phone, lg)) {
    font-size: map-get($font-size, 5);
    font-weight: 400;
  }
}

.content__section {
  padding-top: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include min-width(map-get($phone, lg)) {
    padding-top: 3rem;
  }
}

.content__section-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include min-width(map-get($phone, lg)) {
    width: 660px;
    display: block;
  }

  @include min-width(map-get($tablet, lg)) {
    width: 960px;
  }

  @include min-width(map-get($desktop, md)) {
    width: 1200px;
  }
}

.content__section-content {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  > li {
    margin-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid $color-gray;

    &:last-child {
      border: none;
    }
  }
}

.icon {
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    margin-right: 1rem;
    width: 50px;
    height: 50px;
  }
}

.car {
  &::before {
    background: url("~assets/img/icon/icon-car.svg") no-repeat center/cover;
  }
}

.bus {
  &::before {
    background: url("~assets/img/icon/icon-bus.svg") no-repeat center/cover;
  }
}

.traffic-info {
  > li {
    > h4 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    > p {
      margin-top: 1rem;
      color: $color-black;
      font-weight: 900;
      line-height: 2;

      @include min-width(map-get($phone, lg)) {
        font-weight: 400;
      }
    }
  }
}

.btn {
  display: inline-block;
  padding: 1rem;
  border-radius: 5px;
  background-color: $color-red-light;
  transition: 0.2s;
  margin-bottom: 3rem;

  @include min-width(map-get($phone, lg)) {
    margin-bottom: 0;

    &:hover {
      background-color: $color-red-light-d;
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
</style>