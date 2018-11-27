const MongoClient = require('mongodb').MongoClient;
const MongoUrl = 'mongodb://localhost:27017/';
const dbName = 'koa';
const client = new MongoClient(MongoUrl);

console.time('start');
client.connect((err) => {
    if (err) {
        console.log(err);
        return false;
    }
    const db = client.db(dbName);

    /**
     * 新增数据
     */
    /*db.collection('user').insertOne({
        'username': 'conrad',
        'age': 22,
        'sex': '男',
        'status': 1
    }, (err, result) => {
        if (!err) {
            console.log('增加数据成功!');
            client.close();
            console.timeEnd('start');
        }
    })*/

    const result = db.collection('user').find({});

    result.toArray((err, docs) => {
        console.log(docs);
        console.timeEnd('start');
    })
});
