
export default {
  namespace: 'home',
  state: {
    isLogin: false,
    username: 'duanbowen',
    comments: [{
      name: 'duanbowen',
      time: '',
      content: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? +Refert tamen, quo modo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta?',
      replay: '',
    }],
    commentWrite: {
      name: '',
      replayName: '',
      time: '',
      content: '',
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    r_updateUser(state) {
      return state;
    },
    r_Login(state) {
      return { ...state, isLogin: true };
    },
    // 评论数组
    r_updateComment(state, { payload: comment }) {
      const arrComment = [...state.comments];
      arrComment.unshift(comment);
      return { ...state, comments: arrComment };
    },
    // 更新评论输入框内的值
    r_updateCommentWrite(state, { payload: commentWrite }) {
      return { ...state, commentWrite: { ...state.commentWrite, ...commentWrite } };
    },
  },
};

