type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Pizza[] = [
  { id: 1, name: "Margharita", price: 8 },
  { id: 1, name: "Pepperoni", price: 10 },
  { id: 1, name: "Hawaiian", price: 10 },
  { id: 1, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const orderedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!orderedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += orderedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: orderedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order with id ${orderId} does not exist`);
    return;
  }
  order.status = "completed";
  return order;
}

function GetPizzaDetail(identifier: number | string) {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLocaleLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
}

addNewPizza({ id: 5, name: "Chicken", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Chicken", price: 12 });

placeOrder("Chicken");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
