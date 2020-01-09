/*
 * @Author: heinan 
 * @Date: 2020-01-07 09:33:50 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-07 09:40:47
 */
import request from '@/utils/request';
import { baseUrl } from '@/config';


export function getCarouselList() {
  const url = baseUrl + '/getCarouselList'
  return request.get(url)
}