/**
 * Created by qoder on 16-12-4.
 */
'use strict';
import {observable, computed, action} from 'mobx';

export default class UIStore {
  timer = null;
  @observable loading = false;
  @observable tips = false;

  @action showTips() {
    this.tips = true;
  }

  @action closeTips() {
    this.tips = false;
  }

  @action asyncCloseTips(time) {
    clearTimeout(this.timer)
    this.showTips();
    this.timer = setTimeout(()=> {
      this.closeTips();
    }, time)
  }

  @action showLoading() {
    this.loading = true;
  }

  @action closeLoading() {
    this.loading = false;
  }
}
