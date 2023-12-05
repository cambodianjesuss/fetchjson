let apples: number;
apples = 10;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays

// Array of strings
let colors: string[] = ['red', 'green', 'blue', ]
// Array of numbers
let myNumbers: number[] = [1,3,5,7]
// Array of booleans
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car()

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20,
}

// Functions
const myFunc: (i:number)=> void = (i: number) =>{
  console.log(i);
}

// Type of Any
const json = "{'x': 10, 'y': 20}";
const coodinates = JSON.parse(json);

// Fix it
const json2 = "{'a': 10, 'b': 20}";
const coodinates2: { a: number; b: number} = JSON.parse(json2);
console.log(coodinates2);

// Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numbersAboveZero = numbers[i];
  }
}

// Type annotations for functions
// Code we add to tell TypeScript what time of arguments a function will recieve
// and what the type of values it will return

// Type inference for function
// TypeScript will try to figure out what type a value a function will return
