
import * as personService from '../services/person';

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
    *e_submit({ payload : person }, { call, put}) { // eslint-disable-line
      console.log(person);
      // if (person.isRegister) {
      //   // 调用用户注册的接口
      //   await personService.register(person);
      // } else {
      //   // 调用用户登陆的接口
      //   await personService.login(person);
      // }
      yield put({ type: 'r_Login' });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    r_Login(state) {
      return { ...state, isLogin: !state.isLogin };
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
    // 判断用户登录状态
    r_updateLogin(state) {
      return { ...state, isLogin: !state.isLogin };
    },
  },
};

