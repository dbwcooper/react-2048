import { notification } from 'antd';
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
    *e_login({ payload : person }, { call, put}) { // eslint-disable-line
        // 调用用户登陆的接口
      const result = yield personService.login(person);
      if (result.code === 200) {
        // 将token 放入cookie中 保存用户名和id 至localStorage

        notification.success({
          message: '消息通知',
          description: `${result.msg}`,
        });
      } else {
        // 注册失败
        notification.error({
          message: '消息通知',
          description: `登录失败! ${result.msg}`,
        });
      }
      yield put({ type: 'r_Login' });
    },
    // 用户注册
    *e_register({ payload: person }, { put }) {
      const result = yield personService.register(person);
      if (result.code === '200') {
        // 注册成功
        notification.success({
          message: '消息通知',
          description: '恭喜你, 注册成功!',
        });
      } else {
        // 注册失败
        notification.error({
          message: '消息通知',
          description: `注册失败! ${result.msg}`,
        });
      }
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

