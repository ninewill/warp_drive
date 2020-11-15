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
        <h2 class="h2">스먼구</h2>
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
              <h3 class="h3">바이사만 여객센터</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-1-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-1-02.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 스먼구 더마오리 샤위안컹33-6호</span>
                  </li>
                  <li>
                    <span class="icon icon-phone">전화：</span>
                    <span>(02)8635-5100</span>
                  </li>
                  <li>
                    <div class="description-more">
                      <span class="icon icon-time">개방시간：</span>
                      <span class="info">10월부터 4월까지：09:00-17:00, 5월부터 9월까지：09:00-18:00</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p>바이사만 여객센터는 바이사만 휴게구 입구에 위치하고 있으며 북해안 및 관인산(觀音山) 국가풍경구관리처 행정센터로 전체 건축물은 일반적인 디자인과 달리 그린건축의 컨셉으로 설계되어 주변 경관과의 어울림과 실용성을 동시에 중시하였다.</p>
              <p>건축물이 완만한 경사도와 결합하여 주차장, 광장과 해변의 활동이 상호 융합되게 하여 건축 높이의 시각을 낮추어 옥상의 잔디밭과 평대의 활동공간을 제공하고 사람과 지리경관, 건축의 전통적인 이원관계를 개선하여 건축이 마치 큰 나무나 바위와 같이 지리경관에 융합되게 하여 생태이념을 구현했다.</p>
              <p>여행객들의 물놀이 수요에 맞추어 여객센터에는 샤워시설이 구비되어 있고 하이킹과 휴식을 제공하고 멀티미디어 안내해설, 현지여행정보와 관련출판품도 비치되어 있는 등 설비가 완벽하여 여행객들이 즐겁게 여가를 즐길 수 있을 것이다.</p>
            </li>
            <li id="mark-2">
              <h3 class="h3">바이사만</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-05.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-06.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-07.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-2-08.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span>신베이시 스먼구 더마오리 샤위안컹(2호 성도23킬로미터 지점)</span>
                  </li>
                  <li>
                    <div class="description-more">
                      <span class="icon icon-time">개방시간：</span>
                      <span class="info">
                        5, 6, 10월：09:00-17:00
                        <br />7, 8, 9월：09:00-18:00
                      </span>
                    </div>
                  </li>
                  <li>
                    <span class="icon icon-ticket">비용：</span>
                    <span>없음, 온수 샤워 40원/명, 냉수 샤워 20원/명, 발 씻기 10원/명</span>
                  </li>
                </ul>
              </div>
              <p>바이사만은 약 1킬로미터로 이어진 흰색 조개껍질 해변으로 이 린산비(麟山鼻)와 푸구이쟈오(富貴角)를 포함하는 반달모양의 천연해만은 푸르른 바다와 하늘이 받쳐주어 사람의 마음을 평안하게 해 준다.</p>
              <p>해변에서 가볍게 산책을 하면 눈앞의 푸른 바다를 떠나기 어렵고 조각조각 세세한 조개껍질 모래로 이루어진 이곳에 계속 머물고 싶어진다.</p>
              <p>또한 흰 파도가 가져온 산호초와 조개껍질은 오랫동안 지속된 씻김과 충격으로 사람들의 손에 잡히는 낭만과 그리움으로 화해 많은 감정을 느끼게 해 준다.</p>
              <p>바람이 불면 손바닥 안의 가는 모래가 바람에 날리고 거센 바다바람을 따라 가지런하고 아름다운 파도모양의 「모래 무늬」풍경을 이루어 이 대자연이 만든 독특한 예술품이 감탄을 자아낸다.</p>
            </li>
            <li id="mark-3">
              <h3 class="h3">푸구이쟈오 휴게구</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-01.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-03.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-04-2.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-05.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-06.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-3-07.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span class="info">신베이시 스먼구 푸지리（2호 성도25킬로미터 지점, 푸지부두 내로 진입）</span>
                  </li>
                </ul>
              </div>
              <p>푸구이쟈오(富貴角) 휴게구는 스먼구에 위치하고 있으며 원구내에 유명한 풍릉석 경관구, 빈해 산책길, 라오메이녹석조 및 사구 등 특수한 지질경관을 가지고 있고 그중 원구의 대표적 건물인 푸구이쟈오등대가 포함되어 있는데 이 등대는 간격을 두고 흑백의 평행 무늬가 그려진 팔각형등대인데 대만 본도에서 가장 북단에 위치하고 있다.</p>
              <p>푸구이쟈오등대로 가시려면 라오메이(老梅)녹석조, 푸지(富基)부두 등 유명한 명소를 따라 구경하다가 산책길로 된 통도를 통해 들어가면 독특한 해안풍경을 구경할 수 있고 유구한 역사가 주는 심원한 시대의의를 체험할 수 있다.</p>
            </li>
            <li id="mark-4">
              <h3 class="h3">라오메이녹석조</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-05.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-06.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-07.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-08.JPG" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-09.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-4-10.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span class="info">신베이시 스먼구 라오메이촌락 연해</span>
                  </li>
                </ul>
              </div>
              <p>라오메이의 해구 부식조형은 매우 독특한데 원래는 다툰(大屯)화산이 폭발한 후 해안선에 남겨진 화산초암이었는데 장시간 파도의 침식작용으로 인해 지질이 부드러운 부분에 침식이 일어나 비교적 딱딱한 부분에 세로로 된 도랑 홈 모양이 남겨진 것이다. 동북계절풍이 몰고 온 파도가 석조표면을 때려 석조의 안석면에 물기를 가해 천천히 녹색의 파래, 매생이 등 해조류가 자생하여 오늘날 감탄을 금치 못하게 하는 「녹석조」의 미경을 완성했다.</p>
              <p>라오메이녹석조는 CNN에 의해 대만의 8대 비경 중의 하나로 선정되었는데 선명한 녹색조류와 푸른 바다가 서로를 받쳐주어 매년 2-5월이면 북해안에 몽환과 같은 녹색빛 풍경을 형성해 촬영 애호가들이 모여 드는 곳이며 셀럽들이 IG을 올리거나 커플들의 웨딩촬영으로도 매우 인기있는 장소이다.</p>
              <p>석조는 해조가 생장해 만들어진 천연경치로 최근 따뜻한 겨울 효과와 인위적인 파괴로 인해 위기를 맞았는데 녹색조의 매끄러운 표면 때문에 미끄러져 다칠 수 있으므로 석조를 밟지 말고 해안가에서 감상하면 생장환경을 보존하여 진귀한 녹색조가 영속적으로 지속될 수 있을 것이다.</p>
            </li>
            <li id="mark-5">
              <h3 class="h3">푸지부두</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-5-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-5-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-5-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-5-04.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span class="info">신베이시 스먼구 푸지리（2호 성도25킬로미터 지점, 푸지부도 내로 진입）</span>
                  </li>
                </ul>
              </div>
              <p>스먼구 푸지갑 부근에 위치한 푸지(富基)부두는 각종 꽃게 등 신선한 해산물이 풍부하고 가격도 저렴하여 제철 생선을 살 수 있고 그 외 현지의 가게에서 요리해 주는 음식도 맛볼 수 있어 북해안에서 해산물을 맛보기에 더없이 좋은 장소이다.</p>
            </li>
            <li id="mark-6">
              <h3 class="h3">스먼동</h3>
              <div class="content__item-wrap">
                <div class="carousel">
                  <!-- Swiper -->
                  <div class="swiper-container swiper-container-h swiper-container-foods">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-01.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-02.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-03.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-04.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-05.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-06.jpg" alt />
                      </div>
                      <div class="swiper-slide">
                        <img src="~assets/img/p2/2/img-6-07.jpg" alt />
                      </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination swiper-pagination-h swiper-pagination-f"></div>
                  </div>
                </div>
                <ul class="description">
                  <li>
                    <span class="icon icon-address">주소：</span>
                    <span class="info">신베이시 스먼구 중양로</span>
                  </li>
                </ul>
              </div>
              <p>대2성도 28.7킬로미터 지점에 서 있는 스먼동은 스먼구에서 인기 있는 체크인 장소이며 현지의 가장 유명한 지표이다, 스먼해석동은 파도의 침식과 지각상승작용으로 인해 오늘날 보이는 약10미터 높이의 무지개문 모양의 특수 천연경관을 형성했는데 해안선을 따라 설치된 산책길과 관경대에서 바라보면 탁 트인 드넓은 바다풍경을 감상할 수 있고 그 사이를 산책하면서 파도소리를 들으면서 사진도 찍고 또 다른 운치의 풍정을 체험할 수 있을 것이다.</p>
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
    background: url("~assets/img/p2/2/p2-2-visual.jpg") no-repeat center/cover;
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
  background: url("~assets/img/p2/p2-3-map.svg") no-repeat center/contain;

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
    height: 195px;
    position: absolute;
    left: 70%;
    bottom: 1rem;
    padding-bottom: 0;
    margin-top: 0;
    background: url("~assets/img/p2/p2-3-map.svg") no-repeat center/cover;
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
    top: 42px;
    left: 82px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 42px;
    left: 100px;
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
  top: 22px;
  left: 104px;

  @include min-width(map-get($phone, xxs)) {
    top: 22px;
    left: 128px;
  }

  @include min-width(map-get($phone, xs)) {
    top: 22px;
    left: 130px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 21px;
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
  top: 53px;
  left: 153px;

  @include min-width(map-get($phone, xxs)) {
    top: 50px;
    left: 184px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 50px;
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
  top: 85px;
  left: 178px;

  @include min-width(map-get($phone, xxs)) {
    top: 85px;
    left: 212px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 87px;
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
  top: 117px;
  left: 216px;

  @include min-width(map-get($phone, xxs)) {
    top: 117px;
    left: 250px;
  }

  @include min-width(map-get($phone, sm)) {
    top: 118px;
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
    top: 149px;
    left: 27px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 95px;
    height: 95px;
    top: 240px;
    left: 74px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 50px;
    height: 50px;
    top: 115px;
    left: 15px;
  }
}

.d-02 {
  z-index: 10;
  background-size: 80%;
  background-image: url("~assets/img/map/map-hover2.svg");

  @include min-width(map-get($phone, md)) {
    width: 80px;
    height: 50px;
    top: 36px;
    left: 63px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 130px;
    height: 93px;
    top: 50px;
    left: 129px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 66px;
    height: 44px;
    top: 26px;
    left: 43px;
  }
}

// .d-03 {
//   width: 100px;
//   height: 60px;
//   top: -3px;
//   left: 74px;
//   background-size: 80%;
//   background-image: url("~assets/img/map/map-hover3.svg");

//   @include min-width(map-get($phone, md)) {
//     width: 130px;
//     height: 60px;
//     top: -3px;
//     left: 101px;
//   }

//   @include min-width(map-get($tablet, sm)) {
//     width: 225px;
//     height: 80px;
//     top: -5px;
//     left: 182px;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   @include min-width(map-get($tablet, lg)) {
//     width: 105px;
//     height: 30px;
//     top: 0px;
//     left: 73px;
//   }
// }

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
    top: 42px;
    left: 203px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 71px;
    height: 114px;
    top: 57px;
    left: 355px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 35px;
    height: 55px;
    top: 29px;
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
    top: 85px;
    left: 223px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 113px;
    height: 98px;
    top: 135px;
    left: 387px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 54px;
    height: 50px;
    top: 66px;
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
    top: 133px;
    left: 269px;
  }

  @include min-width(map-get($tablet, sm)) {
    width: 139px;
    height: 43px;
    top: 214px;
    left: 461px;

    &:hover {
      opacity: 1;
    }
  }

  @include min-width(map-get($tablet, lg)) {
    width: 68px;
    height: 40px;
    top: 95px;
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