/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-06-10 19:09:40
 * @LastEditTime: 2019-06-10 19:16:53
 * @LastEditors: 靳肖健
 */
const Koa = require('koa');
const app = new Koa();
let word = `
<h1>Hello!</h1>
<img src='http://jxjweb.top/fenhuan.jpg' width='100px'>
`
const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = word;
};
app.use(main);
app.listen(3001);