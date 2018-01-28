import request from '../utils/request';

/**
 * 获取所有的评论
 */
export function fetch() {
  return request('api/comments', {
    method: 'GET',
  });
}

/**
 * 增加一条评论
 * @param {*用户id} userId
 * @param {*评论内容对象} comment
 */
export function add(userId, comment) {
  return request('api/comment', {
    method: 'POST',
    body: JSON.stringify({ ...comment, userId }),
  });
}

/**
 * 回复评论
 * @param {*用户id} userId
 * @param {*回复用户} replyName
 * @param {*回复评论内容对象} comment
 */
export function replayComment(userId, replyName, comment) {
  return request('api/comment', {
    method: 'POST',
    body: JSON.stringify({ ...comment, userId, replyName }),
  });
}
