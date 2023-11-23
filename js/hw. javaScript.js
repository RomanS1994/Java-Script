// Функція checkPassword(password) отримує пароль користувача в параметр password,
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і
// повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію
// і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD,
//  у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок
//  "Access denied, wrong password!".

// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (type) { // Change this line
//       case "starter": // Change this line
//         price = 0; // Change this line
//         break;

//       case "professional": // Change this line
//         price = 20; // Change this line
//         break;

//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }

//     // Change code above this line
//     return price;
//   }

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;

//    switch (password) {
//      case null:
//        message = "Canceled by user!";
//        break

//      case ADMIN_PASSWORD:
//        message = "Welcome!";
//        break

//        default:
//        message = "Access denied, wrong password!";
//    }

//     // Change code above this line
//     return message;
//   }
//   function getShippingCost(country) {
//     let message;
//     switch(country){
//       case China:
//         message = "Shipping to China will cost 100 credits"
//       case Chile:
//         message = "Shipping to Chile will cost 250 credits"
//       case Australia:
//         message = "Shipping to Australia will cost 170 credits"
//       case Jamaica:
//         message = "Shipping to Jamaica will cost 120 credits"
//       default:
//         message = "Sorry, there is no delivery to your country"
//     }

//     // Change code above this line
//     return message;
//   }

// const courseTopic = "JavaScript essentials";
// console.log(courseTopic[courseTopic.length - 1]);

// function formatMessage(message, maxLength) {
//     let result;
//   if (message.length <= maxLength); {
//     result = message;
//   }
//     else{
//       result = message.length - maxLength + "...";
//     }

//     return result;
//   }
//   console.log(result);

// const fn = function (value){
//     // console.log(1);
//     // console.log(2);

//     if (value < 50){
//         return 'менше ніж 50';
//     }
//     else {
//         return 'більше ніж 50';
//     }
// };
// console.log('результат функції: ', fn(10));
// console.log('результат функції: ', fn(1000));

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers) {
    const number = numbers[i];
  }
  if (number > value) {
    filteredNumbers.push(number);
  }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
