/**
 * Created by qoder on 16-12-14.
 */
let codeMaps = {
  "-1": "未知错误",
  "10000": "参数或者方法错误",
  "10001": "用户名或者密码错误",
  "10002": "用户账户没有激活",
  "10003": "用户已经存在",
  "10004": "邮件发送失败",
  "10005": "用户不存在",
  "10006": "用户已经激活账户",
  "10007": "登录过期",
  "10008": "token错误或者过期",
  "10009": "旧密码错误",
  "10010": "修改密码失败",
  "10011": "用户没有权限"
}


const codeHandler = (code: number, callback: (tips: string)=>void)=> {
  if (!codeMaps[code]) {
    code = -1;
  }
  callback(`${codeMaps[code]}(${code})`);
}

export default codeHandler;
