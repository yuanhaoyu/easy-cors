const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');

const app = new Koa();
const router = new Router();

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000, () => {
    console.log('app is on server');
})

// router-set

router.get('/imgtest', async (ctx, next) => {
    await axios.get('https://image.baidu.com/channel/listjson?pn=0&rn=10&tag1=%E7%BE%8E%E5%A5%B3&tag2=%E5%85%A8%E9%83%A8&ie=utf8')
    .then(res => {
        ctx.body = res.data;
    })
})