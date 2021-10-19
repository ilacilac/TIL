require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');
const bodyParser = require('koa-bodyparser');
const port = process.env.PORT || 4000;

app.use(bodyParser());

const mongoose = require('mongoose');

router.use('/api', api.routes());



app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('Listening to port %d', port);
});