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
    const client = new MongoClient(MonogoUrl);

    client.connect((err) => {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        db.collection('user').find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            ejs.renderFile('views/index.ejs', {
                list: docs
            }, (err, data) => {
                res.end(data);
            })
        });

        client.close();
    });
});
