export {};

let message = "Hello World Welocme";
console.log(message);

let x = 20;
// let x=30;

const y = 40;
let sum;
//  const title

let isBeginner: boolean = true;
let total: number = 0;

let name: string = "Mayuri Gurav";
// name= true
let sentence: string = `My Name is ${name}, I am begginer in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

//tuple
let person1: [string, number] = ["Chris", 22];

enum Color {
  Red = 6,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c); //7

let randomValue: any = 21;
randomValue = true;
randomValue = "Meghana";

let myvariable: any = 10;
// console.log(myvariable.name);
// myvariable();
// myvariable.toLowerCase();

let myvariable1: unknown = 10;
// console.log(myvariable1.name);
// (myvariable1 as string).toLowerCase();

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myvariable1)) {
  console.log(myvariable1.name);
}

let b = 20;
// b = true

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = false;

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(5, 10);
// add(5, '10');
// add()
