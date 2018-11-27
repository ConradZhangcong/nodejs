class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() {
        console.log(this._name);
    }

    setName(name) {
        this._name = name;
    }

    getInfo() {
        console.log(`姓名:${this._name}, 年龄:${this._age}`);
    }

    run() {
        console.log('run');
    }
}

let p = new Person('张三1', 20);
// p.getName();
// p.setName('李四');
// p.getName();

class Web extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }

    print() {
        console.log(this.sex)
    }
}


let w = new Web('conrad', 22, '男');
w.getInfo();
w.run();
w.print();

