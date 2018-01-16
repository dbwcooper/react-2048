export default {
  namespace: 'game',
  state: {
    emptySquares: [],
    squares: [],
    bestScore: 0,
    score: 0,
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
      let score = state.score;

      for (let i = 0; i < 4; i++) { // eslint-disable-line
        for (let j = 1; j < 4; j++) { // eslint-disable-line
          if (squares[i][j].num !== 0 && upMove(i, j, squares)) { // 值不为0且可移动
            const afterMove = upMove(i, j, squares);
            score += afterMove.score;
            const mySquares = merge({ i, j }, afterMove, squares, emptySquares);// 合并
            squares = mySquares.squares;
            emptySquares = mySquares.emptySquares;
          }
        }
      }

      return { ...state, ...newSquare(emptySquares, squares), score };
    },
    r_MoveDown(state) {
      let squares = [...state.squares];
      let emptySquares = [...state.emptySquares];
      let score = state.score;

      for (let i = 0; i < 4; i++) { // eslint-disable-line
        for (let j = 3; j >= 0; j--) { // eslint-disable-line
          if (squares[i][j].num !== 0 && downMove(i, j, squares)) { // 值不为0且可移动
            const afterMove = downMove(i, j, squares);
            score += afterMove.score;
            const mySquares = merge({ i, j }, downMove(i, j, squares), squares, emptySquares);// 合并
            squares = mySquares.squares;
            emptySquares = mySquares.emptySquares;
          }
        }
      }
      return { ...state, ...newSquare(emptySquares, squares), score };
    },
    r_MoveLeft(state) {
      let squares = [...state.squares];
      let emptySquares = [...state.emptySquares];
      let score = state.score;

      for (let i = 1; i < 4; i++) { // eslint-disable-line
        for (let j = 0; j < 4; j++) { // eslint-disable-line
          if (squares[i][j].num !== 0 && leftMove(i, j, squares)) { // 值不为0且可移动
            const afterMove = leftMove(i, j, squares);
            score += afterMove.score;
            const mySquares = merge({ i, j }, leftMove(i, j, squares), squares, emptySquares);// 合并
            squares = mySquares.squares;
            emptySquares = mySquares.emptySquares;
          }
        }
      }

      return { ...state, ...newSquare(emptySquares, squares), score };
    },
    r_MoveRight(state) {
      let squares = [...state.squares];
      let emptySquares = [...state.emptySquares];
      let score = parseInt(state.score); // eslint-disable-line

      for (let i = 3; i >= 0; i--) { // eslint-disable-line
        for (let j = 0; j < 4; j++) { // eslint-disable-line
          if (squares[i][j].num !== 0 && rightMove(i, j, squares)) { // 值不为0且可移动
            const afterMove = leftMove(i, j, squares);
            score += afterMove.score;
            const mySquares = merge({ i, j }, rightMove(i, j, squares), squares, emptySquares);// 合并
            squares = mySquares.squares;
            emptySquares = mySquares.emptySquares;
          }
        }
      }

      return { ...state, ...newSquare(emptySquares, squares), score };
    },
  },

};


/**
 * 向上移动
 * @param {* 横坐标} i
 * @param {* 纵坐标} j
 * @param {* 显示的方块数组} mySquares
 */
let upMove = (i, j, squares) => {
  let num = squares[i][j].num;
  let moveJ = j; // 上下移动只改变 j
  for (let n = j - 1; n >= 0; n--) { // eslint-disable-line
    if (squares[i][n].num === 0) {
      moveJ = n;
    } else if (squares[i][n].num === num) {
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
  // 判断分数
  let score = 0;
  if (num === squares[i][j].num) {
    score = num;
  }
  return { moveI: i, moveJ, num, score };
};

/**
 * 向下移动
 * @param {* 横坐标} i
 * @param {* 纵坐标} j
 * @param {* 显示的方块数组} mySquares
 */
const downMove = (i, j, squares) => {
  let num = squares[i][j].num;
  let moveJ = j; // 上下移动只改变 j
  for (let n = j + 1; n < 4; n++) { // eslint-disable-line
    if (squares[i][n].num === 0) {
      moveJ = n;
    } else if (squares[i][n].num === num) {
      num *= 2;
      moveJ = n;
      if (num === 2048) {
        console.log('游戏结束');
      }
      break;
    } else {
      break;
    }
  }
  if (moveJ === j) {
    return false;
  }
  if (!(i + 1) || !(moveJ + 1)) {
    return;
  }
  // 判断分数
  let score = 0;
  if (num === squares[i][j].num) {
    score = num;
  }
  return { moveI: i, moveJ, num, score };
};


const leftMove = (i, j, squares) => {
  let num = squares[i][j].num;
  let moveI = i; // 左右移动只改变 i
  for (let n = i - 1; n >= 0; n--) { // eslint-disable-line
    if (squares[n][j].num === 0) {
      moveI = n;
    } else if (squares[n][j].num === num) {
      num *= 2;
      moveI = n;
      if (num === 2048) {
        console.log('游戏结束');
      }
      break;
    } else {
      break;
    }
  }
  if (moveI === i) {
    return false;
  }
  if (!(j + 1) || !(moveI + 1)) {
    return false;
  }
  // 判断分数
  let score = 0;
  if (num === squares[i][j].num) {
    score = num;
  }
  return { moveI, moveJ: j, num, score };
};

const rightMove = (i, j, squares) => {
  let num = squares[i][j].num;
  let moveI = i; // 左右移动只改变 i
  for (let n = i + 1; n < 4 ; n++) { // eslint-disable-line
    if (squares[n][j].num === 0) {
      moveI = n;
    } else if (squares[n][j].num === num) {
      num *= 2;
      moveI = n;
      if (num === 2048) {
        console.log('游戏结束');
      }
      break;
    } else {
      break;
    }
  }
  if (moveI === i) {
    return false;
  }
  if (!(j + 1) || !(moveI + 1)) {
    return false;
  }
  // 判断分数
  let score = 0;
  if (num === squares[i][j].num) {
    score = num;
  }
  return { moveI, moveJ: j, num, score };
};


/**
 * 合并两个方块 并更改对应的空白数组和显示方块的数组
 * @param {* 方块移动前的位置} beforeMove
 * @param {* 方块移动后的位置 以及移动后的数字大小} afterMove
 * @param {* 整个显示方块的数组} squares
 * @param {* 空白方块数组} emptySquares
 */
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

/**
 * 从空白方块数组中随机找一个出来 这里返回空白数组中的位置 和对应的index
 * @param {*} emptySquares
 */
const randomPos = (emptySquares) => {
  const index = Math.floor(Math.random() * emptySquares.length);
  const x = emptySquares[index].x;
  const y = emptySquares[index].y;
  return { x, y, index };
};
