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
      <div class="content__topbanner">
        <h2 class="h2">완리구</h2>
        <div class="map">
          <div class="map-text">
            <!-- 觀音山區 -->

            <nuxt-link class="m-menu-map-name name01" title="관인산" to="/tourist05">관인산</nuxt-link>

            <!-- 三芝區 -->

            <nuxt-link class="m-menu-map-name name02" title="싼즈구" to="/tourist01">싼즈구</nuxt-link>

            <!-- 石門區 -->

            <nuxt-link class="m-menu-map-name name03" title="스먼구" to="/tourist02">스먼구</nuxt-link>

            <!-- 金山區 -->

            <nuxt-link class="m-menu-map-name name04" title="진산구" to="/tourist03">진산구</nuxt-link>

            <!-- 萬里區 -->

            <nuxt-link class="m-menu-map-name name05" title="완리구" to="/tourist04">완리구</nuxt-link>

            <!-- 基隆地區 -->

            <nuxt-link class="m-menu-map-name name06" title="지룽지구" to="/tourist06">지룽지구</nuxt-link>
          </div>
          <div class="m-menu-map-item">
            <!-- 觀音山區 -->

            <nuxt-link class="m-menu-map-name d-01" title="관인산" to="/tourist05"></nuxt-link>

            <!-- 三芝區 -->

            <nuxt-link class="m-menu-map-name d-02" title="싼즈구" to="/tourist01"></nuxt-link>

            <!-- 石門區 -->

            <nuxt-link class="m-menu-map-name d-03" title="스먼구" to="/tourist02"></nuxt-link>

            <!-- 金山區 -->

            <nuxt-link class="m-menu-map-name d-04" title="진산구" to="/tourist03"></nuxt-link>

            <!-- 萬里區 -->

            <nuxt-link class="m-menu-map-name d-05" title="완리구" to="/tourist04"></nuxt-link>

            <!-- 基隆地區 -->

            <nuxt-link class="m-menu-map-name d-06" title="지룽지구" to="/tourist06"></nuxt-link>
          </div>
        </div>
      </div>
      <div class="content__section">
        <div class="content__section-content">
          <ul class="content__item">
            <li id="mark-1">
              <h3 class="h3">예려우 지질공원(예려우 여행객센터)</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-02.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-05.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-06.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-07.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-08.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-09.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-10.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-11.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-1-12.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <div class="scrollbox">
                    <li>
                      <span class="icon icon-address">주소：</span>
                      <span>신베이시 완리구 예려우리 강둥로167-1호</span>
                    </li>
                    <li>
                      <span class="icon icon-phone">전화：</span>
                      <span>(02)2492-2016</span>
                    </li>
                    <li>
                      <div class="description-more">
                        <span class="icon icon-time">개방시간：</span>
                        <span class="info">오전08:00에서 오후5：00까지</span>
                      </div>
                    </li>
                    <li>
                      <span class="icon icon-ticket">입장료：</span>
                      <span class="info">일반80원/명</span>
                    </li>
                    <li>
                      <span class="icon">소개웹사이트：</span>
                      <span>
                        <a
                          class="link"
                          href="http://www.ylgeopark.org.tw/content/index/index.aspx"
                          target="_blank"
                          rel="noopener noreferrer"
                        >예려우 지질공원 웹사이트</a>
                      </span>
                    </li>
                  </div>
                </ul>
              </div>
              <p>큰 규모, 편재된 기암, 특이한 조형으로 세계에서도 찾기 드문 대자연이 만든 기이한 경치로 유명한 예려우(野柳)지질공원은 완리에 오시면 반드시 방문하셔야 하는 국제적인 관광명소이다.</p>
              <p>예려우 지질공원에서 해갑의 말단까지는 길이가 약 1.7밀로미터인데 넓은 곳도 300미터가 못되며 해안에서 연장된 방향과 지층 및 구조선 방향이 수직에 가깝고 파도의 침식과 암석의 풍화, 해륙의 상대적 운동, 지각운동 등 지질작용의 영향으로 매우 보기 드물고 풍부한 지형과 지질경관이 만들어지게 되었다. 천연적인 지질교실과 기암의 낙원으로 풍화석, 풍식구, 풍식애, 공혈, 좁고 긴 갑각 등으로 다니면서 경이를 발견해 보시기 바란다.</p>
            </li>
            <li id="mark-2">
              <h3 class="h3">구이허우부두</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/4/img-2-01.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 완리구 위아오로85호</span>
                  </li>
                </ul>
              </div>
              <p>구이허우(龜吼)부두는 페이추이만(翡翠灣) 해수욕장의 북측에 위치해 있는데 최근 신베이시정부에서 홍보하고 있는 「완리게」로 유명하다. 이유는 입항 어획을 내리자마자 바로 판매되어 신선한 해산물이 부두 부근의 가게에서 요리되기 때문인데 많은 미식가들이 찾아온다. 주변이 예려우와 페이추이만과 연결된 3킬로미터의 해안선이고 장기간의 해수 침식으로 기암괴석이 즐비하여 내정부 영건서 해안환경풍모 선발에서 가장 아름다운 해안선으로 선정되었고 일출과 멀리 바다에서 점점히 빛나는 어선의 불빛을 감상하기에 가장 접합한 곳이다.</p>
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

    if ($(window).width() < 1024) {
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

/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 5%; //客製化調整滑動分頁按鈕
  left: 0;
  width: 100%;
}

