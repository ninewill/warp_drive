//* State
export const state = () => ({
  // 行動版選單是否開啟
  menuOpen: false,

  // 網頁頁面路由資訊
  // router: {
  //   routes: [
  //     {
  //       name: "page01",
  //       title: "북해안과 관인산 알기",
  //       path: "/page01",
  //       component: 'pages/page01/index.vue',
  //     }
  //   ]
  // }
});

// * Actions
export const actions = {};

// * Mutations
export const mutations = {
  // 取得瀏覽器畫面寬度
  GET_SCREEN_WIDTH(state) {
    state.screenWidth = window.innerWidth;
  },
  // 控制手機選單是否開啟
  CTRL_MENU_OPEN(state, payload) {
    state.menuOpen = payload;
  },
};
