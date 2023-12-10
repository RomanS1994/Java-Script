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

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       return (this.price = newPrice);
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return this.price > Car.#MAX_PRICE
//       ? "Error! Price exceeds the maximum"
//       : "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor({ email, accessLevel }) {
//     super(accessLevel);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   blacklistedEmails: [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
