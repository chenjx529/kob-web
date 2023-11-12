import { defineStore } from 'pinia';

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore('user', {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        id: '001',
        username: 'chenjx',
        photo: 'https://www.jj.com',
        is_login: true,
        pulling_info: true, // 是否正在从云端拉取信息
        token: '',
      },
    };
  },
  getters: {
    userName: (state) => state.userInfo.username,
  },
  actions: {
    updateUserInfo(userInfo: {
      id: string;
      username: string;
      photo: string;
      is_login: boolean;
      pulling_info: boolean;
      token: string;
    }) {
      this.userInfo = userInfo;
    },
    updateId(id: string) {
      this.userInfo.id = id;
    },
    updateUsername(username: string) {
      this.userInfo.username = username;
    },
    updatePhoto(photo: string) {
      this.userInfo.photo = photo;
    },
    updateIslogin(is_login: boolean) {
      this.userInfo.is_login = is_login;
    },
    updatePullingInfo(pulling_info: boolean) {
      this.userInfo.pulling_info = pulling_info;
    },
    updateToken(token: string) {
      this.userInfo.token = token;
    },
    logout() {
      this.userInfo = {
        id: '001',
        username: 'chenjx',
        photo: 'https://www.jj.com',
        is_login: false,
        pulling_info: false,
        token: '',
      };
    },
  },
});
