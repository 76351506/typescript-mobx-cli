/*
 * @Author: heinan
 * @Date: 2020-01-07 08:44:21
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-09 10:00:54
 */

import { observable, action, runInAction } from 'mobx';
import { userLogin } from '@/api/user';

class user {
  @observable title = 'user';
  @observable token = '';

  @action.bound
  async _userLogin() {
    const result = await userLogin();
    console.log(result);
    runInAction(() => {
      this.token = result.data.token;
    });
  }
}

export default new user();
