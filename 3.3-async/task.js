'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("error text");
        }

        if (this.alarmCollection.some(element => element.id === id)) {
            return console.error("Будильник с таким id уже существует");
        }

        const clock = { id, time, callback };
        this.alarmCollection.push(clock);
    }



    removeClock(id) { 

        return this.alarmCollection.splice(this.alarmCollection.indexOf(this.alarmCollection.find(element => element.id === id)), 1);

    }


    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {

        function checkClock(buzzer, time) {
            if (time == buzzer.time) {
                return buzzer.callback();
            }
        }
        this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);

    }


    stop() {
        clearInterval(this.timerId);
        this.timerId = null;

    }


    printAlarms() {
        console.log(`Печать всех будильников : ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => console.log(`Будильник № ${element.id} заведен на ${element.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock('21:00', () => console.log('Скоро спать'), 1);

    phoneAlarm.addClock('21:01', () => { console.log('Пора готовиться ко сну!');
        phoneAlarm.removeClock(2) }, 2);

    phoneAlarm.addClock('21:01', () => console.log('Иди умываться!'));

    phoneAlarm.addClock('21:02', () => {
        console.log('Иди спать, завтра рано работать!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.addClock('21:05', () => console.log('Иди спать, завтра рано на работу!'), 1);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
}