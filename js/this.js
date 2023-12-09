// function foo() {
//   console.log(this);
// }
// foo();

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log();
//   },
//   showName() {
//     // console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// showThis();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag->", this);
//   },
// };
// user.showTag();

/**
  |============================
  | збільшити - зменшити
  |============================
*/
// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment ->", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement ->", this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

// decrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на декримент");

//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", function () {
//   console.log("Кликнули на інкримент");
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
