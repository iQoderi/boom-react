/**
 * Created by qoder on 16/12/12.
 */

const __APIHOST__: string = 'http://api.wall.qoder.cn';

const apiMaker = (path: string): string=> {
  return `${__APIHOST__}/${path}`
}

const API = {
  auth: {
    login: apiMaker('auth/login'),
    register: apiMaker('auth/register')
  }
}

export default API;
