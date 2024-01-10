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

const usersArray = {
  user1: {
    name: "Roman",
    lastName: "Strizhko",
  },
  user2: {
    name: "Andri",
    lastName: "Dzoba",
  },
  user3: {
    name: "Vasilina",
    lastName: "Rimyk",
  },
};
// const key = "user";
// const userName = "Roman Strizhka";

for (const el in usersArray) {
  const key = usersArray[el].name;
  const value = usersArray[el].lastName;
  localStorage.setItem(key, value);
}
console.log(localStorage);
