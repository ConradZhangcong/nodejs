/**
 * es5
 * @param name
 * @param age
 * @constructor
 */

/*// 实例方法
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(`${this.name}---${this.age}`);
    }
}

// 原型链上的属性和方法
Person.prototype.sex = '男';
Person.prototype.work = function () {
    console.log(`${this.name}---${this.age}---${this.sex}`);
};

// 静态方法
Person.setName = function () {
    console.log('静态方法');
};

let p = new Person('zhangsan', '20');
p.run();
p.work();

Person.setName();*/

//es5中的继承
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        console.log(`${this.name}---${this.age}`);
    }
}

Person.prototype.sex = '男';
Person.prototype.work = function () {
    console.log(`${this.name}---${this.age}---${this.sex}`);
};

/**
 * 对象冒充继承
 * 对象冒充无法继承原型链上的属性和方法
 */

/*function Web(name, age) {
    Person.call(this, name, age);
}*/


/**
 * 原型链继承
 * 无法向父类传参
 */

/*function Web(name, age) {

}

Web.prototype = new Person();*/

/**
 * 原型链结合对象冒充实现继承
 */

function Web(name, age) {
    Person.call(this, name, age);
}

Web.prototype = new Person();

let w = new Web('李四', 20);
w.run();
console.log(w.sex);
w.work();
