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
                <nuxt-link
                  to="/foods"
                  title="반드시 먹어야 할 미식"
                  class="menu__link menu__link-icon03 current03"
                >
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
                <a href="http://" target="_blank" rel="noopener noreferrer">ch</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">en</a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">jp</a>
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
        <h2 class="h2">반드시 먹어야 할 미식</h2>
      </div>
      <div class="content__section">
        <ul class="content__section-content">
          <!-- 觀音山 -->
          <li>
            <div class="carousel">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-h swiper-container-foods">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/5/img-5.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/5/img-5-01.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/5/img-5-02.JPG" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/5/img-5-03.jpg" alt />
                  </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
              </div>
            </div>
            <div class="description">
              <h3 class="h3">관음산의 미식(관인산)</h3>
              <!-- <h4 class="h4">推薦:鴨肉、蔴荖、地瓜特色料理</h4> -->
              <p>역사와 인문 특색이 충만한 산책길을 걸으면 나무의 울창함과 경치의 아름다움 이외에도 특수한 들짐승과 날짐승의 생태를 감상할 수 있고 하이킹을 마친 후 산중의 비밀화원에서 향토 미식을 맛볼 수 있다. 유명한 미식으로는 껍질은 바싹하고 육질은 고소한 야생으로 키운 닭요리, 사부님의 비법이 깃든 요리 등이 있어 미식을 좋아하는 당신이라면 놓칠 수 없는 기회이다.</p>
            </div>
          </li>
          <!-- 三芝 -->
          <li class="row-reverse">
            <div class="carousel">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-h swiper-container-foods">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/2/img-2.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/2/img-2-01.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/2/img-2-02.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/2/img-2-03.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/2/img-2-04.jpg" alt />
                  </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
              </div>
            </div>
            <div class="description">
              <h3 class="h3">치앤수이만 커피거리(싼즈구)</h3>
              <!-- <h4 class="h4">推薦:海邊咖啡店</h4> -->
              <p>치앤수이만에 오시면 해변에서 물놀이, 파도타기 등의 활동 이외에도 해안가에 많이 있는 낭만적이고 특색 있는 카페에서 경관 구경하거나 파도소리 듣기와 석양이 지는 미경을 감상할 수 있다. 치앤수만에서 유유자적한 오후 시간을 보내 보시기를 권합니다.</p>
            </div>
          </li>
          <!-- 石門 -->
          <li>
            <div class="carousel">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-h swiper-container-foods">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/3/img-3.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/3/img-3-01.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/3/img-3-02.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/3/img-3-03.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/3/img-3-04.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/3/img-3-05.JPG" alt />
                  </div>
                  
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
              </div>
            </div>
            <div class="description">
              <h3 class="h3">미스티 지베이란뎬(스먼구)</h3>
              <!-- <h4 class="h4">推薦:鴨肉、蔴荖、地瓜特色料理</h4> -->
              <p>해만과 가까운 곳에 흰색의 전아한 건물이 있는데 이곳이 바로 지베이란뎬인데 원래는 폐기되었던 구 해양순회군영으로 교통부관광국 베이관처에서 개조하여 새로 꾸민 후 지금은 케이크 가게로 달콤한 디저트에 아름다운 해경을 감상할 수 있는 곳으로 시각과 미각을 모두 갖춘 북해안에서 반짝반짝 빛나는 현지의 인문거점이다.</p>
            </div>
          </li>
          <!-- 金山 -->
          <li class="row-reverse">
            <div class="carousel">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-h swiper-container-foods">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/1/img-1.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/1/img-1-01.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/1/img-1-02-2.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/1/img-1-03.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/1/img-1-04.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/1/img-1-05.jpg" alt />
                  </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
              </div>
            </div>
            <div class="description">
              <h3 class="h3">진바오리 라오제(진산구)</h3>
              <!-- <h4 class="h4">推薦:鴨肉、蔴荖、地瓜特色料理</h4> -->
              <p>진바오리 라오제(金包里老街)는 바로 속칭 진산 라오제로 불리는데 부러우, 마라오 같은 각종 현지 간식과 토란떡과 붉은 살 고구마 구이 등 진산의 특산품이 매우 유명하며 라오제 중심에 있는 광안궁 앞에는 가장 인기가 많은 오리고기 가판대가 있고 셀프로 요리를 가져가서 먹는 문화가 현지의 특수한 경관이 되었다.</p>
            </div>
          </li>
          <!-- 萬里 -->
          <li>
            <div class="carousel">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-h swiper-container-foods">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/6/img-6.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/6/img-6-01.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/6/img-6-02.JPG" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/6/img-6-03.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/6/img-6-04.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/6/img-6-05.jpg" alt />
                  </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
              </div>
            </div>
            <div class="description">
              <h3 class="h3">구이허우부두(완리구)</h3>
              <!-- <h4 class="h4">推薦:鴨肉、蔴荖、地瓜特色料理</h4> -->
              <p>대만에서 바다 게의 최대 판매부두로 최근에는 꽃게, 삼점게, 긴 다리게 등의 산지로도 유명해졌으며 「완리게」상표를 선보였는데 육질이 부드럽고 살이 많고 식감이 풍부해 완리 지역 해산물의 대명사가 되었다. 매년 9-11월 가을철이 되면 부두에는 완리게를 구매하러 온 사람들로 북적이며 동시에 어촌안내체험, 휴일활게시장, 구이허우어부시장 등 여러 행사가 준비되어 있으므로 이곳에서 어촌체험을 하면서 완리게의 신선하고 단 맛을 맛보시길 권합니다.</p>
            </div>
          </li>
          <!-- 基隆 -->
          <li class="row-reverse">
            <div class="carousel">
              <!-- Swiper -->
              <div class="swiper-container swiper-container-h swiper-container-foods">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4-01.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4-02.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4-03.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4-04.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4-05.jpg" alt />
                  </div>
                  <div class="swiper-slide">
                    <img src="~assets/img/p3/4/img-4-06.jpg" alt />
                  </div>
                  
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
              </div>
            </div>
            <div class="description">
              <h3 class="h3">지룽묘입구 야시장(지룽지구)</h3>
              <!-- <h4 class="h4">推薦:鴨肉、蔴荖、地瓜特色料理</h4> -->
              <p>전 대만에서 유명한 지룽 절 앞의 야시장에는 잘 알려진 간식인 딩볜춰, 톈부라, 숯불구이 샌드위치, 원미족발, 굴지짐이(굴전)와 루러우밥 등 없는 것이 없다. 해산물, 닭고기구이, 과일아이스 등 각종 간식들이 즐비해 이곳에서 전 대만의 간식을 다 맛볼 수 있어 오래 기억에 남을 것이다. 대만 특유의 간식과 미식을 맛보시려면 지룽 절 앞의 야시장은 절대 놓칠 수 없는 곳이다.</p>
            </div>
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
  // watch: {
  //   menuOpenStatus(value) {
  //     this.ctrlHtmlSelectorHidden(value);
  //   },
  // },
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
    margin-bottom: 5rem;
  }
}

