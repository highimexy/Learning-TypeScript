type Pizza = {
  name: string;
  price: number;
};

const menu = [
  { name: "Margharita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const orderedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!orderedPizza) {
    console.error(`${orderedPizza} does not exist in the menu`);
    return;
  }
  cashInRegister += orderedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: orderedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Chicken", price: 12 });

placeOrder("Chicken");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
