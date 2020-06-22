'use strict';
// Задача 1
function getSolutions(a, b, c) {

    let D = b ** 2 - (4 * a * c);

    if (D < 0) {
        return { D: D, roots: [] };
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return { D: D, roots: [x1] };
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D: D, roots: [x1, x2] };
    }

}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result. D}`);

    if (result.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]},  X₂ = ${result.roots[1]}`);
    }
}

//Задача 2
function getAverageScore(data) {
    let average = 0;
    let counter = 0;
    for (let prop in data) {
        average += getAverageMark(data[prop]);
        data[prop] = getAverageMark(data[prop]);
        counter++;

    }
    if (counter !== 0) {
        average = average / counter;
    }
    data.average = average;

    return data;

}

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    }
   let  sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];

    }
    return sum / marks.length;
}




//Задача 3
function getPersonData(secretData) {

    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    }
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return `Родриго`;
    } else if (secret === 1) {
        return `Эмильо`;
    }
}