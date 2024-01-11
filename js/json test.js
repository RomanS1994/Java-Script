// // // ******  ****** \\
// const lS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// // ****** збереження в LS ****** \\
// localStorage.setItem(lS_KEY, JSON.stringify(names));
// localStorage.setItem("sdasd", "sdsad");

// // ******  Читання з Ls ****** \\
// const result = localStorage.getItem(lS_KEY);
// const pars = JSON.parse(result);

// // ****** Видалення з LS ****** \\
// console.log(localStorage);

// const usersArray = {
//   user1: {
//     name: "Roman",
//     lastName: "Strizhko",
//   },
//   user2: {
//     name: "Andri",
//     lastName: "Dzoba",
//   },
//   user3: {
//     name: "Vasilina",
//     lastName: "Rimyk",
//   },
// };
// const key = "user";
// const userName = "Roman Strizhka";

// for (const el in usersArray) {
//   const key = JSON.stringify(usersArray[el].name);
//   const value = JSON.stringify(usersArray[el].lastName);
//   localStorage.setItem(key, value);
// }

// const key = JSON.stringify("Andri");
// const keysLs = localStorage.getItem(key);
// console.log(JSON.parse(keysLs));

// const arr = JSON.stringify(usersArray);
// localStorage.setItem("obj", arr);

// const newObj = JSON.parse(localStorage.getItem("obj"));
// console.log(newObj);

// ******  ****** \\
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  // console.log(error);
  // console.log(error.name); // "SyntaxError"
  // console.log(error.message); // Unexpected token W in JSON at position 0
}

// console.log("✅ This is fine, we handled parsing error in try...catch");

const a = 10;
const b = 2;

let result = 0;
try {
  result = a + c;
} catch (error) {
  // console.log(error.message);
}
// console.log(result);

// form.addEventListener("submit", handlerSubmit);
// function handlerSubmit(evt) {
//   console.log(evt.target.elements.message.value);
//   evt.preventDefault();
// }
const form = document.querySelector(".feedback-form");
const LS_KEY = "goit-message";
const textarea = form.elements.message;

textarea.value = localStorage.getItem(LS_KEY) ?? "";

form.addEventListener("input", handlerInput);
function handlerInput(evt) {
  localStorage.setItem(LS_KEY, evt.target.value);
}

form.addEventListener("submit", handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(LS_KEY);
  form.reset();
}
