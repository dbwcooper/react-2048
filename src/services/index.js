import request from '../utils/request';

const API = 'http://localhost:8888/api/';

/**
 * 注册一个用户
 * @param {*用户信息} user
 */
export function register(user) {
  return request(`${API}user/register`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
}

/**
 * 用户登录
 * @param {*用户信息} user
 */
export function login(user) {
  return request(`${API}user/signin`, {
    method: 'POST',
    body: JSON.stringify(user),
  });
}

/**
 * 获取用户信息
 * @param {*用户id} userId
 */
export function fetch(userId) {
  return request(`api/user/${userId}`, {
    method: 'GET',
  });
}

/**
 * 更新用户信息
 * @param {*用户信息} user
 */
export function patch(user) {
  return request(`api/user/${user.userId}`, {
    method: 'PUT',
  });
}

/**
 * 获取所有的评论
 */
export function getComments() {
  return request(`${API}comments`, {
    method: 'GET',
  });
}

/**
 * 增加一条评论
 * @param {*用户id} userId
 * @param {*评论内容对象} comment
 */
export function addComment(username, comment) {
  return request(`${API}comment`, {
    method: 'POST',
    body: JSON.stringify({ ...comment, username }),
  });
}
