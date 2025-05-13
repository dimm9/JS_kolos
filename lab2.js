//zad 1
let currentUser = {
  name : "bob", 
  surname : "gorbaczow", 
  email : "wwwwww", 
  www : "www.wow.pl", 
  userType : "admin", 
  isActive : false,
  show(){
    console.log(this.name + " " + this.surname + " " + this.www);
  },
  setActive(active){
     isActive = active;
  }
}
currentUser.show();


//zad 2
class Book {
  users = [];

  addUser(name, age, phone) {
    let user = {
      name: name,
      age: age,
      phone: phone,
      show() {
        console.log(this.name + " " + this.age + " " + this.phone);
      }
    };
    this.users.push(user); 
  }

  showUsers() {
    console.log("Wszyscy użytkownicy w książce:");
    for (let u of this.users) {
      u.show(); 
    }
  }

  findByName(name) {
    for (let u of this.users) {
      if (u.name === name) {
        u.show();
        return true;
      }
    }
    return false;
  }

  findByPhone(phone) {
    for (let u of this.users) {
      if (u.phone === phone) {
        u.show();
        return true;
      }
    }
    return false;
  }

  getCount() {
    return this.users.length;
  }
}

let myBook = new Book();
myBook.addUser("Anna", 25, "123456789");
myBook.addUser("Tomek", 30, "987654321");

myBook.showUsers();

myBook.findByName("Anna"); 
myBook.findByPhone("987654321");

console.log("Liczba użytkowników:", myBook.getCount()); 


//zad 3
let text = {
  check(txt, word){
  	  return txt.includes(word);
  },
  getCount(txt){
    return txt.length;
  },
  getWordsCount(txt){
    let count = 1;
    for(let i = 0; i<txt.length-1; i++){
      if(txt[i] == ' ' && txt[i+1] != ' '){
        count++;
      }
    }
    return count;
  },
  setCapitalize(txt){
    return txt.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  },
  setMix(txt){
    return txt.split('').map((l, i) => (i%2 === 0) ? l.toUpperCase() : l.toLowerCase()).join('');
  },
  generateRandom(lng){
    let res = "";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<lng; i++){
      res += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return res;
  }
}
console.log(text.check("ala ma kota", "kota")) //---> true
console.log(text.getCount("ala ma kota")) //---> 11
console.log(text.getWordsCount("Ala ma kota")) //---> 3
console.log(text.setCapitalize("ala ma kota")) //---> "Ala Ma Kota"
console.log(text.setMix("ala ma kota")) //---> "aLa mA KoTa"
console.log(text.generateRandom(10)) //---> "dkjiuhtjox"


//zad 4
String.prototype.mirror = function() {
    return this.split('').reverse().join('');
};
console.log("Ala ma kota".mirror() === "atok am alA");



//zad 5
function createCounter(){
  let counter = 0;
  return function(){
    counter += 1;
    return counter;
  }
}
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2