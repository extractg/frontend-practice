const orders = [
    { id: 1, customer: "Anna", total: 45, paid: true },
    { id: 2, customer: "John", total: 120, paid: false },
    { id: 3, customer: "Mike", total: 80, paid: true },
    { id: 4, customer: "Sara", total: 150, paid: true },
    { id: 5, customer: "Alex", total: 35, paid: false },
];

//получить новый массив в котором будут только paid:true, и имеют total >= 70.

const result = orders.filter((order) => {
    if(order.paid === true && order.total >= 70){
        return true;
    }
    return false;
})
const finalResult = result.map((order) => {
    return {
       customer: order.customer,
       total: order.total
    };
});

console.log(finalResult);
console.log(result)