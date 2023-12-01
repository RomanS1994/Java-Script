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

// /**
//   |============================
//   лічильник
//   |============================
// */
// // const min = 0;
// // const max= 500;
// // let total = 0;

// // for (let i = min; i <= max; i += 25 ){
// //     // console.log(i);
// //   /**
// //     |============================
// //     | парні числа
// //     |============================
// //   */
// //     if( i % 2 !== 0){
// //         console.log(`не  парне`, i );
// //         continue;
// //     }
// //     console.log(`парне`, i );
// //     total += i;
// // }
// // console.log('total: ', total);

// /**
//   |============================
//   | Оформлення замовлення з різними знижками
//   |============================
// */
// // const totalSpent = 6000;
// // let payment = 500;
// // let discounet = 0;

// // if(totalSpent >= 100 && totalSpent < 1000){
// //     console.log('Бронзовий партнер, скидка 2%');
// //     discount = 0.02;
// // }
// // else if(totalSpent >= 1000 && totalSpent < 5000){
// //     console.log('срібний партнер, скидка 5%');
// //     discount = 0.05;
// // }
// // else if(totalSpent >= 5000){
// //     console.log('золотий партнер, скидка 10%');
// //     discount = 0.1;
// // }
// // else {
// //     console.log('не партнер скидка 0%');
// // }
// // console.log(
// //     `Оформдяєм заказ на суму ${payment} з скидкой ${discount * 100}%`,
// // );

// /**
//   |============================
//   | Розгалудження If i Swith
//   |============================
// */

// // value = 3;

// // if(value === 10) {
// //     console.log(`варіант 10`);
// // } else if( value === 9) {
// //     console.log(`value 9`);
// // }else if( value === 8) {
// //     console.log(`value 8`);
// // }else if( value ===7) {
// //     console.log(`value 7`);
// // }else if( value ===6) {
// //     console.log(`value 6`);
// // }else if( value ===5) {
// //     console.log(`value 5`);
// // }else if( value ===4) {
// //     console.log(`value 4`);
// // }else if( value ===3) {
// //     console.log(`value 3`);
// // }

// // const value = 9;

// // switch (10){
// //     case 10:
// //         console.log("value - 10");
// //         break;
// //     case 9:
// //         console.log("value - 9");
// //         break;
// //     case 7:
// //         console.log("value - 8");
// //         break;
// // }

// /**
//   |============================
//   | console.time
//   |============================
// */
// // const value = 8
// // ;
// // console.time("switch")
// // switch (10){
// //     case 10:
// //         console.log("value - 10");
// //         break;
// //     case 9:
// //         console.log("value - 9");
// //         break;
// //     case 7:
// //         console.log("value - 8");
// //         break;
// // }
// // console.timeEnd("switch")

// /**
//   |============================
//   | Тернарний оператор
//   |============================
// */

// // condititon ? true : false

// // const value = 4;

// // value > 8 ? console.log("ok") : console.log("not");

// /**
//   |============================
//   | Цикл while
//   |============================
// */

// // const str = "hello world";

// // let i = 0;

// // while (i < str.length) {
// //   // (statement)
// //   console.log(str[i]);
// //   i += 1;
// // }

// /**
//   |============================
//   | Цикл do while
//   |============================
// */

// // let i = 1;
// // do {
// //   // statement
// //   console.log("hello world");
// // } while (i < 0); // false

// // let i = 1;
// // do {
// //   // statement
// //   console.log("hello world");
// //   i+=1
// // } while (i < 10); // false

// /**
//   |============================
//   | Цикл Swith "Світлофор"
//   |============================
// */

// // let message = prompt(`color ?`);
// // if(message){
// //     message = message.toLowerCase().trim();
// // }

// // switch(message){
// //     case "red":
// //         action = 'stop';
// //         break;
// //     case "yellow":
// //         action = 'ready';
// //         break;
// //     case "green":
// //         action = "go";
// //         break;
// //         default:
// //             action = "be careful";
// //     }
// //     console.log(action);

// /**
//   |============================
//   | Функція
//   |============================
// */
// // function getDays(deps) {
// //    const daySpeed = 7;
// //    const nightSpeed = 2;

// //    let total = 0;
// //    let days = 0;
// //    while(total < deps) {
// // total += daySpeed;
// // days += 1;

// //     if (total < deps) {
// //       total -= nightSpeed;
// //     }
// //    }
// //    console.log(days);
// // }

// // getDays(42);
// // getDays(17);
// // getDays(18);

// // function checkAge(age) {
// //     let message;

// //     if ( 18 >= age ) {
// //       message = 'You are an adult';
// //     } else {
// //       message = 'You are a minor';
// //     }