.content {
  @include min-width(map-get($tablet, sm)) {
  }
}

.content__topbanner {
  width: 100%;
  position: relative;
  padding: 0 1rem;

  @include min-width(map-get($tablet, lg)) {
    padding: 0;
    padding-bottom: 26%;
    background: url("~assets/img/p2/4/p2-4-visual.jpg") no-repeat center/cover;
  }
}

.h2 {
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 2);
  color: $color-blue;

  @include min-width(map-get($tablet, sm)) {
    font-size: map-get($font-size, 1-1);
  }

  @include min-width(map-get($tablet, lg)) {
    position: absolute;
    top: 50%;
    left: -25%;
    margin-top: -40px;
    font-size: map-get($font-size, 1);
    color: $color-white;
    text-shadow: 3px 3px 10px #00000073;
  }
}

.h3 {
  line-height: 1.3;
  font-size: map-get($font-size, 3);
  color: $color-blue-dark-light;

  @include min-width(map-get($tablet, lg)) {
    font-size: map-get($font-size, 2);
  }
}

.map {
  width: 100%;
  height: 200px;
  position: relative;
  margin: 0 auto;
  margin-top: 2rem;
  background: url("~assets/img/p2/p2-5-map.svg") no-repeat center/contain;

  @include min-width(map-get($phone, md)) {
    width: 375px;
    height: 250px;
    padding-bottom: 0;
    margin: 0 auto;
    margin-top: 2rem;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 660px;
    height: 400px;
    padding-bottom: 0;
    margin: 0 auto;
    margin-top: 2rem;
  }

  @include min-width(map-get($tablet, lg)) {
    width: 282px;
    height: 177px;
    position: absolute;
    left: 70%;
    bottom: 1rem;
    padding-bottom: 0;
    margin-top: 0;
    background: url("~assets/img/p2/p2-5-map.svg") no-repeat center/cover;
  }
}

.map-text {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;

  @include min-width(map-get($tablet, sm)) {
  }

  @include min-width(map-get($tablet, lg)) {
    display: none;
  }

  > a {
    display: block;
    position: absolute;
    z-index: 200;
    background-repeat: no-repeat;
    background-position: center;
    color: $color-black;
    font-size: map-get($font-size, 7);
    font-weight: 900;
    transition: 0.2s;
    opacity: 1;

    @include min-width(map-get($tablet, sm)) {
      font-size: map-get($font-size, 5);
    }

    @include min-width(map-get($tablet, lg)) {
      display: none;
    }
  }
}

.name01 {
  top: 130px;
  left: 15px;

  @include min-width(map-get($phone, xxs)) {
    top: 135px;
    left: 38px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 132px;
    left: 52px;
  }

  @include min-width(map-get($phone, md)) {
    top: 150px;
    left: 25px;
  }

  @include min-width(map-get($tablet, sm)) {
    top: 220px;
    left: 25px;
  }
}

