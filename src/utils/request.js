import fetch from 'dva/fetch';
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options) {
  const Header = {
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const opts = { ...options, ...Header };
  try {
    return await fetch(url, opts).then(res => res.json());
  } catch (error) {
    return { code: 401, msg: error };
  }
}

export default request;
