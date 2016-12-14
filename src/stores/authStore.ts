/**
 *
 * Created by qoder on 16-12-13.
 */

declare const require: any;
import {observable, computed, action, autorun, reaction} from 'mobx';
import UIStore from './uiStore';
import API from '../api';
import * as fetch from 'isomorphic-fetch';

console.log(fetch, 'called');
console.log(API.auth);
interface LoginBody {
  email: string,
  password: string
}

class AuthStore {
  @action
  public login() {
    fetch(API.auth.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        email: '841599872@qq.com',
        password: '123456'
      })
    }).then((res)=>{
      return res.json();
    }).then((json)=>{
      console.log(json);
    })
  }
}

export default AuthStore;
