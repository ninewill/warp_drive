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
        <h2 class="h2">진산구</h2>
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
              <h3 class="h3">진산 여행객 센터</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-1-01.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 진산구 황강리 황강로171-2호</span>
                  </li>
                  <li>
                    <span class="icon icon-phone">전화：</span>
                    <span>(02)2498-8980</span>
                  </li>
                  <li>
                    <div class="description-more">
                      <span class="icon icon-time">개방시간：</span>
                      <span class="info">오전9：00에서 오후5：00까지（계절에 따라 조정, 5월부터 9월까지는 오후 6시까지 연장 개방）</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p>여행객 센터는 진산 스터우산공원의 입구에 위치해 있으며, 스터우산(獅頭山) 하이킹이나 주타이솽위(촉대쌍서)를 감상할 때 반드시 경과하는 곳으로 휴일에 여행객들의 발이 끊이지 않는 곳으로 부근의 진산(金山) 스터우산 등산길을 포함해 체력을 단련하고 심신의 건강을 유지시킬 수 있을 것이다.</p>
              <p>또한 가장 역사적인 분위기를 가진 시가지-진바오리(金包里) 라오제(老街)가 있는데 현재 북해안에서 유일하게 남아있는 청나라 시대의 라오제로 당시 주요한 농산물과 어획의 집산지로서 역사가 오래되고 옛 정취가 남아있어 진산의 산업경제발전의 변천을 살펴볼 수 있다.</p>
              <p>진산 여행객 센터의 지리적 편리성과 열정이 넘치는 직원들이 풍부한 여가정보를 제공해 줄 것이므로 진산여행에서 재미와 즐거움을 마음껏 누릴 수 있을 것이다.</p>
            </li>
            <li id="mark-2">
              <h3 class="h3">중쟈오만(중쟈오만 여행객 센터)</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-2-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-2-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-2-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-2-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-2-05.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 진산구 완서우리 하이싱로180의 3호</span>
                  </li>
                  <li>
                    <span class="icon icon-phone">전화：</span>
                    <span>(02)2408-2319</span>
                  </li>
                </ul>
              </div>
              <p>만 입구에 오목하게 들어가 형성된 모래해안 지형으로 계절풍이 불어올 때면 드 높게 이는 아름다운 파도가 더해져 대2선 39킬로미터 지점에 위치한 중쟈오만(中角灣)을 북해안에서 가장 유명한 서핑 천당으로 만들어 주었다.</p>
              <p>이 아름다운 서핑 장소는 휴일이 되면 많은 서핑객들이 모여들어 해상에서 파도타기를 즐긴다. 이곳에는 여러 클럽들이 있어 서핑보드를 대여해 주고 가르쳐 주기도 하여 처음 배우는 이나 기초가 있는 이 누구나 이 해변에서 서핑의 쾌감을 즐길 수 있다. 새로 성립한 중쟈오만 국제 서핑기지는 훈련센터와 여행객 서비스를 제공하고 있어 국제적인 서핑명소로 각광받고 있다.</p>
              <p>서핑 애호자들 뿐 아니라 이곳에서 스스로에게 도전을 해 보는 것도 시도해 볼 만하다. 왜냐하면 중쟈오만의 해변은 모래가 가늘고 돌도 많지 않으며 비교적 넓은 면적의 얕은 해변구역이 있어 아동들이 이곳에서 물놀이하기에 적합하다.</p>
            </li>
            <li id="mark-3">
              <h3 class="h3">스터우산공원</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-01.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-02.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-03.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-04.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-05.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-06.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-3-07.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 진산구 황강로171-2호</span>
                  </li>
                </ul>
              </div>
              <p>진산해갑에 위치한 스터우산(獅頭山)은 동쪽으로 예려우갑이 보이고 서쪽으로는 황강부두와 중쟈오의 산과 바다 풍경이 보인다. 오랜 동안 군사관제의 보호 아래 스터우산의 생태자원이 완전하고 풍부하게 보존되어 임상이 매우 다양하며 최근 몇 년간 더욱 보육에 성공하여 계절마다 산책길에서 대만백합이나 나리꽃이 만개한 미경을 만날 수 있다.</p>
              <p>산책길의 끝자락에 이르면 판운동과 자연침식의 힘이 만들어 낸 유명한 경관 주타이솽위(燭台雙嶼)가 눈 앞에 솟아있는 것을 마주치게 된다. 6백만년전에 해면에서 융기한 침적암이 비바람과 파도의 씻김으로 마치 인공으로 조각해 낸 예술품과 같이 바다의 중앙에 솟아올라 감탄을 자아내는 지질의 아름다움을 이루게 된 것이다.</p>
            </li>
            <li id="mark-4">
              <h3 class="h3">주타이솽위</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-4-01.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-4-02.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-4-03.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-4-04.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-4-05.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-4-06.JPG" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 진산구 스터우산공원</span>
                  </li>
                </ul>
              </div>
              <p>진산팔경 중의 하나인 주타이솽위(燭台雙嶼촉대쌍서)는 바다길 노선에서 가장 아름다운 경치로 모든 분주함과 번뇌를 떨치게 해주어 푸르런 해안에서 마음껏 구경할 수 있다. 주타이솽위는 진산의 대표적인 명소이며 「부부암」으로도 불리는데 진산갑 동측의 해면에 서 있는데 그 형상이 마치 두 개의 촉대가 병열하고 있는 것으로 보인다. 그 원인은 지반이 상승하여 융기한 산호암이 침식작용을 받아 형성된 해식암 기둥이기 때문인데 매우 특별하고 흥미를 돋군다.</p>
              <p>이밖에 스터우산공원의 산책길의 끝부분에 있는 중정정자는 주타이솽위를 촬영하고 해경을 감상할 수 있는 좋은 지점으로 멀리 조망하거나 혹은 내려다 보거나 진산해안의 지형경관을 매우 아름답게 감상할 수 있다.</p>
            </li>
            <li id="mark-5">
              <h3 class="h3">진바오리 라오제</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-5-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-5-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-5-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-5-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-5-05.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 진산구 진바오리가</span>
                  </li>
                </ul>
              </div>
              <p>「진산 라오제」는 북해안의 유일한 청나라 시대의 상업 거리이다. 청나라 시기 라오제(老街)의 번화한 정도는 오늘날의 상업거리와 별반 차이가 없었으며 당시 왕래가 빈번했던 상업활동구역을 한 번 다녀가면 라오제가 보존하고 있는 많은 과거의 번화한 역사가 남긴 흔적을 발견할 수 있고 부근의 츠후궁(慈護宮) 옆 남아 있는 몇 채의 옛날 가옥은 바로 이전 시절의 「길거리 집」으로 전통적인 직사각형의 점포주택인데 민남식 가옥과 서양식 입면, 그리고 좁고 깊게 만들어진 차양식 복도가 있는 건물이다. 부근에는 전통 한약포가 있는데 그곳의 오랜 세월을 겪어온 가구와 진열된 약통 등은 청나라 시대의 역사와 정서를 여전히 간직하고 있다.</p>
              <p>지금은 비록 번화한 광경은 이미 과거가 되었지만 완벽한 보존 계획을 통해 라오제의 관광 도보구에는 진바오리(金包里) 라오제의 특색인 배수구 덮개가 깔리고 창의성이 넘치는 여러 장식들이 여행객들에게 더 많은 경이를 안겨주고 있고 과거의 번화했던 풍모를 되새기게 해주고 있으므로 이곳에 와서 옛 정취를 천천히 느껴보시기 바란다.</p>
            </li>
            <li id="mark-6">
              <h3 class="h3">진산완리 온천구</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-6-01.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/3/img-6-02.JPG" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 진산구</span>
                  </li>
                </ul>
              </div>
              <p>진산완리(金山萬里) 온천은 다툰산(大屯山) 지열대에 위치하여 천혜의 천연 샘물과 지열경관을 가지고 있어 매년 겨울철이면 많은 사람들이 이곳에서 온천의 즐거움을 누린다. 진산, 완리의 다른 수질은 피부의 보습, 혈액순환에 효과가 있을 뿐 아니라 미백의 효과도 있다고 알려져 있다. 「온천을 하면서 바다풍경을 감상」하고 북해안과 관인산의 독특한 몽환적인 자연경관을 누리시길 바란다. 차가운 바람을 맞으면서 뜨거운 황금탕에 몸을 담그고 있으면 전신의 모든 세포가 열리는 통쾌함을 느낄 수 있다.</p>
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
    background: url("~assets/img/p2/3/p2-3-visual.jpg") no-repeat center/cover;
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
  background: url("~assets/img/p2/p2-4-map.svg") no-repeat center/contain;

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
    background: url("~assets/img/p2/p2-4-map.svg") no-repeat center/cover;
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

// .d-04 {
//   width: 32px;
//   height: 60px;
//   top: 23px;
//   left: 153px;
//   background-size: 80%;
//   background-image: url("~assets/img/map/map-hover4.svg");

//   @include min-width(map-get($phone, md)) {
//     width: 45px;
//     height: 60px;
//     top: 30px;
//     left: 203px;
//   }

//   @include min-width(map-get($tablet, sm)) {
//     width: 77px;
//     height: 114px;
//     top: 33px;
//     left: 357px;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   @include min-width(map-get($tablet, lg)) {
//     width: 35px;
//     height: 55px;
//     top: 12px;
//     left: 153px;
//   }
// }

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