//PRIMITIVE DATA TYPES
let myName: string = "bob";
let numberOfWheels: number = 4;
let isStudent:boolean = false;

//CUSTOM TYPES
type Food = string;

let favoriteFood: Food = "pizza";

//CUSTOM TYPES OBJECT
type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Darwin",
    age: 60,
    isstudent: false,
}