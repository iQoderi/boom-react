/**
 *
 * Created by qoder on 16-12-13.
 */
declare const require: any;
import {observable, computed, action, autorun, reaction} from 'mobx';
import UIStore from './uiStore';
import API from '../api';
import fetch from 'isomorphic-fetch';

interface LoginBody {
  email: string,
  password: string
}
class AuthStore {
  public login: ()=>{
    fetch(API.auth.login)
  }
}

export default AuthStore;
