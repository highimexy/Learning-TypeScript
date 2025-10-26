//simple function
function addTwo(num: number): number {
  //return num + 2;
  return "string";
}
addTwo(2);

// simple function
function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("String");

export {};
//function with few params
function signUpUser(
  name: string,
  email: string,
  isPaid: boolean,
  age: number
) {}

signUpUser("string", "string", true, 24);

//function with pre assigned values
let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false,
  age: number = 24
) => {};
loginUser("w", "EMAIL@GMAIL.COM");

// Kilka możliwych return
function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}
let result1 = getValue(4);
let result2 = getValue(7);

console.log(result1, result2);

//ARRAY
const heroes = ["thor", "spiderman", "ironman"];

heroes.map((hero) => {
  return `Hero is ${hero}`
});

//return nothing
function consoleError(errmsg: string): void{
  console.log(errmsg);
}
//never return
function handleError(msg: string): never{
  throw new Error(msg)
}