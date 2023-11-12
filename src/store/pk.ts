import { defineStore } from 'pinia';

// defineStore 第一个参数是id，必需且值唯一
export const usePkStore = defineStore('pk', {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      pkInfo: {
        status: 'matching', // matching表示匹配界面，playing表示对战界面
        socket: null,
        opponent_username: '',
        opponent_photo: '',
        gamemap: null, // 服务器创建地图，保证对战双方的地图是一样的
        a_id: 0,
        a_sx: 0,
        a_sy: 0,
        b_id: 0,
        b_sx: 0,
        b_sy: 0,
        gameObject: null,
        loser: 'none', // none、all、A、B
      },
    };
  },
  getters: {},
  actions: {
    updateSocket(socket: any) {
      this.pkInfo.socket = socket;
    },
    updateOpponent(opponent: any) {
      this.pkInfo.opponent_username = opponent.username;
      this.pkInfo.opponent_photo = opponent.photo;
    },
    updateStatus(status: any) {
      this.pkInfo.status = status;
    },
    updateGame(game: any) {
      this.pkInfo.gamemap = game.map;
      this.pkInfo.a_id = game.a_id;
      this.pkInfo.a_sx = game.a_sx;
      this.pkInfo.a_sy = game.a_sy;
      this.pkInfo.b_id = game.b_id;
      this.pkInfo.b_sx = game.b_sx;
      this.pkInfo.b_sy = game.b_sy;
    },
    updateGameObject(gameObject: any) {
      this.pkInfo.gameObject = gameObject;
    },
    updateLoser(loser: any) {
      this.pkInfo.loser = loser;
    },
  },
});
