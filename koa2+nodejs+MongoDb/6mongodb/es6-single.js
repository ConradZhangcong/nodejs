class Database {
    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return Database.instance
    }

    constructor() {
        console.log('实例化触发构造函数');
        this.connect();
    }

    connect() {
        console.log('连接数据库');
    }

    find() {
        console.log('查询数据库');
    }
}

let db1 = Database.getInstance();
db1.find();

let db2 = Database.getInstance();
db2.find();
