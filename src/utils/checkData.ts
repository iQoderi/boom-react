/**
 * Created by qoder on 16-12-14.
 */
declare const require: any;
const Promise = require('es6-promise');

const checkData = (data)=> {
  return new Promise((resolve, reject)=> {
    for (let item in data) {
      let myData = data[item];
      if (!myData.value && myData.value !== 0) {
        reject(`${myData.name}不能为空`);
        return false;
      } else {
        if (!myData.value.match(myData.regex)) {
          reject(`${myData.name}格式不合法`);
          return false;
        }
      }
    }
    resolve(data);
    return true;
  })
}

export default checkData;
