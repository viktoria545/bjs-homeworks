'use strict';

function getResult(a, b, c){
    // код для задачи №1 писать здесь
    let x = [];
    let d = b ** 2 - (4 * a * c);
    if (d < 0) {
        return x;
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        x[0] = x1;
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        x[0] = x1;
        x[1] = x2;
        
    }

    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}

  
