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
  },

  reducers: {
    save(state) {
      const empty = [];
      const squares = [];
      // 初始化空白坐标的数组
      for (let i = 0; i < 4; i++) { // eslint-disable-line
        for (let j = 0; j < 4; j++) { // eslint-disable-line
          empty.push({ x: i, y: j });
        }
      }
      return { ...state, ...newSquare(empty, squares) };
    },
    r_MoveUp(state) {
      return state;
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
  },

};

/**
 *
 * @param {* 空白数组方块} emptySquares
 * @param {* 显示数组方块} squares
 */
const newSquare = (emptySquares, squares) => {
  const index = randomPos(emptySquares);
  const num = Math.random() < 0.9 ? 2 : 4;// 随机新方块数值2或4
  const square = {
    num,
    x: emptySquares[index].x,
    y: emptySquares[index].y,
  };// 构造一个新的方块
  squares.push(square); // 将新生成出来的方块装入方块数组
  emptySquares.splice(index, 1);
  return { emptySquares, squares };
};

// 从空白方块数组中随机找一个出来 这里返回空白数组中的位置index
const randomPos = (emptySquares) => {
  return Math.floor(Math.random() * emptySquares.length);
};
