const orders = [
    { id: 1, customer: "Anna", total: 45, paid: true },
    { id: 2, customer: "John", total: 120, paid: false },
    { id: 3, customer: "Mike", total: 80, paid: true },
    { id: 4, customer: "Sara", total: 150, paid: true },
    { id: 5, customer: "Alex", total: 35, paid: false },
    { id: 6, customer: "Kate", total: 200, paid: true },
];

const statistics = orders.reduce((acc, order) => {
    if (order.paid === true) {
        acc.paidOrders++;
        acc.totalRevenue += order.total;
    }

    return acc;
}, {
    paidOrders: 0,
    totalRevenue: 0
});

console.log(statistics);