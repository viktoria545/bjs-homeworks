"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        return `Параметр ${percent} содержит неправильное значение ${percent}`
    }
    if (isNaN(contribution)) {
        return `Параметр ${contribution} содержит неправильное значение ${contribution}`
    }
    if (isNaN(amount)) {
        return `Параметр ${amount} содержит неправильное значение ${amount}`
    }
    if (isNaN(date)) {
        return `Параметр ${date} содержит неправильное значение ${date}`
    }

   const S = amount - contribution;
    date = new Date(date);
    percent = percent / 100;
    const P = percent / 12;
    const n = ((date.getFullYear() - new Date().getFullYear()) * 12);
    const totalAmount = parseFloat(((S * (P + P / (((1 + P) ** n) - 1))) *n ).toFixed(2));

    console.log (totalAmount);
     return totalAmount;
}



function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}
