const Config = require('./config.js');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

class Db {

    /**
     * 单例
     * 解决多次实例不共享的问题
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new Db();
        }
        return this.instance;
    }

    constructor() {
        this.dbClient = ''; //存放db对象
        this.connect(); // 初始化的时候连接数据库
    }

    /**
     * 连接数据库
     */
    connect() {
        return new Promise((resolve, reject) => {
            if (!this.dbClient) {
                const client = new MongoClient(Config.MongoUrl);
                client.connect((err) => {
                    if (err) {
                        reject(err);
                        return false;
                    } else {
                        const db = client.db(Config.dbName);
                        this.dbClient = db;
                        resolve(this.dbClient);
                    }
                })
            } else {
                resolve(this.dbClient);
            }
        })
    }

    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                let result = db.collection(collectionName).find(json);
                result.toArray((err, docs) => {
                    if (err) {
                        reject(err);
                        return false;
                    }
                    resolve(docs)
                });
            })
        })
    }

    update(collectionName, oldJson, newJson) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).updateOne(oldJson, {
                    $set: newJson
                }, (err, result) => {
                    if (err) {
                        reject(err);
                        return false;
                    } else {
                        resolve(result);
                    }
                })
            })
        })
    }

    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).insertOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                        return false;
                    } else {
                        resolve(result)
                    }
                })
            })
        })
    }

    remove(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).removeOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                        return false;
                    } else {
                        resolve(result)
                    }
                })
            })
        })
    }

    getObjectId(id) {
        return new ObjectId(id)
    }

}

module.exports = Db.getInstance();
