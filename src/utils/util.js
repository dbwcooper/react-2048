import { notification } from 'antd';

// success , info, warning, error, open
const openNotification = (type, msg) => {
  notification[type]({
    message: '消息通知',
    description: msg,
  });
};

export {
    openNotification,
};

