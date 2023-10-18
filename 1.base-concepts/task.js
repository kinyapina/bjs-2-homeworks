"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let x, y;
  if (d > 0) {
    x = (-b + Math.sqrt(d)) / (2 * a);
    y = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x, y);
  } else if (d === 0) {
    x = -b / (2 * a);
    arr.push(x);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRay = percent / 100 / 12; //процентная ставка (P)
  let loanBody = amount - contribution; //тело кредита (S)
  let monthlyPayment = loanBody * (interestRay + (interestRay / (Math.pow((1 + interestRay), countMonths) - 1))); //ежемесячная оплата
  let creditSum = +(monthlyPayment * countMonths); //общая сумма кредита
  return (Number(creditSum.toFixed(2)));
}