import { notification } from 'antd';

// success , info, warning, error, open
const openNotification = (type, msg) => {
  notification[type]({
    message: '消息通知',
    description: msg,
  });
};
/**
 * @param name
 * @param value
 * @param {cookie 保存的天数} day
 */
const setCookie = (name, value, day) => {
  // 默认cookie 存储7天
  const exp = new Date().getTime();
  exp.setTime(exp.getTime() + (day || 7) * 24 * 60 * 60 * 1000); // eslint-disable
  document.cookie = `${name}=${decodeURIComponent(value)};expires=${exp.toGMTString()}`;
};
export {
    openNotification,
  setCookie,
};

