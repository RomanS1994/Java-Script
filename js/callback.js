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

const filter = function (array) {
  const filteredarray = [];

  for (const el of array) {
    console.log(el);
  }
};

filter([1, 2, 3, 4, 5]);
