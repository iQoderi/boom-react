/**
 * Created by qoder on 16-12-13.
 */
import {observable, computed, action, useStrict} from 'mobx';
import goto from '../utils/goto';

useStrict(true);
class TouchBackStore {
  @observable public startX: number = 0;
  @observable public startY: number = 0;
  @observable public endX: number = 0;
  @observable public endY: number = 0;
  private minX: number = 100;
  private maxY: number = 50;

  @computed
  public get changX() {
    return this.endX - this.startX;
  }

  @computed
  public get changY() {
    return Math.abs(this.endY - this.startY);
  }

  @action
  public handleTouchStart(e: any): void {
    const {clientX, clientY}=e.touches[0];
    this.startX = clientX;
    this.startY = clientY;
  }

  @action
  public handleTouchEnd(e: any, target): void {
    const {clientX, clientY}=e.changedTouches[0];
    this.endX = clientX;
    this.endY = clientY;
    if (this.changX >= this.minX && this.changY < this.maxY) {
      goto(target);
    }
  }
}

export default TouchBackStore;
