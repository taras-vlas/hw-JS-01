'use strict';    //strogy rezhim
const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid;// Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

console.log(totalPrice);

// Write code under this line,     if (orderPieces == null) {
  if (orderPieces === null) {
  message = 'Отменено пользователем!';

} else if (balanceCredit >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
  console.log(totalPrice);
  console.log(balanceCredit);   
} else if (totalPrice > balanceCredit) {
  message = 'Недостаточно средств на счету!';
  console.log(totalPrice);
  console.log(balanceCredit);   
}
  
console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

