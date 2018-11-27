class Person {
    constructor(name) {
        this._name = name;
    }

    /**
     * 实例方法
     */
    run() {
        console.log(this._name);
    }

    /**
     * 静态方法
     */
    static work() {
        console.log('这是es6的静态方法');
    }
}

Person.instance = '这是一个静态方法的属性';


let p = new Person('张三');
p.run();

Person.work();
console.log(Person.instance);