// //     return message;
// //   }

// //   function checkStorage(available, ordered) {
// //     let message ;
// //       if (ordered > available)
// //         message = "Not enough goods in stock!";
// //         else {
// //       message = "Order is processed, our manager will contact you.";
// //     }

// //     // Change code above this line
// //     return message;
// //   }
// //   console.log(message);

// // function checkStorage(available, ordered) {
// //   let message;
// //     if (ordered === 0) {
// //     message = "There are no products in the order!";
// //     }
// //     else if (ordered > available) {
// //     message = "Your order is too large, there are not enough items in stock!";
// //     }
// //   else {
// //     message = "The order is accepted, our manager will contact you";
// //   }
// //   return message;
// // }

// // console.log(message);

// // function checkStorage(available, ordered) {

// //   // Change code below this line
// //     const message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

// //   // Change code above this line
// //   return message;
// // }

// // function formatMessage(message, maxLength) {
// //   let result;
// // if (message.length <= maxLength); {
// //   result = "message";
// // }
// //   else {
// //     result = message.length - maxLength + "...";
// //   }

// //   return result;
// // }
// // console.log(result);

// // function formatMessage(message, maxLength) {
// //   let result;
// //   // Change code below this line
// //   if (message.length > maxLength) {
// // result = message.slice(0, maxLength) + "...";
// //   } else {
// //     result = message.slice(0, maxLength);
// //   }
// //   /// Change code above this line
// //   return result;
// // }
// // function checkForSpam(message) {
// //   let result;
// //   // Change code below this line
// //   message = message.toLowerCase();
// //   result = message.includes("sale") || message.includes("spam");
// //   // result = message.includes("spam");
// //   // Change code above this line
// //   return result;
// // }

// // function checkForSpam(message) {
// //   let result;

// //   message = message.toLowerCase;
// //   result = message.includes("spam") || message.includes("sale")

// //   return result;
// // }

// // value = 3;

// // if(value === 10) {
// //     console.log(`варіант 10`);
// // } else if( value === 9) {
// //     console.log(`value 9`);
// // }else if( value === 8) {
// //     console.log(`value 8`);
// // }else if( value ===7) {
// //     console.log(`value 7`);
// // }else if( value ===6) {
// //     console.log(`value 6`);
// // }else if( value ===5) {
// //     console.log(`value 5`);
// // }else if( value ===4) {
// //     console.log(`value 4`);
// // }else if( value ===3) {
// //     console.log(`value 3`);
// // }

// // const friends = ['mango', 'kiwi']
// // console.log(friends);
// // console.table(friends);

// // friends[1] = 'sdasds';
// // console.table(friends);

// // const friends= ['fvf', '2fdv', '3fdvdf', '4dfvf', '5dfv', '6dfv', '7dfv', '8dfvfd'];
// // console.table(friends);
// // for(let i = 0; i <= friends.length -1; i += 1){
// // }
// /**
//   |============================
//   | "FOR"
//   |============================
// */

// // const friends = [2, 4, 6, 4, 75, 32, 43];
// // let total = 0;
// // for(let i = 0; i < friends.length; i += 1) {
// // total += friends[i];
// // }
// // console.table(total);

// /**
//   |============================
//   | "FOR OF"
//   |============================
// */

// // const friends = [2, 4, 6, 4, 75, 32, 43];
// // let total = 0;

// // for (const val of friends){
// //   total += val;
// // }
// // console.log(total);

// // const array = ["Hello world,", null, true, 15];
// // // console.log(array);

// // // console.log(array.length -2);
// // console.log(lastEl.array);

// /**
//   |============================
//   | Перебір масиву
//   |============================
// */

// // const array = ["Hello world,", null, true, 15];

// // for(const item of array){
// //   console.log(item);
// // }

// // // Виносимо варіанти в масив
// // const redFruits = ["apple", "cherry", "cranberries"];
// // const fruit = "strawberry";
// // // Перевіряємо присутність елемента
// // const hasFruit = redFruits.includes(fruit);

// // if (hasFruit) {
// //   console.log(`${fruit} is a red fruit!`);
// // }

// // const numbers = [];

// // numbers.push(1);
// // console.log(numbers); // [1]

// // numbers.push(2);
// // console.log(numbers); // [1, 2]

// // numbers.push(3);
// // console.log(numbers); // [1, 2, 3]

// // numbers.push(4);
// // console.log(numbers); // [1, 2, 3, 4]

// // numbers.push(5);
// // console.log(numbers); // [1, 2, 3, 4, 5]

// // function checkStorage(available, ordered) {
// //   // Change code below this line

