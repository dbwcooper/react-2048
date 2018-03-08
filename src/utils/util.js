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
  const exp = new Date();
  exp.setTime(exp.getTime() + (day || 7) * 24 * 60 * 60 * 1000); // eslint-disable
  document.cookie = `${name}=${decodeURIComponent(value)};expires=${exp.toGMTString()}`;
};

function getCookie(cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(`${cName}=`);
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(';', cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return '';
}
export {
    openNotification,
  setCookie,
  getCookie,
};

