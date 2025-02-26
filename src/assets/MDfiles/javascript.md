
# Overview
-   Javascript is a server-side script language used by developers to build reactive websites.
-   Here is an overview of how client-side JavaScript works.
    1. Browser load a web page when you access the website
    2. While loading, the browser converts the page and all elements of it such as button, dropdown,... into DOM - Document object model
    3. The javascript tool of the browser converts source code to bytecode. Events will activate the block code which is associated to them. Then the tool serialize the bytecode and make changes to DOM. Finally, the browser renders a new DOM
-   When we mention about server-side Javascript, it means we write logic Javascript code for back-end server
-   The key difference between client-side and server-side Javascript lies in how they generate new content: server-side JavaScript uses application logic and modifies database data, while client-side JavaScript operates within the browser, modifying existing content through user interface logic. Client-side JavaScript is limited by browser permissions, meaning it can only access resources allowed by the browser—such as not being able to write to the hard drive without user interaction. In contrast, server-side functions have access to all server resources as needed.
-   Javascript library: provide functions, features that help developers build their application faster, more efficiently. Some types of common Javascript library as follows:
    -   Data Visualization: Chartjs, ApexCharts, Algolia Places,...
    -   DOM Manipulation: JQuery, Umbrella js, ...
    -   Utility features: Date.js,
-   Javascript framework: a pre-written collection of JavaScript code that provides a structure and set of tools for building web applications. It simplifies development by offering reusable components, standardized practices, and built-in functionalities, allowing developers to focus on application logic rather than underlying code details.
-   NodeJS is an open-source server platform that uses the V8 JavaScript Engine, a back-end runtime environment for JavaScript, to execute JavaScript code outside a web browser. It allows developers build front-end and back-end applications.
    -   Some of common frameworks for back-end development: ExpressJs, NestJs, Fastify, MeteorJs
    -   For front-end development, some of common frameworks are ReactJs > Angular > Vue , Next..
    -   For testing, some of common frameworks are Jest > Storybook > Mocha, Cypress...
### Hoisting
- Hoisting is JavaScript's default behavior of moving  **declarations**  to the top of the current scope.
- Hoisting applies to variable declarations and to function declarations.

