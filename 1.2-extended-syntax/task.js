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
function getAverageMark(marks){
   // код для задачи №2 писать здесь
  let  averageMark = 0;
    if (marks.length === 0) {
    	return 0;
    } else if (marks.length > 5){
    	console.log("количество оценок больше 5");
    	marks = marks.splice(0, 5);
    } 
    let sum = 0;
    for (let i = 0; i < marks.length; i++){
    	sum += marks[i];
      }
      let average = sum / marks.length;
    return average;
    // return averageMark;
 }

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}


  
