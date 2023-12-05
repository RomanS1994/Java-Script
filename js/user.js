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
const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag->", this);
  },
};
