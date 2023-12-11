// // Налаштування
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// // Змініть код лише під цим рядком
// firstLetterOfLastName = lastName[0]; // Змініть цей рядок
// console.log(firstLetterOfLastName);

// const lastName = "Lovelace";

// // Змініть код лише під цим рядком
// const lastLetterOfLastName = lastName[lastName.length - 1]; // Змініть цей рядок

// console.log(lastLetterOfLastName);

function nextInLine(arr, item) {
  // Змініть код лише під цим рядком
  item = arr.push(item).shift(arr);
  return item;
  // Змініть код лише над цим рядком
}

// Налаштування
let testArr = [1, 2, 3, 4, 5];

// Відобразити код
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
