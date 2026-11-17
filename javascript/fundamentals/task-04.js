const orders = [
    { id: 1, customer: "Anna", total: 45, paid: true },
    { id: 2, customer: "John", total: 120, paid: false },
    { id: 3, customer: "Mike", total: 80, paid: true },
    { id: 4, customer: "Sara", total: 150, paid: true },
    { id: 5, customer: "Alex", total: 35, paid: false },
];


// summ of paid orders only(paid: true)
let result = 0

orders.forEach(order => {
    if(order.paid === true){
        result = result + order.total
    }
});