### Variables and types
```javascript
let y = true && 1 && {} && [] && defaultValue; // y will be assigned to defaultValue
let z = false || 0 || undefined || null || defaultValue; // z will be assigned to defaultValue
let w = null ?? undefined ?? defaultValue; // w will be assigned to defaultValue
let t = 16 + 4 + "Volvo"; // t = "20Volvo"
let v = "Volvo" + 16 + 4; // t = "Volvo164"
let x1 = 16 + [1, 2]; // x1 = "161,2"
let u1 = 16 - [1, 2]; // u1 = NaN
let y1 = 16 - "3"; // y1 = 13
let z1 = 16 - {}; // z1 = NaN
let w1 = 16 + {}; // w1 = "16[objectObject]"
typeof w1; // "string"
let t1 = car.wheel?.size || defaultValue;
if (typeof myObj !== "undefined" && myObj !== null){
	console.log("This is the good practice check an variable whether it exists and not null or not");
}
```
### Number
```javascript
isNaN(2/0); // true
Number.isInteger(24); // true
Number.isInteger(2.4); // false
const num = 18.532;
const fix1 = num.toFixed(0); // fix1 = "19"
const fix2 = num.toFixed(2); // fix2 = "18.53"
const fix3 = num.toPrecision(3); // fix3 = "18.5"
const num1 = Number("12"); // num1 = 12;
const num2 = "parseInt(" 12sdfd"); // num2 = 12;
const num3 = Number(" 123 "); // 123
```
### Objects
-   Use object literals `{}` instead of `new Object()`.
-   Use array literals `[]` instead of `new Array()`.
-   Use pattern literals `/()/` instead of `new RegExp()`.
-   Use function expressions `() {}` instead of `new Function()`.
```javascript
const person = {  // Create an new object
	firstName: "Hong",  // A properties
	lastName : "Hung",
	id : 5566,
	fullName : function() {   // A method
		return  this.firstName + " " + this.lastName;
	}  // "this" refers to the current object "person"
}
person.email = "example@gmail.com"; // Add a new property "email"
const name = person.firstName ?? person["lastName"];
person.id = 1111; person["id"] = 1122;
const id = "id"; person[id] = 1234;
delete person[id]; // remove properties id
// Display object
const keyList = Object.keys(person); // ["firstName", "lastName", "id", "fullName"];
const valueList = Object.values(person); // ["John", "Doe", "5566", "function() { return this.firstName + ..}"];
for(let [key, value] of Object.entries(person){ ... }
String objectJson = JSON.stringify(person);
// Object constructor
function Person(firstName, lastName, age) {
this.firstName = first;
this.lastName = last;
this.age = age; // "this refers to a new object is it is created"
this.nickname = "Default NickName: " + firstName;
} // It is good for creating multiple same objects
const person1 = new Person("Hong", "Hung", 21);
const person2 = new Person("Huy", "Hoang", 21);
Person.prototype.email = "default@gmail.com"; // All Person objects will have properties "email".
Person.prototype.changeName = function(newName){
	this.firstName = newName;
} // add a methods to all Person objects
person1.changeName("Dam Hong");
// Object API
// Copies properties from a source object to a target object  
Object.assign(target, source)  
// Creates an object from an existing object  
Object.create(object)  
// Returns an array of the key/value pairs of an object  
Object.entries(object)  
// Creates an object from a list of keys/values  
Object.fromEntries()  
// Returns an array of the keys of an object  
Object.keys(object)  
// Returns an array of the property values of an object  
Object.values(object)
// Add a property if it does not exist. Change it if exists
Object.defineProperty(person, "language", {value : "NO"});
// Change property meta data
Object.defineProperty(person, "language", {writable:false});
Object.getOwnPropertyNames(person); // Return all properties. Similar to Object.keys(), but Object.keys() only return enumerable properties;
// Not list property "language" when using Object.keys()
Object.defineProperty(person, "language", {enumerable:false});
// Accessors
const car = {
	name: "BMW",
	year: 2029
	get carName() { return this.name; }
	getName: function() { return this.name; }
	set setName(carName){ this.name = carName; }
}
car.carName; // "BMW" -  Getter, access it as a property
car.getName(); // "BMW" - Access it as a function
car,carName = "Toyota"; // Setter
// Prevents adding object properties
Object.preventExtensions(person) // person.id = 12 will throw an error
Object.preventExtensions([1,2,3]); // [..].push(5) will throw an error
// Returns true if properties can be added to an object  
Object.isExtensible(person)  // false
// Prevents adding and deleting object properties  
Object.seal(person)
// Returns true if object is sealed  
Object.isSealed(person)  
// Prevents any changes to an object - no modification(insert, update, delete)
Object.freeze(person)  
// Returns true if object is frozen  
Object.isFrozen(person)
```
#### Object Destructuring
```javascript
const { firstName: aliasName, lastName, age = 20 } = person;
const [e1, e2] = [1, 2, 3]; // e1 = 1, e2 = 3
const [e1, , , e4] = [1, 2, 3, 4]; // e1 = 1, e4 = 4
let { [0]: fruit1, [2]: fruit2 } = ["Banana", "Orange", "Apple", "Mango"]; // fruit1 = "Banana", fruit2 = "Apple"
const [e1, e2, ...rest] = [1,2,3,4,5]; // e1 = 1, e2 = 2, rest = [3,4,5]
```
### String
```javascript
const a = String(123); // "123"
"Visit W3Schools".search(/w3schools/i); // 6
"Visit W3Schools".replace(/w3schools/gi); // 6
(/w3schools/gi).test("Visit W3Schools"); // true
```
### Array
```javascript
// Add element
const arr1 = ["Orange", "Banana", "Apple"];
const arr2 = []; arr2[0] = "New element";
arr1.push("Pear"); arr2[arr2.length] = "Lemon";
arr2.unshift("First'); // Insert to the beginning of the array
arr2.splice(1,0, "Guava", "Pineapple"); // Insert two elements at index 1, remove 0 element at index 1
// Remove element
const first = arr2.shift(); // Remove the first element
const last = arr2.pop(); // Remove the last element
const deletedElements = arr2.splice(1,2) // Remove 2 elements starts at index 1.
// Copy
const arr3 = arr1.copyWithin(2, 0); // ["Orange", "Banana", "Orange"]; copy to index 2, start at index 0
const arr4 = arr1.copyWithin(1,0,2); // ["Orange", "Orange", "Banana"]; copy to index 1, start at 0, end at 1.
const arr5 = arr1.concat(arr3, arr4);
const arr5b = [...arr1, ...arr3, ...arr4);
const arr6 = arr1.slice(1);
const arr7 = [1,2,4,5].find((value, idx, arr) => value > 1); // 2
const arr8 = [1,2,4,5].findIndex((value, idx, arr) => value > 1); // 1
const arr9 = [1,2,3,0].findLast(x => x > 2); // 3
const arr10 = [1,3,5].findLastIndex(x => x > 2); // 2
const myArr = [[1],[2,3],[5,6,7]].flat(); // [1,2,3,5,6,7]
const mapArr = [1, 2, 3, 4, 5].flatMap(x => [x, x * 10]); // [[1.10], [2,20], [3,30], [4,40], [5,50]]
arr1.sort(); // ["Apple", "Banana", "Orange"]; toSorted() will return a new array
arr2.reverse(); // modify the array. toReversed() will return a new array
[1,4,2,8,5].sort((a,b) => a - b); // sort number array increasely. Default sort() is only for string array. For sorting object array, pass the callback like above.
sortArr.forEach((value) => console.log(value));
const isArray = Array.isArray(arr1); // true
const isArray1 = arr1 instanceof Array; // true
Math.min.apply(null, [1, 2, 3]); // is equivalent to Math.min(1, 2, 3). Similar to Math.max.apply(null, arr);
[1,2,3].map(value => value*2); // [2,4,6]
[1,2,5,6].filter(val => val % 2 == 0) // [2,6]
[1,2,3,4].reduce((total, value, index, array) => total + value, 5); // 15
[1,2,3].reduceRight((total, value, index, array) => total + value*index, 0); // 8 - right to left
const isPositive = [3,5].every(val => val > 0); // true
```
### Date
-   There are a lot of ways to create a new Date:
```javascript
let date = new Date()
date = new Date(_date string_)
date = new Date(_year,month_)
date = new Date(_year,month,day_)
date = new Date(_year,month,day,hours_)
date = new Date(_milliseconds_)
date = new Date("2025-03-25");
date = new Date("2024-03-25T12:00:00Z");
// And more ...
date.toString(); // Sun Oct 20 2024 12:51:45 GMT+0700 (Indochina Time)
date.toDateString(); // Sun Oct 20 2024
date.toUTCString(); // Sun, 20 Oct 2024 05:51:15 GMT
date.toISOString(); // 2024-10-20T05:50:54.906Z
console.log(date.getFullYear() + date.getMonth() + date.getDate() + date.getDay() + "... and more");
```
### Math
```javascript
Math.E; // returns Euler's number
Math.PI; // returns PI
Math.SQRT2; // returns the square root of 2
Math.SQRT1_2; // returns the square root of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10
Math.LOG2E; // returns base 2 logarithm of E
Math.LOG10E; // returns base 10 logarithm of E
Math.round(4.5); // 5, negative -4.5 => -4
Math.ceil(3.2); // 4,  negative: -3.2 => -3
Math.floor(3.9); // 3, negative: -3.9 => -4
Math.trunc(4.223); // 4, negative: -3,2 => -3
Math.sign(4); // 1 or -1 if negative, 0 if zero
// Other methods...
Math.random(); // random number from 0 to 1
const getRandomNumberBetweenMinAndMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```
### Boolean
-   Everything without value is false
```javascript
let isFalse = Boolean(0) && Boolean("") && Boolean(null) && Boolean(NaN) && Boolean(undefined);
isTrue = 8 < "9" && "3" > "23" && 2 > "";
isFalse = 2 > "a" || 2 < "dc";
```
### Set
```javascript
const letters = new Set(["a", "b", "c"]);
letters.add("e");
letters.has("c");
```
### Map
```javascript
const fruits = new Map([["apples", 500]]);
fruits.set("oranges", 200);
const isDeleted = fruits.delete("bananas");
const value = fruits.get("apples"); // Returns 500
fruits.has("bananas"); // false
// Group element by quantity
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 },
];
// Group by Quantity
const result = Map.groupBy(fruits, quantity > 200 ? "ok" : "low"); // Map[{"ok": [...], "low": [...]}]
```
### Class
```js
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	age() {  
		const date = new Date();  
		return date.getFullYear() - this.year;  
	}
}
const myCar1 = new Car("Ford", 2014);  
const myCar2 = new Car("Audi", 2019);
```
### Modules
```js 
const PI = 3.14
const name = "Module"
const calculateSum = (a. b) => a + b;
export {PI, calculateSum}
export default name;
import name, {PI : piAlias, calculateSum} from "./constant.js";
```
### JSON
```js 
const person = {
  name: "Hong Hung",
  age: 21,
  score: [
    {
      subject: "Math",
      score: 7.7
    }
  ],
  address: {
    city: "Ho Chi Minh",
    district: 1
  }
}
const personJson = JSON.stringify(person); // {"name":"Hong Hung","age":21,"score":[{"subject":"Math","score":7.7}], "address":{"city":"Ho Chi Minh","district":1}}
const personObj = JSON.parse(personJson);
```
### Debugging
```js 
console.log("Debug by using console.log");
debugger; // Debug by using debugger
```
### Function
```js 
(function () {  
	console.log("This is called: an anonymous self-invoking function")  
})();
typeof aFunction; // "function"
function calculateSum(a,b = 5,c = 2){
	typeof arguments; // object, {0: undefined, 1:5, 2:2}
	arguments.length; // 3
}
function calculateSum(...num){
	typeof num; // object, [1,4,8,3,...]
	num.length; // Number of argument passed
}
const arrowFunction = a => a * a;
const arrowFunction2 = (firstName, lastName) => { return `${firstName} ${lastName}` }
// Method reusing
const personInfo = {  
	fullName: function() {  
		return this.firstName + " " + this.lastName;  
	}, 
	fullNameV2: function(city = "Unknown city", id = 12) {  
		return this.firstName + " " + this.lastName + " at " + city + " " + id;  
	} 
}  
const person1 = { firstName:"John", lastName: "Doe" }  
const person2 = { firstName:"Mary", lastName: "Doe" }
// With `call()` or `apply()` method, you can write a method that can be used on different objects.
personInfo.fullName.call(person1); // "John Doe"
personInfo.fullName.apply(person1); // "John Doe"
personInfo.fullName.call(person2); // "Mary Doe"
personInfo.fullNameV2.call(person2, "Tokyo"); // "Mary Doe at Tokyo 12"
personInfo.fullNameV2.apply(person2, ["Tokyo", 12]); // "Mary Doe at Tokyo 12"
// With the `bind()` method, an object can borrow a method from another object.
person.fullName.bind(person1); // "John Doe"
person.fullName.bind(person2); // "Mary Doe"
person.fullName.bind(person); // "Hong Hung" 
// Closures
```
#### Closures
- A closure is a function having access to the parent scope, even after the parent function has closed.
- Global variables can be made local (private) with **closures**.
- Global and local variables with the same name are different variables. Modifying one, does not modify the other.
```js 
let counter = 0;  
function add() {  
	let counter = 0;  
	counter += 1;  
}
add(); add(); add(); // counter is still 1
```
- Variables created **without** a declaration keyword (`var`, `let`, or `const`) are always global, even if they are created inside a function. Example:
```js 
function func(){
	age = 5; // age will be global
}
```
