/*
 * @Author: heinan
 * @Date: 2020-10-13 08:21:31
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-13 08:25:05
 */

import { action, observable } from 'mobx';

class App {
  @observable title = 'app';
  @observable count = 0;

  @action.bound
  add() {
    this.count++;
  }
}

export default new App();
