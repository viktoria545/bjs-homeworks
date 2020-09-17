function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    //sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}


function compareArrays(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false;
    }
    return arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {
    let memory = [];
    return function(...args) {
        let itemSearch = memory.find(item => compareArrays(item.args, args));
        if (itemSearch) {
            return itemSearch.result;
        }
        memory.push({ args: args, result: fn(...args) });
        if (memory.lenght > limit) {
            memory.shift();
        }
        return fn(...args);

    };

}

function testCase(testFunction, timer) {
    const arr = [
        [1, 2, 3],
        [1, 2],
        [1, 2, 3],
        [1, 2],
        [9, 5, 2, 4]
    ];
    console.time(timer);
    for (i = 0; i < 100; i++) {
        arr.forEach(item => testFunction(...item));
    }
    console.timeEnd(timer);
}
testCase(sum, 'timer');
testCase(memorize(sum, 7), 'timerMemorize');
//timer: 4.999755859375 ms;
//timerMemorize: 10 ms;
//timer: 20 ms
//timerMemorize: 20 ms
//timer: 0 ms
//timerMemorize: 10 ms;