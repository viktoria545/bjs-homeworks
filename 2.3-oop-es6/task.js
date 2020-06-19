//Задача 1;

class Weapon {
    constructor(object) {
        this.name = object.name;
        this.attack = object.attack;
        this.durability = object.durability;
        this.range = object.range;
        this._durability = object.durability;

    }
    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0;
        } else {
            this.durability;
        }

    }
    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability >= (0.3 * this._durability)) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        }
        return true;

    }
};

const arm = new Weapon({
    name: "Рука",
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: "Лук",
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({
    name: "Меч",
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: "Нож",
    attack: 5,
    durability: 300,
    range: 1,
});

const staff = new Weapon({
    name: "Посох",
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: "Длинный лук",
    attack: 15,
    durability: 200,
    range: 4,
});

const axe = new Weapon({
    name: "Секира",
    attack: 27,
    durability: 800,
    range: 1,
});

const stormStaff = new Weapon({
    name: "Посох Бури",
    attack: 10,
    durability: 300,
    range: 3,
});


// Задача 2;

class Arm extends Weapon {
    constructor() {
        super({ name: "Рука", attack: 1, durability: Infinity, range: 1, })
    }
};

class Bow extends Weapon {
    constructor() {
        super({ name: "Лук", attack: 10, durability: 200, range: 3, })
    }
};

class Sword extends Weapon {
    constructor() {
        super({ name: "Меч", attack: 25, durability: 500, range: 1, })
    }
};

class Knife extends Weapon {
    constructor() {
        super({ name: "Нож", attack: 5, durability: 300, range: 1, })
    }
};

class Staff extends Weapon {
    constructor() {
        super({ name: "Посох", attack: 8, durability: 300, range: 2, })
    }
};


class LongBow extends Bow {
    constructor(name, attack, range, ) {
        super();
        this.name = "Длинный лук";
        this.attack = 15;
        this.range = 4;
    }
};

class Axe extends Sword {
    constructor(name, attack, durability) {
        super();
        this.name = "Секира";
        this.attack = 27;
        this.durability = 800;
    }
};

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = "Посох Бури";
        this.attack = 10;
        this.range = 3;
    }
};

//Задача 3;
class StudentLog {
    constructor(name) {
        this.name = name;
        this.book = {};
    }

    getName() {
        return this.name;
    }



    addGrade(grade, subject) {
         if (this.book[subject] === undefined) {
            this.book[subject] = [];
        } if ((typeof grade !== "number") || grade < 1 || grade > 5) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету  ${subject}. Допускаются только числа от 1 до 5.`);
        } else { console.log(this.book);
           this.book[subject].push(grade);
        }
        return this.book[subject].length;

    }

    getAverageBySubject(subject) {
        if (this.book[subject] === undefined) {
            return 0;
        }
        let sum = 0;

        let subLength = this.book[subject].length;
        for (let i = 0; i < subLength; i++) {
            sum += this.book[subject][i];
        }
        return sum / subLength;
    }

    getTotalAverage() {
        let averageRating = Object.keys(this.book).length;

        if (averageRating === 0) {
            return 0;
        }
        let sum = 0;
        for (let point in this.book) {
            sum += this.getAverageBySubject(point);
        }

        let rating = sum / averageRating;
        return rating;
    }

}

const log = new StudentLog('Олег Никифоров');
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
console.log(log.getTotalAverage()); 






