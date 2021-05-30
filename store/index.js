import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      lines: [
        "Yohji Yamamoto",
        "Yohji Yamamoto POUR HOMME",
        "Yohji Yamamoto +NOIR",
        "Y's",
        "Y's BANG ON!",
        "Y's PINK",
        "Ground Y",
        "Y3",
        "S'YTE",
        "Yohji Yamamoto eyewear",
        "discord Yohji Yamamoto",
        "B Yohji Yamamoto",
        "GOTHIC YOHJI YAMAMOTO",
        "LIMI feu",
      ]
    }),
  })
}

export default createStore;
