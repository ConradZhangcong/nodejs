# mongoDB

> 启动数据库

```
mongod --dbpath d:\mongodb
```

> 连接数据库

```
mongo 127.0.0.1:27017
```

> 查看数据库

```
show dbs
```

> 创建数据库(插入成功则创建成功) 使用数据库

```
use test
查看表(collections) show collections
```

> 增

```
插入数据 db.collection.insert({"name":"zhangsan","age":20})
```

> 查

```
查找所有数据 db.collection.find()
按条件查找数据 db.collection.find({key: value})
value = {$gt: xxx}; gt大于 lt小于 gte大于等于 lte小于等于
/value/ 模糊查询
/^value/ 以value开头的
$or:[{key: xx},{key: yy}] 或者
{}, {name:1} 指定列查询
排序 db.collection.find().sort("age":1) 1升序 -1降序
查询前五条 db.collection.find().skip(0).limit(5)
查询5-10条 db.collection.find().skip(5).limit(5)
查询第一条 db.collection.findOne()
统计数量 db.collection.find().count()
```

> 删

```
删除表(collections) db.collection.drop()
删除当前数据库 db.dropDatabase()
删除数据 db.collection.remove({key:value})
```

> 改

```
修改单条 db.collection.update({key:value},{$set:{key:value}})
(不加$set:表示完全替换)
修改多条 db.collection.update({key:value},{$set:{key:value}},{multi:true})
```
