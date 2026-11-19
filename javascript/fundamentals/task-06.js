const orders = [
    { id: 1, customer: "Anna", total: 45, paid: true },
    { id: 2, customer: "John", total: 120, paid: false },
    { id: 3, customer: "Mike", total: 80, paid: true },
    { id: 4, customer: "Sara", total: 150, paid: true },
    { id: 5, customer: "Alex", total: 35, paid: false },
    { id: 6, customer: "Kate", total: 200, paid: true },
];

let sum = 0
let paidOrders = 0;
let biggestOrder = null ;

orders.forEach((order) => {
    if(order.paid === true){
        paidOrders++;
        sum += order.total
    if (biggestOrder === null) {
        biggestOrder = order}
    else {
        if (order.total > biggestOrder.total) {
            biggestOrder = order;
        }
    }
}})
const statistics = {
    paidOrders,
    totalRevenue: sum,
    biggestOrder
};
console.log(statistics)