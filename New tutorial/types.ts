//PRIMITIVE DATA TYPES
let myName: string = "bob";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

//CUSTOM TYPES
type Food = string;

let favoriteFood: Food = "pizza";

//CUSTOM TYPES OBJECT
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    street: string;
    city: string;
    country: string;
  };
};

let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "424",
    city: "city",
    country: "country",
  },
};

let person2: Person = {
  name: "Darwin",
  age: 60,
  isStudent: false,
  address: {w
    street: "242",
    city: "city2",
    country: "country2",
  },
};
