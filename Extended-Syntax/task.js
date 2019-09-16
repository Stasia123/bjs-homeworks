"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
  let D = b**2 - 4 * a * c;
  let x;
  if (D > 0) {
      alert(`Два корня, т.к. Д =  ${D}`);
      let x1 = ((-b) - Math.sqrt(D)) / 2 * a;
      let x2 = ((-b) + Math.sqrt(D)) / 2 * a;
      return x = [Math.round(x1),Math.round(x2)];
  } else if (D === 0) {
      alert(`Один корень, т.к. Д =  ${D}`);
      let x1 = ((-b) + Math.sqrt(D)) / 2 * a;
      return x = [Math.round(x1)];
  } else {
      alert(`Корней нет, т.к. Д =  ${D}`);
      return x = [];
  }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
  let sum = 0;
  let averageMark;
  
  if (marks.length > 5) {
    alert(`Значение посчитается для первых пяти оценок`);
    marks = marks.slice(0,5);
  } 

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  averageMark = +(sum / marks.length).toFixed(2);
  return averageMark;
}
getAverageMark(marks);

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let now = new Date().getFullYear();
    let age = now - dateOfBirthday.getFullYear();
    let result = (age >= 18) ? `Не желаете ли олд-фэшн, ${name}?`:
      `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(age);
    return result;
}