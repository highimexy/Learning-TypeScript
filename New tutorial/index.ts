const menu = [
  { name: "Margharita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const orderedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!orderedPizza) {
    console.error(`${orderedPizza} does not exist in the menu`)
    return
  }
  cashInRegister += orderedPizza.price;
  const newOrder = {id: nextOrderId++, pizza: orderedPizza, status:"ordered"};
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId);
    order.status = "completed";
    return order;
}

addNewPizza({name: "Chicken", cost: 12})
addNewPizza({name: "BBQ Chicken", cost: 12})
addNewPizza({name: "Spicy Chicken", cost: 12})

placeOrder("Chicken")
completeOrder("1")

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);

