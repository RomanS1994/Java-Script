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
// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// students.flatMap((student) => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

/**
  |============================
  | Метод filter()
  |============================
*/
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter((value) => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);

// ФІЛЬТРАЦІЯ СТУДЕНТІВ

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// // const best = students.filter((student) => student.score >= HIGH_SCORE);
// // console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter((student) => student.score <= LOW_SCORE);
// console.log(worst);

/**
  |============================
  | Метод find()
  |============================
*/
// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];

//   colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
//   colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
//   colorPickerOptions.find(option => option.label === "white"); // undefined

/**
  |============================
  | Метод findIndex()
  |============================
*/
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const asd = colorPickerOptions.findIndex((element) => element.label === `pink`);

// console.log(asd);

/**
  |============================
  | Методи every() і some()
  |============================
// */
// const fruits = [
//     { name: "apples", amount: 100 },
//     { name: "bananas", amount: 0 },
//     { name: "grapes", amount: 50 },
//   ];

//   // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
//   const allAvailable = fruits.every(fruit => fruit.amount > 0); // false

//   // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
//   const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

/**
  |============================
  | Метод reduce()
  |============================
*/
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// console.log(totalScore);

/**
  |============================
  | 
  |============================
*/

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// // console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(tweets);

// console.log(getTags(tweets));

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// tweets.forEach((tweet) => {
//   console.log(tweet.tags);
// });

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// const score = [61, 19, 74, 35, 92, 56];
// score.sort();
// console.log(score);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Юля", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.sort((a, b) => b - a);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

/**
  |============================
  | Ланцюжки методів
  |============================
*/

const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];
const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map((student) => student.name);

console.log(sortedByAscendingScore);

console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']
