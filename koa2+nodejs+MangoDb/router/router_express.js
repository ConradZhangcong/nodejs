const http = require('http');
const ejs = require('ejs');
const app = require('./model/express_router');

http.createServer(app).listen(8520);
app.get('/', (req, res) => {
    let msg = '这是数据库的数据';
    ejs.renderFile('views/index.ejs', {
        msg: msg
    }, (err, data) => {
        res.send(data);
    });
});
//登录页面
app.get('/login', (req, res) => {
    ejs.renderFile('views/form.ejs', {}, (err, data) => {
        res.send(data);
    });
});
app.post('/dologin', (req, res) => {
    console.log(3);
    res.send("<script>alert('登陆成功');history.back();</script>")
});
app.get('/register', (req, res) => {
    res.send('register');
});