.content__topbanner {
  width: 100%;
  position: relative;

  @include min-width(map-get($phone, lg)) {
    padding-bottom: 26%;
    background: url("~assets/img/p3/p3-visual.jpg") no-repeat center/cover;
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
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 2);
}

.h4 {
  color: $color-black;
  font-family: "Dokdo", cursive;
  font-size: map-get($font-size, 4);
}

.content__section {
  padding-top: 1rem;
  position: relative;
  display: flex;

  @include min-width(map-get($tablet, lg)) {
    padding-top: 3rem;
  }

  &::before {
    content: "";
    width: 15%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    background-image: url("~assets/img/p3/p3-deco-left.png");
    background-size: 100%;
    background-position: 0% 0%;
    background-repeat: repeat-y;
    opacity: 1;

    @include max-width(map-get($tablet, lg)) {
      opacity: 0.5;
    }
  }

  &::after {
    content: "";
    width: 15%;
    height: 100%;
    display: block;
    position: absolute;
    right: 0;
    background-image: url("~assets/img/p3/p3-deco-right.png");
    background-size: 100%;
    background-position: 0% 0%;
    background-repeat: repeat-y;
    opacity: 1;

    @include max-width(map-get($tablet, lg)) {
      opacity: 0.5;
    }
  }
}

.content__section-content {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @include min-width(map-get($tablet, lg)) {
    width: 960px;
  }

  @include min-width(map-get($desktop, md)) {
    width: 1200px;
  }

  > li {
    width: 100%;
    display: flex;
    justify-content: space-around;

    @include max-width(map-get($tablet, lg)) {
      flex-direction: column;
      padding-bottom: 2rem;
      margin-bottom: 3rem;
      border-bottom: 1px solid $color-gray;

      &:last-child {
        border: none;
      }
    }
  }
}
.row-reverse {
  flex-direction: row-reverse;
}

.carousel {
  width: 45%;
  padding: 0.5rem;
  border-radius: 45%;
  border: 2px dashed $color-blue-dark-light;

  @include max-width(map-get($tablet, lg)) {
    width: 100%;
    border: none;
  }
}

.swiper-container-foods {
  border-radius: 45%;
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

.description {
  width: 45%;

  @include max-width(map-get($tablet, lg)) {
    width: 100%;
  }

  > h3 {
    margin-top: 2rem;

    @include min-width(map-get($tablet, lg)) {
      margin-top: 3rem;
    }
  }

  > h4 {
    margin-top: 0.5rem;
  }

  > p {
    margin-top: 0.5rem;
    line-height: 2;
    color: $color-black;
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