.name02 {
  top: 38px;
  left: 54px;

  @include min-width(map-get($phone, xxs)) {
    top: 32px;
    left: 74px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 32px;
    left: 92px;
  }

  @include min-width(map-get($phone, md)) {
    top: 67px;
    left: 15px;
  }

  @include min-width(map-get($tablet, sm)) {
    top: 101px;
    left: 60px;
  }
}

.name03 {
  top: 15px;
  left: 104px;

  @include min-width(map-get($phone, xxs)) {
    top: 8px;
    left: 128px;
  }

  @include min-width(map-get($phone, xs)) {
    top: 8px;
    left: 130px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 8px;
    left: 150px;
  }

  @include min-width(map-get($phone, md)) {
    top: 38px;
    left: 143px;
  }

  @include min-width(map-get($tablet, sm)) {
    top: 60px;
    left: 285px;
  }
}

.name04 {
  top: 43px;
  left: 153px;

  @include min-width(map-get($phone, xxs)) {
    top: 38px;
    left: 184px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 40px;
    left: 206px;
  }

  @include min-width(map-get($phone, md)) {
    top: 36px;
    left: 243px;
  }

  @include min-width(map-get($tablet, sm)) {
    top: 49px;
    left: 436px;
  }
}

.name05 {
  top: 78px;
  left: 178px;

  @include min-width(map-get($phone, xxs)) {
    top: 77px;
    left: 212px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 77px;
    left: 231px;
  }

  @include min-width(map-get($phone, md)) {
    top: 80px;
    left: 292px;
  }
  @include min-width(map-get($tablet, sm)) {
    top: 115px;
    left: 490px;
  }
}

.name06 {
  top: 108px;
  left: 216px;

  @include min-width(map-get($phone, xxs)) {
    top: 108px;
    left: 250px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 108px;
    left: 272px;
  }

  @include min-width(map-get($phone, md)) {
    top: 121px;
    left: 300px;
  }

  @include min-width(map-get($tablet, sm)) {
    top: 181px;
    left: 540px;
  }
}

.m-menu-map-item {
  width: 100%;
  height: 100%;
  position: absolute;

  > a {
    display: none;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.2s;
    opacity: 0;

    @include min-width(map-get($phone, md)) {
      display: block;
    }
  }
}

.d-01 {
  width: 45px;
  height: 45px;
  top: 112px;
  left: 18px;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover1.svg");

  @include min-width(map-get($phone, md)) {
    width: 60px;
    height: 60px;
    top: 141px;
    left: 24px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 105px;
    height: 105px;
    top: 225px;
    left: 50px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 50px;
    height: 50px;
    top: 98px;
    left: 15px;
  }
}

.d-02 {
  z-index: 10;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover2.svg");

  @include min-width(map-get($phone, md)) {
    width: 85px;
    height: 50px;
    top: 25px;
    left: 58px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 144px;
    height: 93px;
    top: 25px;
    left: 112px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 66px;
    height: 44px;
    top: 9px;
    left: 43px;
  }
}

.d-03 {
  width: 100px;
  height: 60px;
  top: -3px;
  left: 74px;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover3.svg");

  @include min-width(map-get($phone, md)) {
    width: 130px;
    height: 60px;
    top: -3px;
    left: 101px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 225px;
    height: 80px;
    top: -5px;
    left: 182px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 105px;
    height: 30px;
    top: 0px;
    left: 73px;
  }
}

.d-04 {
  width: 32px;
  height: 60px;
  top: 23px;
  left: 153px;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover4.svg");

  @include min-width(map-get($phone, md)) {
    width: 45px;
    height: 60px;
    top: 30px;
    left: 203px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 77px;
    height: 114px;
    top: 33px;
    left: 357px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 35px;
    height: 55px;
    top: 12px;
    left: 153px;
  }
}

// .d-05 {
//   width: 55px;
//   height: 45px;
//   top: 63px;
//   left: 167px;
//   background-size: 80%;
//   background-image: url("~assets/img/map/map-hover5.svg");

//   @include min-width(map-get($phone, md)) {
//     width: 70px;
//     height: 60px;
//     top: 75px;
//     left: 225px;
//   }

//   @include min-width(map-get($tablet, sm)) {
//     width: 120px;
//     height: 115px;
//     top: 108px;
//     left: 393px;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   @include min-width(map-get($tablet, lg)) {
//     width: 54px;
//     height: 50px;
//     top: 49px;
//     left: 169px;
//   }
// }

