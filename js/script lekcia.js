// Функція calculateTotalPrice рахує і повертає загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна
//  сума покупки - результат множення кількості товарів на ціну одного.

// Оголошена функція calculateTotalPrice (orderedQuantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик calculateTotalPrice(1, 3500) повертає 3500
// Виклик calculateTotalPrice(12, 70) повертає 840
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerItem;

//     // Change code above this line
//     return totalPrice
// console.log(`do`)
// alert(`fdsfds`)

// let posle = prompt(`продовжити підписку`);
// posle = Number (posle);
// console.log(posle);
// console.log(typeof posle);

// //  20.34px
// let element = `20.34px`;
// element = Number.parseFloat(element);
// console.log(element);

// 12334.4234
// let cena = 12334.4234;
// cena = cena.toFixed(1);
// console.log(cena);

// // 28.39847
// let cena = `28.39847px`;
// cena = Number.parseInt(28.39847);
// cena = cena.toFixed(2);
// console.log(cena);

// 3
// 4
// const base = 3
// const state = 4
// const result = Math.pow(base, state);
// // console.log(result);
// const result = (base ** state);
// console.log(result);

// let base = prompt(`Число`);

// let step = prompt(`ступінь`);
// const result = base ** step;
// console.log(result);

// let brend = prompt(`адрес`);
// brend = brend.toLowerCase();
// console.log(brend);

// if (true) {
//     const value = 5;
//     console.log("Block scope: ", value);
//   }

//   if (true) {
//     const value = 5;
//     console.log("Global scope: ", value); // 5
//   }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 10; i >- 0; i += 1) {
//     console.log(i);
// }

// const min = 4;
// const max = 22;
// for (let i = min; i <= max; i +=1 ) {
//     console.log(i);
// }

/**
  |============================
  лічильник
  |============================
*/
// const min = 0;
// const max= 500;
// let total = 0;

// for (let i = min; i <= max; i += 25 ){
//     // console.log(i);
//   /**
//     |============================
//     | парні числа
//     |============================
//   */
//     if( i % 2 !== 0){
//         console.log(`не  парне`, i );
//         continue;
//     }
//     console.log(`парне`, i );
//     total += i;
// }
// console.log('total: ', total);

/**
  |============================
  | Оформлення замовлення з різними знижками
  |============================
*/
// const totalSpent = 6000;
// let payment = 500;
// let discounet = 0;

// if(totalSpent >= 100 && totalSpent < 1000){
//     console.log('Бронзовий партнер, скидка 2%');
//     discount = 0.02;
// }
// else if(totalSpent >= 1000 && totalSpent < 5000){
//     console.log('срібний партнер, скидка 5%');
//     discount = 0.05;
// }
// else if(totalSpent >= 5000){
//     console.log('золотий партнер, скидка 10%');
//     discount = 0.1;
// }
// else {
//     console.log('не партнер скидка 0%');
// }
// console.log(
//     `Оформдяєм заказ на суму ${payment} з скидкой ${discount * 100}%`,
// );

/**
  |============================
  | Розгалудження If i Swith
  |============================
*/

// value = 3;

// if(value === 10) {
//     console.log(`варіант 10`);
// } else if( value === 9) {
//     console.log(`value 9`);
// }else if( value === 8) {
//     console.log(`value 8`);
// }else if( value ===7) {
//     console.log(`value 7`);
// }else if( value ===6) {
//     console.log(`value 6`);
// }else if( value ===5) {
//     console.log(`value 5`);
// }else if( value ===4) {
//     console.log(`value 4`);
// }else if( value ===3) {
//     console.log(`value 3`);
// }

// const value = 9;

// switch (10){
//     case 10:
//         console.log("value - 10");
//         break;
//     case 9:
//         console.log("value - 9");
//         break;
//     case 7:
//         console.log("value - 8");
//         break;
// }

/**
  |============================
  | console.time
  |============================
*/
// const value = 8;
// console.time("switch");
// switch (10) {
//   case 10:
//     console.log("value - 10");
//     break;
//   case 9:
//     console.log("value - 9");
//     break;
//   case 7:
//     console.log("value - 8");
//     break;
// }
// console.timeEnd("switch");

/**
  |============================
  | Тернарний оператор
  |============================
*/

// condititon ? true : false

// const value = 4;

// value > 8 ? console.log("ok") : console.log("not");
