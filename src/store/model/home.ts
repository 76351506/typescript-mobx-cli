/*
 * @Author: heinan
 * @Date: 2020-01-07 08:44:21
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-09 10:00:59
 */
import { observable, flow } from 'mobx';
import { getCarouselList } from '@/api/home';

class Home {
  @observable title = 'home';
  @observable carouselList = [];

  _getCarouselList = flow(function*() {
    const result = yield getCarouselList();
    home.carouselList = result.data.data;
  });
}
const home = new Home();
export default home;
