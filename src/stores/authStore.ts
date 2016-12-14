/**
 *
 * Created by qoder on 16-12-13.
 */

declare const require: any;
import {computed, action, autorun, reaction} from 'mobx';
import UIStore from './uiStore';
import API from '../api';
import codeHandler from '../utils/codeHandler';
import * as fetch from 'isomorphic-fetch';

interface LoginBody {
  email: string,
  password: string
}

class AuthStore {
  @action
  public login = (body: LoginBody): void=> {
    UIStore.showLoading();
    fetch(API.auth.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(body)
    }).then((res)=> {
      UIStore.hideLoading();
      return res.json();
    }).then((json)=> {
      if (json.code === 0) {
        UIStore.asyncHideTip('登录成功');
      } else {
        codeHandler(json.code, UIStore.asyncHideTip)
      }
    })
  }

  @action
  public register = (body: LoginBody)=> {
    UIStore.showLoading();
    fetch(API.auth.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(body)
    }).then((res)=> {
      return res.json();
    }).then((json)=> {
      if (json.code === 0) {
        UIStore.asyncHideTip('注册成功');
      } else {
        codeHandler(json.code, UIStore.asyncHideTip)
      }
    })
  }
}

export default new AuthStore();
