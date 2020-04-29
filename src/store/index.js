import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: sessionStorage.getItem('role') || '',
    // role: 'manager',
    userId: sessionStorage.getItem('userId') || '',
    userInfo: {
      type: sessionStorage.getItem('type') || '',
      username: sessionStorage.getItem('username') || '',
      token: sessionStorage.getItem('token') || '',
      area: sessionStorage.getItem('area') || '',
    },
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      switch (payload.type) {
        case '3':
          state.role = 'company';
          break;
        case '7':
          state.role = 'manager';
          break;
        case '8':
          state.role = 'expenseManager';
          break;
        default:
          state.role = 'user'
      }
      sessionStorage.setItem('role', state.role);
      state.userId = payload.authorID;
      state.userInfo.type = payload.type;
      state.userInfo.username = payload.username;
      state.userInfo.token = payload.token;
      state.userInfo.area = payload.area;
      sessionStorage.setItem('userId', state.userId);
      sessionStorage.setItem('type', state.userInfo.type);
      sessionStorage.setItem('username', state.userInfo.username);
      sessionStorage.setItem('token', state.userInfo.token);
      sessionStorage.setItem('area', state.userInfo.area);
    },
    CLEAR_USER_INFO(state) {
      state.role = '';
      state.userId = '';
      state.userInfo.type = '';
      state.userInfo.username = '';
      state.userInfo.token = '';
      state.userInfo.area = '';
      sessionStorage.clear();
    }
  },
  actions: {
  },
  modules: {
  }
})