// //   if (ordered === 0) {
// //    return "Your order is empty!";
// //   } else if (ordered > available) {
// //     return "Your order is too large, not enough goods in stock!";
// //   }
// //   return "The order is accepted, our manager will contact you";
// //   // Change code above this line
// // }

// // const fruits = ["apple", "plum", "pear", "orange"];

// // const firstElement = fruits[0];
// // const secondElement = fruits[1];
// // const lastElement = fruits[index.length - 1];

// // console.log(lastElement);

// // let index = ["apple", "plum", "pear", "orange"];
// // const lastElement = index[index.length - 1];

// // console.log(lastElement);

// // let fruits = ["apple", "plum", "pear", "orange"];

// // const firstElement = fruits[0];
// // const secondElement = fruits[1];
// // const lastElement = fruits[fruits.length - 1];

// // // Change code below this line

// // let index = [1, 2, 4, 5, 7, "6"];

// // const lastElement =index[index.length - 1]
// // console.log(lastElement);

// // const fruits = ["apple", "plum", "pear", "orange"];

// // // Change code below this line
// // const firstElement = fruits[0];
// // const secondElement = fruits[1];
// // const lastElement = fruits[fruits.length - 1]

// // const fruits = ["apple", "peach", "pear", "banana"];

// // const lastElementIndex = fruits.length - 1;
// // const lastElement = fruits [lastElementIndex.length - 1];

// // const message = "JavaScript essentials";
// // console.log(message.split(" ")); // ["JavaScript", "essentials"]

// // function calculateEngravingPrice(message, pricePerWord) {
// //   // Change code below this line

// // console.log(calculateEngravingPrice = message.split(" ") * pricePerWord);

// // return
// //   // Change code above this line
// // }

// // const productName = "Droid";
// // const pricePerItem = 3500;

// //   let message = `You picked ${productName}, price per item is ${pricePerItem}, credits`;
// //   console.log(message);

// //   const guestName = "Mango";
// // const roomNumber = 207;
// // const greeting = `Ласкаво просимо ${guestName}, ви заселені у номер ${roomNumber}`;

// // // Change code below this line
// // function add(a, b, c) {
// //   result = a + b + c;

// //    console.log(`Addition result equals ${result}`);
// //    // Change code above this line
// //  }

// //  add(15, 27, 10);
// //  add(10, 20, 30);
// //  add(5, 10, 15);

// //  function checkStorage(available, ordered) {
// //   let message;
// //   // Change code below this line
// // if (ordered >= available){
// //   message = "Not enough goods in stock!";
// // }
// //   else{
// //     message = "Order is processed, our manager will contact you.";
// //   }
// //   // Change code above this line
// //   return message;
// // }

// // function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// //   let message;
// // const totalPrice = pricePerDroid * orderedQuantity;
// //   // Change code below this line
// // if ( customerCredits < totalPrice){
// //   message = "Insufficient funds!";
// // }
// //   else{
// //     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
// //   }
// //   console.log(message);
// //   // Change code above this line
// //   return message;
// // }

// // makeTransaction(3000, 5, 23000)

// // function checkStorage(available, ordered) {
// //   let message;
// //   // Change code below this line
// //   if (ordered === 0){
// //     message = "There are no products in the order!";}
// //     else if (ordered > available){
// //     message = "Your order is too large, there are not enough items in stock!";
// //     }
// //   else{
// //     message = "The order is accepted, our manager will contact you";
// //   }

// //   // Change code above this line
// //   return message;
// // }

// // function name(params) {
// //   if (condition) {

// //   }
// // }

// // // Виведення чисел від 1 до 5
// // for (let i = 1; i <= 20; i+=3) {
// //   console.log(i);
// // }

// // Звісно, ось кілька задач, які можна вирішити за допомогою циклу for в JavaScript:

// // Сума чисел:
// // Використайте цикл for, щоб знайти суму всіх чисел від 1 до N.

// // javascript
// // Copy code
// // let sum = 0;
// // let N = 5;

// // for (let i = 1; i <= N; i++) {
// //   sum += i;
// // }

// // console.log('Сума чисел від 1 до', N, 'дорівнює', sum);
// // Парні числа:
// // Виведіть парні числа від 2 до 10 за допомогою циклу for.

// // javascript
// // Copy code
// // for (let i = 2; i <= 10; i += 2) {
// //   console.log(i);
// // }
// // Таблиця множення:
// // Створіть таблицю множення для конкретного числа (наприклад, 5).

// // javascript
// // Copy code
// // let multiplier = 5;

// // for (let i = 1; i <= 10; i++) {
// //   console.log(multiplier + ' * ' + i + ' = ' + multiplier * i);
// // }
// // Заповнення масиву:
// // Заповніть масив числами від 1 до 5 за допомогою циклу for.

