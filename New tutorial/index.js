var menu = [
    { name: "Margharita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var orderedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!orderedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += orderedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: orderedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("Order with id ".concat(orderId, " does not exist"));
        return;
    }
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
