function getAnimalSound(animal) {
    let sound = animal;
    // код для задачи №1 писать здесь
    if (animal === undefined) {
        return null;
    } else {
        return animal.sound;
    }
}

function getAverageMark(marks) {

    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];

    }
    let average = Math.round(sum / marks.length);

    let roundedAverage = average;
    return roundedAverage;
}



function checkBirthday(birthday) {
    let now = Number(new Date());
    birthday = Number(new Date(birthday));
    let diff = now - birthday;
    let milliseconds = 365.25 * 24 * 60 * 60 * 1000;
    let age = diff / milliseconds;
    return age >= 18;
}