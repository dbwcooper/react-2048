import { notification } from 'antd';
import * as Services from '../services';
import { setCookie, getCookie } from '../utils/util';

export default {
  namespace: 'home',
  state: {
    username: '',
    comments: [],
    ranks: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      const person = {};
      person.username = getCookie('username');
      person.userId = getCookie('userId');
      dispatch({ type: 'r_save', person });
      dispatch({ type: 'home/e_getComments' });
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *e_login({ payload : person }, { call, put}) { // eslint-disable-line
        // 调用用户登陆的接口
      const result = yield Services.login(person);
      if (result.code === 200) {
        // userId,username 放入cookie中
        document.cookie = `userId=${result.data.userId}`;
        setCookie('userId', result.data.userId, 7);
        setCookie('username', person.username, 7);
        // 保存用户信息至redux
        yield put({ type: 'r_save', person });

        // 设置localStorage 中的bestScore
        const bestScore = yield localStorage.getItem('bestScore');
        if (bestScore < result.data.score) {
          yield localStorage.setItem('bestScore', result.data.score);
        } else {
          yield localStorage.setItem('bestScore', bestScore);
        }
        yield put({ type: 'game/e_Init', person });
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
    },
    // 用户注册
    *e_register({ payload: person }) {
      const result = yield Services.register(person);
      if (result.code === 200) {
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
    },
    *e_updateComment({ payload: comment }, { select, put }) {
      const { username, comments } = yield select(state => state.home);
      if (username) {
        // 向后台传递数据
        const result = yield Services.addComment(username, comment);
        if (result.code === 200) {
          comments.unshift(comment);
          yield put({ type: 'r_saveComments', comments });
        } else {
          // 注册失败
          notification.error({
            message: '消息通知',
            description: `评论失败! ${result.msg}`,
          });
        }
      } else {
        // 注册失败
        notification.error({
          message: '消息通知',
          description: '评论失败! 请登录',
        });
      }
    },
    *e_getComments({ payload }, { put }) {
      const { code, comments } = yield Services.getComments();
      if (code === 200) {
        yield put({ type: 'r_saveComments', comments });
      } else {
        // 注册失败
        notification.error({
          message: '消息通知',
          description: '系统错误!',
        });
      }
    },
    *e_getRanks({ payload }, { put }) {
      const { code, data } = yield Services.getRanks();
      if (code === 200) {
        yield put({ type: 'r_saveRanks', ranks: data });
      } else {
        // 注册失败
        notification.error({
          message: '消息通知',
          description: '系统错误!',
        });
      }
    },
    *e_loginout({ payload }, { put }) {
      yield put({ type: 'r_loginout' });
      yield put({ type: 'game/r_loginout' });
    },
  },
  reducers: {
    r_save(state, { person }) {
      return { ...state, ...person };
    },
    r_saveComments(state, { comments }) {
      return { ...state, comments: [...comments] };
    },
    r_saveRanks(state, { ranks }) {
      const username = [];
      const scoreList = [];
      ranks.forEach((item) => {
        username.push(item.username);
        scoreList.push(item.score);
      });
      return { ...state, ranks: { username, scoreList } };
    },
    r_loginout(state) {
      return { ...state, username: '' };
    },
  },
};

