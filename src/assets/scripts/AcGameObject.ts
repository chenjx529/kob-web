const AC_GAME_OBJECTS: AcGameObject[] = [];

// 游戏基类，每一个需要画的图像都要继承它
// 最重要的一步是requestAnimationFrame(step)，循环画帧

export class AcGameObject {
  timedelta: number;
  has_called_start: boolean;

  constructor() {
    AC_GAME_OBJECTS.push(this);
    this.timedelta = 0;
    this.has_called_start = false;
  }

  // 只执行一次
  start() {}

  // 每一帧执行一次，除了第一帧之外
  update() {}

  // 删除之前执行
  on_destroy() {}

  destroy() {
    this.on_destroy();
    for (const i in AC_GAME_OBJECTS) {
      const obj = AC_GAME_OBJECTS[i];
      if (obj === this) {
        AC_GAME_OBJECTS.splice(Number(i));
        break;
      }
    }
  }
}

let last_timestamp: number; // 上一次执行的时刻
const step = (timestamp: number) => {
  for (const obj of AC_GAME_OBJECTS) {
    if (!obj.has_called_start) {
      obj.has_called_start = true;
      obj.start(); // 第一帧实现start函数
    } else {
      obj.timedelta = timestamp - last_timestamp;
      obj.update(); // 以后的每一帧都执行update
    }
  }

  last_timestamp = timestamp;
  requestAnimationFrame(step);
};

requestAnimationFrame(step);
