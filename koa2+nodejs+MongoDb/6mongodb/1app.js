const Koa = require('koa');
const router = require('koa-router')();
const render = require('koa-art-template');
const path = require('path');
const bodyParser = require('koa-bodyparser');

DB = require('./module/db.js');

const app = new Koa();
app.use(bodyParser());

// 配置koa-art-templete模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

router.get('/', async (ctx) => {
    let result = await DB.find('user', {});
    ctx.render('index', {
        list: result
    });
});

router.get('/add', async (ctx) => {
    await ctx.render('add');
});

router.post('/doAdd', async (ctx) => {
    let data = await DB.insert('user', ctx.request.body);
    try {
        if (data.result.ok) ctx.redirect('/');
    } catch (err) {
        console.log(err);
        ctx.redirect('/add');
    }
})

router.get('/edit', async (ctx) => {
    let id = ctx.query.id;
    let data = await DB.find('user', {"_id": DB.getObjectId(id)});
    await ctx.render('edit', {
        detail: data[0]
    });
});

router.post('/doEdit', async (ctx) => {
    let id = ctx.request.body.id;
    let usernname = ctx.request.body.usernname;
    let age = ctx.request.body.age;
    let sex = ctx.request.body.sex;
    let data = await DB.update('user', {
        "_id": DB.getObjectId(id)
    }, {
        usernname, age, sex
    });
    try {
        if (data.result.ok) ctx.redirect('/');
    } catch (err) {
        console.log(err);
        ctx.redirect('/edit?id=' + id);
    }
});

router.get('/delete', async (ctx) => {
    let id = ctx.query.id;
    let data = await DB.remove('user', {"_id": DB.getObjectId(id)});
    if (data.result.ok) ctx.redirect('/');
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8520);
