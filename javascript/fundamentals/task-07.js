const products = [
    { name: "Keyboard", price: 80 },
    { name: "Mouse", price: 35 },
    { name: "Monitor", price: 240 },
    { name: "Headphones", price: 120 }
];

//price sum

const totalPrice = products.reduce((acc, product) =>{
  return acc + product.price
}, 0);