.d-06 {
  width: 73px;
  height: 28px;
  top: 95px;
  left: 201px;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover6.svg");

  @include min-width(map-get($phone, md)) {
    width: 90px;
    height: 29px;
    top: 124px;
    left: 272px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 155px;
    height: 80px;
    top: 181px;
    left: 472px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 68px;
    height: 40px;
    top: 78px;
    left: 205px;
  }
}

.content__section {
  margin-top: 2rem;
}

.content__section-content {
  margin: 0 auto;
  padding: 0 1rem;

  @include min-width(map-get($tablet, lg)) {
    width: 960px;
  }

  @include min-width(map-get($desktop, md)) {
    width: 1200px;
  }
}

.content__item {
  > li {
    margin-bottom: 3rem;

    &::after {
      content: "";
      display: block;
      border-bottom: 1px solid $color-gray;
      padding-top: 2rem;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }

    > p {
      margin-top: 1rem;
      color: $color-black;
      line-height: 2;
      font-weight: 900;

      @include min-width(map-get($tablet, lg)) {
        font-weight: 400;
      }
    }
  }
}

.content__item-wrap {
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @include min-width(map-get($tablet, lg)) {
    flex-direction: row;
  }
}

.carousel {
  width: 100%;

  @include min-width(map-get($tablet, lg)) {
    width: 50%;
  }
}

.description {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: 1rem;
  margin-top: 1rem;
  z-index: 500;
  background-color: $color-green-light;

  @include min-width(map-get($tablet, sm)) {
  }

  @include min-width(map-get($tablet, lg)) {
    width: 50%;
    height: 300px;
    padding: 3rem;
    left: -2.5rem;
  }

  @include min-width(map-get($desktop, md)) {
    height: 400px;
  }

  &::after {
    content: "";
    display: none;

    @include min-width(map-get($tablet, lg)) {
      width: 110%;
      height: 250px;
      display: block;
      position: absolute;
      right: -5%;
      border: 1px solid $color-blue-dark-light;
    }

    @include min-width(map-get($desktop, md)) {
      height: 350px;
    }
  }

  > li {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-left: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    @include min-width(map-get($tablet, lg)) {
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
    }

    > span {
      width: 100%;
      display: flex;
      align-items: center;
      font-weight: 900;
      line-height: 1.5;
      color: $color-black;

      @include min-width(map-get($tablet, lg)) {
        width: auto;
        font-weight: 400;
      }
    }
  }
}

.scrollbox {
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
  position: relative;
  z-index: 600;

  li {
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 40px;

    @include min-width(map-get($desktop, md)) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    > span {
      width: 100%;
      display: flex;
      align-items: center;
      line-height: 1.5;
      font-weight: 900;
      color: $color-black;

      @include min-width(map-get($tablet, lg)) {
        width: auto;
        font-weight: 400;
      }
    }
  }
}

.description-more {
  > span {
    width: 100%;
    display: block;
    font-weight: 900;
    line-height: 1.5;
    color: $color-black;

    @include min-width(map-get($tablet, lg)) {
      font-weight: 400;
    }
  }

  .icon {
    margin-top: 1rem;

    &:first-child {
      margin-top: 0rem;
    }
  }
}

.info {
  width: 80%;
}

.icon {
  position: relative;

  @include min-width(map-get($tablet, lg)) {
    width: 15%;
  }

  @include min-width(map-get($desktop, md)) {
    width: auto;
  }

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    display: block;
    position: absolute;
    left: -40px;
  }
}

.link {
  display: block;
  text-decoration: underline;
  color: $color-black;
}

.icon-address {
  &::before {
    background: url("~assets/img/icon/icon-place.svg") no-repeat center/contain;
  }
}

.icon-time {
  &::before {
    background: url("~assets/img/icon/icon-time.svg") no-repeat center/contain;
  }
}

.icon-ticket {
  &::before {
    background: url("~assets/img/icon/icon-ticket.svg") no-repeat center/contain;
  }
}

.icon-phone {
  &::before {
    background: url("~assets/img/icon/icon-phone.svg") no-repeat center/contain;
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  > img {
    width: 100%;
    height: 100%;
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