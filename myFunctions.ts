function addTwo(num: number) {
  return num + 2;
}
addTwo(2);

let value2 = addTwo(2) + addTwo('leter')

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("String");

export {};

function signUpUser(
  name: string,
  email: string,
  isPaid: boolean,
  age: number
) {}

signUpUser("string", "string", true, 24);

let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false,
  age: number = 24
) => {};
loginUser("w","EMAIL@GMAIL.COM");
