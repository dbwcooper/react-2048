export default {
  namespace: 'game',
  state: {
    emptySquares: [],
    squares: [],
    bestScore: '0',
    score: '0',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line 
      dispatch({ type: 'save' });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *e_MoveUp({ payload }, { put }) {
      // effect 中拿到的state 是全局state
      yield put({ type: 'r_MoveUp' });
    },
  },

  reducers: {
    save(state) {
      const empty = [];
      const squares = new Array(4);
      // 初始化空白坐标的数组
      for (let i = 0; i < 4; i++) { // eslint-disable-line
        squares[i] = []; // 必须要这样做定义一行为一个空数组对象
        for (let j = 0; j < 4; j++) { // eslint-disable-line
          squares[i][j] = { num: 0 };
          empty.push({ x: i, y: j });
        }
      }
      return { ...state, ...newSquare(empty, squares) };
    },
    r_MoveUp(state) {
      let squares = [...state.squares];
      let emptySquares = [...state.emptySquares];
      for (let i = 0; i < 4; i++) { // eslint-disable-line
        for (let j = 1; j < 4; j++) { // eslint-disable-line
          if (squares[i][j].num !== 0 && upMove(i, j, squares)) { // 值不为0且可移动
            const mySquares = merge({ i, j }, upMove(i, j, squares), squares, emptySquares);// 合并
            squares = mySquares.squares;
            emptySquares = mySquares.emptySquares;
          }
        }
      }
      return { ...state, ...newSquare(emptySquares, squares) };
    },
    r_MoveDown(state) {
      return state;
    },
    r_MoveLeft(state) {
      return state;
    },
    r_MoveRight(state) {
      return state;
    },
    r_Merge(state) {
      return state;
    },
    r_newSquare(state) {
      return { ...state, ...newSquare(state.emptySquares, state.squares) };
    },
  },

};

/**
 *
 * @param {* 空白数组方块} emptySquares
 * @param {* 显示数组方块} squares
 */
const newSquare = (emptySquares, squares) => {
  const { x, y, index } = randomPos(emptySquares); // 拿到坐标和当前随机生成的方块的位置
  const num = Math.random() < 0.9 ? 2 : 4;// 随机新方块数值2或4
  squares[x][y] = { num }; // eslint-disable-line
  emptySquares.splice(index, 1);
  return { emptySquares, squares };
};

// 从空白方块数组中随机找一个出来 这里返回空白数组中的位置index
const randomPos = (emptySquares) => {
  const index = Math.floor(Math.random() * emptySquares.length);
  const x = emptySquares[index].x;
  const y = emptySquares[index].y;
  return { x, y, index };
};

// 上移 根据传入方块的位置 返回方块移动之后的位置
let upMove = (i, j, mySquares) => {
  let num = mySquares[i][j].num;
  let moveJ = j; // 上下移动只改变 j
  for (let n = j - 1; n >= 0; n--) { // eslint-disable-line
    if (mySquares[i][n].num === 0) {
      moveJ = n;
    } else if (mySquares[i][n].num === num) {
      moveJ = n;
      num *= 2;
      if (num === 2048) {
        console.log('你赢了');
      }
      // this.getScore(num)
      break;
    } else {
      break;
    }
  }
  // 如果传入坐标与计算后的坐标一致 就返回false

  if (moveJ === j) {
    return false;
  }
  if (!(i + 1) || !(moveJ + 1)) {
    return;
  }
  return { moveI: i, moveJ, num };
};

// 更改空白数组 和 显示数组
let merge = (beforeMove, afterMove, squares, emptySquares) => {
  squares[beforeMove.i][beforeMove.j].num = 0; // eslint-disable-line
  squares[afterMove.moveI][afterMove.moveJ].num = afterMove.num; // eslint-disable-line
  emptySquares.push({ x: beforeMove.i, y: beforeMove.j });
  emptySquares.forEach((element, index) => {
    if (element.x === afterMove.moveI && element.y === afterMove.moveJ) {
      emptySquares.splice(index, 1);
    }
  });
  return { squares, emptySquares };
};
