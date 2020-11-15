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
        <h2 class="h2">싼즈구</h2>
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

            <nuxt-link class="d-01" title="관인산" to="/tourist05"></nuxt-link>

            <!-- 三芝區 -->

            <nuxt-link class="d-02" title="싼즈구" to="/tourist01"></nuxt-link>

            <!-- 石門區 -->

            <nuxt-link class="d-03" title="스먼구" to="/tourist02"></nuxt-link>

            <!-- 金山區 -->

            <nuxt-link class="d-04" title="진산구" to="/tourist03"></nuxt-link>

            <!-- 萬里區 -->

            <nuxt-link class="d-05" title="완리구" to="/tourist04"></nuxt-link>

            <!-- 基隆地區 -->

            <nuxt-link class="d-06" title="지룽지구" to="/tourist06"></nuxt-link>
          </div>
        </div>
      </div>
      <div class="content__section">
        <div class="content__section-content">
          <ul class="content__item">
            <li>
              <h3 class="h3">쳰수이만</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-1-01.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-1-02.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-1-03.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 싼즈구 단진공로(2호 성도)14.5-16.5킬로미터 지점</span>
                  </li>
                  <li>
                    <span class="icon icon-time">개방시간：</span>
                    <span class="info">일년내내 무휴</span>
                  </li>
                  <li>
                    <span class="icon icon-ticket">비용：</span>
                    <span>없음, 샤워비20원/명, 발 씻는 비용은 없음</span>
                  </li>
                </ul>
              </div>
              <p>쳰수이만(淺水灣)은 북해안의 유명한 해빈 풍경이다.</p>
              <p>쳰수이만의 해안선은 동시에 암석해안과 모래해안의 특질을 가지고 있는데 왼쪽편은 암석해안으로 돌출된 거암이 많고 오른쪽은 모래해안으로 긴 시간동안 침전되어 생성된 조류암초지형과 반달형의 모래해변이 조합되어 형성되었는데 이는 쳰수이만의 가장 큰 특색의 하나이다.</p>
              <p>해안의 멀지 않은 곳에 암초바위구역이 있어 많은 여행객들이 모래해변에서 파도를 따라 조개를 줍고 넓고 평탄한 미백색 모래해변에서 낭만적이고 편안한 시간을 보낸다. 만약 바다바람을 느끼고 싶다면 자전거를 타고 쳰수이만 자전거길에서 바다바람에 풀들이 눕는 자연의 운율에 따라 마음이 시원하고 기분이 쾌적해짐을 느끼게 될 것이다.</p>
            </li>
            <li>
              <h3 class="h3">싼즈여객센터</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-2-01.JPG" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 싼즈구 푸핑리 푸터우컹164-2호</span>
                  </li>
                  <li>
                    <span class="icon icon-phone">전화：</span>
                    <span>(02)8635-5143</span>
                  </li>
                  <li>
                    <span class="icon icon-time">개방시간：</span>
                    <span class="info">09:00-17:00；5월에서 9월까지09:00-18:00</span>
                  </li>
                </ul>
              </div>
              <p>여러 산으로 둘러싸인 산오르막에 위치하고 있으며 전체 지역의 시야가 탁 틔어 여행객들에게 넓은 휴식공간을 제공할 뿐 아니라 여행안내와 자문, 전시장 소개를 받을 수 있고 자료도 얻을 수 있어 편리하고 다원적인 서비스를 제공한다.</p>
              <p>주요 건물은 당나라 시대의 건축 디자인을 모방하여 색조가 고아하고 아름다우며 고전과 현대를 융합한 특수한 느낌을 보여준다.</p>
            </li>
            <li>
              <h3 class="h3">벚꽃길</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-3-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-3-02.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-3-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/1/img-3-04.JPG" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 싼즈구 다후로(향도 북7선)</span>
                  </li>
                </ul>
              </div>
              <p>싼즈지역에는 만 6천여 그루의 벚나무가 심어져 있는데 그중 칭산로를 따라 70킬로미터 길이의 벚꽃길은 싼즈의 유명한 벚꽃구경 명소이다.</p>
              <p>매년 봄 꽃샘추위가 시작될 즈음에 길을 따라 심겨진 각종 벚나무가 연속해서 만개하는데 그 기간이 두 달 정도 지속된다.</p>
              <p>하늘거리는 벚꽃은 파란 하늘과 녹색의 대지가 받쳐주어 더할 나위없이 낭만적이고 온 산과 계곡의 벚꽃이 비단처럼 아름답기가 그지없어 그 속을 거닐면 즐겁고 산뜻하다.</p>
              <p>그 외 벚꽃길 역시 북해안에서 가장 유명한 자전거 벚꽃감상 노선으로 많은 여행객들이 자전거를 타고 연도의 풍광을 감상한다. 연도에는 커피 노점, 풍경감상길, 관경대 등이 설치되어 있어 여행객들은 잠시 쉬면서 벚꽃을 감상할 수 있으니 매년 벚꽃이 만개하는 계절에 싼즈로 오셔서 낭만적인 벚꽃감상과 자전거 타기도 즐기시길 바란다.</p>
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
    background: url("~assets/img/p2/1/p2-1-visual.jpg") no-repeat center/cover;
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
  background: url("~assets/img/p2/p2-2-map.svg") no-repeat center/contain;

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
    background: url("~assets/img/p2/p2-2-map.svg") no-repeat center/cover;
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

// .d-02 {
//   z-index: 10;
//   background-size: 80%;
//   background-image: url("~assets/img/map/map-hover2.svg");

// @include min-width(map-get($phone, md)) {
//   width: 60px;
//   height: 60px;
//   top: 141px;
//   left: 24px;
// }

//   @include min-width(map-get($tablet, sm)) {
//     width: 105px;
//     height: 105px;
//     top: 225px;
//     left: 120px;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   @include min-width(map-get($tablet, lg)) {
//     width: 66px;
//     height: 44px;
//     top: 9px;
//     left: 43px;
//   }
// }

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

.d-05 {
  width: 55px;
  height: 45px;
  top: 63px;
  left: 167px;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover5.svg");

  @include min-width(map-get($phone, md)) {
    width: 70px;
    height: 60px;
    top: 75px;
    left: 225px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 120px;
    height: 115px;
    top: 108px;
    left: 393px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 54px;
    height: 50px;
    top: 49px;
    left: 169px;
  }
}

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
    height: 300px;
    padding: 0;
  }

  @include min-width(map-get($tablet, lg)) {
    width: 50%;
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