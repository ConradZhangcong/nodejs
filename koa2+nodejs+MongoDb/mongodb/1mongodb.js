const http = require('http');
const url = require('url');
const ejs = require('ejs');
const assert = require('assert');
const app = require('./model/express_router');

const MongoClient = require('mongodb').MongoClient;
const MonogoUrl = 'mongodb://localhost:27017'; //数据库地址
const dbName = 'learn'; //数据库名字

http.createServer(app).listen(8520);
app.get('/', (req, res) => {
    let msg = '这是数据库的数据';
    ejs.renderFile('views/index.ejs', {
        msg: msg
    }, (err, data) => {
        res.send(data);
    });
});

app.get('/add', (req, res) => {
    const client = new MongoClient(MonogoUrl);
    client.connect((err) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        db.collection('user').insertOne({
            "name": "nodejs",
            "age": 28
        }, (err, result) => {
            assert.equal(err, null);
            console.log("Inserted one document into the collection");
        });
        client.close();
    });
});

app.get('/edit', (req, res) => {
    const client = new MongoClient(MonogoUrl);
    client.connect((err) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        db.collection('user').updateOne({"name": "zmt"}
            , {$set: {"age": 20}}, (err, result) => {
                assert.equal(err, null);
                console.log("Update one document Successful");
            });
        client.close();
    });
});

app.get('/delete', (req, res) => {
    // 获取参数
    const query = url.parse(req.url, true).query;
    const name = query.name;

    const client = new MongoClient(MonogoUrl);
    client.connect((err) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);

        db.collection('user').deleteOne({
            "name": name
        }, (err, result) => {
            assert.equal(err, null);
            console.log("Delete one document Successful");
        });
        client.close();
    });
});
