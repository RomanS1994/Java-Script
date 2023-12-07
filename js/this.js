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
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};
const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
      return balance;
    },
    this.getDiscount() {
      return discount;
    },
    this.setDiscount(value) {
      this.discount = value;
    },
    this.getOrders() {
      return orders;
    },
    this.addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, "Steak");
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  