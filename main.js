"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World Welocme";
console.log(message);
var x = 20;
// let x=30;
var y = 40;
var sum;
//  const title
var isBeginner = true;
var total = 0;
var name = "Mayuri Gurav";
// name= true
var sentence = "My Name is ".concat(name, ", I am begginer in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
//tuple
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 6] = "Red";
    Color[Color["Green"] = 7] = "Green";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); //7
var randomValue = 21;
randomValue = true;
randomValue = "Meghana";
var myvariable = 10;
// console.log(myvariable.name);
// myvariable();
// myvariable.toLowerCase();
var myvariable1 = 10;
// console.log(myvariable1.name);
// (myvariable1 as string).toLowerCase();
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myvariable1)) {
    console.log(myvariable1.name);
}
var b = 20;
// b = true
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = false;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5, '10');
// add()
