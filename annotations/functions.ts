// Function annotation 

const add = (a: number, b: number): boolean => {
  return true;
};

// Annotate the arguments, then the retun type, then arrow
// No type inference for arguments!
// We don't have to annotate the return, but do it anyways

const sub = (x: number, y: number): number => {
  return x - y;
}

// If we don't add return type, TS will infer as VOID
const mult = (a: number, b: number) => {
  a * b;
}

function divide(a: number, b: number): number {
  return a/b;
}

const divider = function(a: number, b: number){
  return a/b;
}

// Can return null or undefined or just no return
const logger = (message: string): void =>{
  console.log(message)
}

// Using the never return type -- rare edge case
const throwError = (message: string): never =>{
  throw new Error(message)
}

// Annotating an object as argument

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: String }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);

// Clean it up

const logWeather2 = ({date, weather}: {date: Date, weather: String}):void => {
  console.log(date);
  console.log(weather);
}

logWeather2(todaysWeather);