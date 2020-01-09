/*
 * @Author: heinan 
 * @Date: 2020-01-07 09:33:50 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-07 10:08:10
 */
import request from '@/utils/request';
import { baseUrl } from '@/config';


export function userLogin() {
  const url = baseUrl + '/user/login'
  return request.post(url, {
    username: "zhiqian",
    password: "123321"
  })
}