// // javascript
// // Copy code
// // let arr = [];

// // for (let i = 1; i <= 5; i++) {
// //   arr.push(i);
// // }

// // console.log(arr);
// // Зворотний лічильник:
// // Виведіть числа від 10 до 1 в зворотньому порядку.

// // javascript
// // Copy code
// // for (let i = 10; i >= 1; i--) {
// //   console.log(i);
// // }

// // function calculateTotal(number) {
// //   // Change code below this line

// //  let total = 0;
// //    for (let i = 1; i <= number; i++) {
// //      total += i;
// //    }
// //  return total;
// //    // Change code above this line

// //  }

// //  let result = calculateTotal(5);
// // console.log(result); // Виведе 15

// // const fruits = ['apple', 'plum', 'pear', 'orange'];

// // for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
// //   const fruit = fruits[i]; // Change this line
// //   console.log(fruit);
// // }

// // function calculateTotalPrice(order) {
// //   let total = 0;
// //   // Change code below this line
// // for (let i = 0; i < order.length; i += 1) {
// //   total += order[i];
// // }
// //   // Change code above this line
// //   return total;
// // }
// // let order = [10, 20, 30, 40, 50];
// // console.log(calculateTotalPrice(order))

// // const numbers = [22, 55, 64, 643, 3, 5, 23, 77];

// // let smallNumber = numbers[0];

// // for (const number of numbers){
// // if ( number < smallNumber){
// //   smallNumber = number;
// // }
// // }
// //   console.log(smallNumber);

// // const numbers = [22, 55, 64, 643, 3, 5, 23, 77];

// // let smallNumber = numbers[0];

// // for (let i = 0; i < numbers.length; i++) {
// //   const number = numbers[i];
// // if(number > smallNumber){
// //   smallNumber = number;
// // }

// }

// console.log(smallNumber);

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();

// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);

// Задача №7 з практики з ментором
// // ---- task 7
// // Створи дві функції: одна для кодування рядка,
// // інша - для декодування.Кодування повинно працювати так:
// //  кожен символ в рядку замінюється його ASCII - кодом, і
// //  кожен код розділяється певним роздільником(наприклад,
// //      тире).Декодування повинно виконувати зворотню операцію.

// const word = "Hello, World!";

// function coder(str) {
//   let result = [];
//   for (const letter of str) {
//     result.push(letter.charCodeAt(0));
//   }
//   return result.join("-");
// }

// function decoder(str) {
//   let arr = str.split("-");
//   let result = "";
//   for (const letter of arr) {
//     result += String.fromCharCode(letter);
//   }
//   return result;
// }
// const keyWord = coder(word);
// console.log(keyWord);
// console.log(decoder(keyWord));

/**
  |============================
  | task 
  |============================
*/

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// // for (const key of keys) {
// //   // Ключ
// //   console.log(key);
// //   // Значення властивості
// //   console.log(book[key]);
// // }

// const playlist = {
//   name: "Super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,

//   getName() {
//     console.log("ага це  name");
//   },
// };
// console.log(playlist);

// playlist.getName();

// const playlist = {
//   name: "Super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,

//   changeName(newName) {},
//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
//   addRating(ratings) {
//     this.rating += ratings;
//   },
// };

// playlist.addRating(6);

// playlist.changeName("нове імя");

// playlist.addTrack("новий трек". "sdasd". "fsdgr");
// console.log(playlist);
// // console.log(playlist);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.lenght;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[-1];
// // Change code above this line
// console.log(firstTag);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// console.log(credentials);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   // console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// for (key in apartment) {
//   const keys = [key];
//   const values = apartment[key];
//   // Change code below this line
// }

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// for (let key of keys) {
//   values.push(key);
// }

// // Change code below this line
// const keys = Object.keys(apartment);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   propCount += Object.keys(object);

//   return propCount;
//   // Change code above this line
// }

// countProps({ name: "Mango", age: 2 });
// console.log(propCount);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// for (let color of collors) {
//   const hexColors = hexColors.push.color;
//   const rgbColors = [];
// }

// Change code below this line

/**
  |============================
  | 
  |============================
*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let result = [];

//   for (product of products) {
//     console.log(product);
//     let keys = Object.keys(product);
//     // console.log(keys);
//     if (keys.includes(propName)) {
//       result.push(product[propName]);
//     }
//   }

//   return result;

//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(product);
/**
  |============================
  | 
  |============================
*/

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let totalPrice = 0;
//   let price = 0;
//   let quantity = 0;
//   // Change code below this line
//   for (const product of products) {
//     console.log(product);
//   }
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Blaster"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/**
  |============================
  | 
  |============================
*/
