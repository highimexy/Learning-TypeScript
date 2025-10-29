//PRIMITIVE DATA TYPES
let myName: string = "bob";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

//CUSTOM TYPES
type Food = string;

let favoriteFood: Food = "pizza";

//CUSTOM TYPES OBJECT
type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
  //? = optional
};

let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person2: Person = {
  name: "Darwin",
  age: 60,
  isStudent: false,
  address: {
    street: "242",
    city: "city2",
    country: "country2",
  },
};

//arrays
let ages: number[] = [100, 101, "one"];
ages.push(true);

type PersonArray = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person2137: PersonArray = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person69: PersonArray = {
  name: "Jill",
  age: 30,
  isStudent: false,
};

let people: PersonArray[] = [person2137, person69];

// Array<PersonArray>

//literal types
let myName3: "Bob" = "Bob";

const myName2: "Bob" = "Bob";

//Unions
type UserRole1 = "guest" | "member" | "admin";

let userRole: UserRole = "admin";

//any

let value: any = 1;
value.toUpperCase();

value = "Hi"
value.map();
