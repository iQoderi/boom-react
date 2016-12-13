/**
 * Created by qoder on 16-12-13.
 */
import {observable, action, reaction, computed, useStrict} from 'mobx';

useStrict(true);

interface Tip {
  show: boolean,
  content: string
}

class UIStore {
  @observable public isLoading: boolean = false;
  @observable public tip: Tip = {
    show: false,
    content: "我是提示"
  };
  private timer;

  @action
  public showLoading(): void {
    this.isLoading = true;
  }

  @action
  public hideLoading(): void {
    this.isLoading = false;
  }

  @action
  public showTip(content) {
    this.tip = {
      show: true,
      content
    };
  }

  @action
  public hideTip() {
    this.tip.show = false;
  }

  @action
  public anycHideTip(time: number = 1500) {
    this.timer = setTimeout(()=> {
      this.hideTip();
    }, time)
  }
}

export default new UIStore();
