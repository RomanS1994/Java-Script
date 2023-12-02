/**
  |============================
  | Синтаксис
  |============================
*/
// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const qwe = function (x, y) {
//   return x * y;
// };

// doMath(2, 6, add);

// /**
//  *
//  * @param {*} a = x
//  * @param {*} b = y
//  * @param {*} callback  = функція
//  */

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// // const add = function (x, y) {
// //   return x + y;
// // };

// // const qwe = function (x, y) {
// //   return x * y;
// // };

// doMath(2, 6, function (x, y) {
//   return x * y;
// });

/**
  |============================
  | Приклади
  |============================
*/
/*Реєстрація дійства*/

// const buttonRef = document.querySelector(".js-button");

// const handleBtnClick = function () {
//   console.log("Click" + Date.now());
// };

// buttonRef.addEventListener("click", handleBtnClick);

/**
  |============================
  | виклик геопозиції
  |============================
*/
// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };
// const ongetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess);

/**
  |============================
  | SetTimeout 
  |============================
*/

// const callback = function () {
//   console.log("Через 3 секунди всередені колбека в таймауті");
// };

// console.log("В коді перед таймаутом");

// setTimeout(callback, 3000);

// console.log("В коді після таймаута");

/**
  |============================
  |  Робота з бекендом
  |============================
*/

// - API URL: https://pokeapi.co/api/v2/pokemon

// const onRequestSuccess = function (reponse) {
//   console.log(reponse);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(onRequestSuccess);

/**
  |============================
  | Метод для фільтрації масива
  |============================
*/

// const filter = function (array) {
//   const filteredarray = [];

//   for (const el of array) {
//     console.log(el);
//   }
// };

// filter([1, 2, 3, 4, 5]);

/**
  |============================
  | доступність випадкового числа
  |============================
*/

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Roman");

// Рефакторинг

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName)
//       ? onSuccess(pizzaName)
//       : onError(
//           `There is no pizza with a name ${pizzaName} in the assortment.`
//         );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

/**
  |============================
  | Метод forEacg
  |============================
*/
// const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }
// // Метод перебирання forEach
// numbers.forEach(function (index, number) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (number, index) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

/**
  |============================
  | Стрілочна функція
  |============================
*/

// const add = (a, b, c) => a + b + c;
// // console.log(add);

// const adb = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// adb(1, 34, 3);

// // console.log(adb);

// function classicAdd(b, c) {
//   console.log(b, c);
//   return b + c;
// }
// classicAdd(2 + 3 + 4);

// анонімна стрілочна функція

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => (totalPrice += item));

//   return totalPrice;
// };
// // Change code above this line

// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const array = [1, 2, 3, 4, 5];
// dirtyMultiply(array, 8);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(array); // [2, 4, 6, 8, 10]

/**
  |============================
  |Метод map() 
  |============================
*/
// ЗАДАЧА МАСИВ СТУДЕНТІВ
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names);

/**
  |============================
  | Метод flatMap()
  |============================
*/
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// students.map((student) => student.courses);
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// students.flatMap((student) => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

/**
  |============================
  | Метод filter()
  |============================
*/
