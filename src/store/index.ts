/*
 * @Author: heinan
 * @Date: 2020-01-06 09:50:20
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-09 10:11:42
 */

// @ts-nocheck
const context: any = require['context']('./model', false, /\.ts$/);
const getModel: Array = context.keys().map(key => context(key));
const Store = {};

getModel.forEach(model => {
  Store[model.default.title] = model.default;
});

export default Store;
