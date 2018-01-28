import request from '../utils/request';

/**
 * 注册一个用户
 * @param {*用户信息} user
 */
export function register(user) {
  return request('api/user', {
    method: 'POST',
    body: JSON.stringify(user),
  });
}

/**
 * 用户登录
 * @param {*用户信息} user
 */
export function login(user) {
  return request(`api/user?userName=${user.userName}&password=${user.password}`, {
    method: 'GET',
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
