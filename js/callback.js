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

const buttonRef = document.querySelector(".js-button");

const handleBtnClick = function () {
  console.log("Click" + Date.now());
};

buttonRef.addEventListener("click", handleBtnClick);

/**
  |============================
  | виклик геопозиції
  |============================
*/
const onGetPositionSuccess = function (position) {
  console.log(position);
};
const ongetPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess);
