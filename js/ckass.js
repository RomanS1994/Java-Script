// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// console.log(mango);

// const poly = new User({
//   name: "Полі",
//   email: "poly@mail.com",
// });
// console.log(poly);

/**
  |============================
  | методи класу
  |============================
*/

// class User {
//   constructor({ name, email }) {
//     this.email = email;
//     this.name = name;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email;
//   }
// }

/**
  |============================
  | статистичні властивості
  |============================
*/

// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// class User {
//     email;

//     constructor(email) {
//       this.email = email;
//     }

//     get email() {
//       return this.email;
//     }

//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };

//     // Change code above this line
//   }

//   const mango = new Admin({
//   constructor({email,accessLevel}){
//     super(email);
//     this.accessLevel = accessLevel
//   }

//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });

//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

// const myStr = 'I am a " string inside".';
// console.log(myStr);
// const sampleStr = 'Alan said, "Peter is learning JavaScript".';
// const myStr = \"I am a \""string inside"\". \"class Storage {
//   constructor(items) {
//     this.items = items
//   }
//   getItems(){
//     return this.items
//   }
//   addItem(newItem){
//     this.items.push(newItem)
//   }
//   removeItem(itemToRemove){
//   this.items.splice(indexOf(itemToRemove), 1);
//   }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// class Car {
//     // Change code below this line

//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//   getBrand(){
//     return this.#brand;
//   }
//     changeBrand(newBrand){
//       this.#brand = newBrand;
//     }
//     // Change code above this line
//   }

//   class Car {
//     // Change code below this line
//     #brand;

//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }

//     getBrand() {
//       return this.#brand;
//     }

//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }

//     getModel() {
//       return this.model;
//     }

//     updateModel(newModel) {
//       this.model = newModel;
//     }

//     getPrice() {
//       return this.price;
//     }

//     setPrice(newPrice) {
//       this.price = newPrice;
//     }
//     // Change code above this line
//   }
