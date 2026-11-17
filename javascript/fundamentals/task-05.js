const products = [
    { name: "Keyboard", price: 80 },
    { name: "Mouse", price: 35 },
    { name: "Monitor", price: 240 },
    { name: "Headphones", price: 120 },
    { name: "Microphone", price: 150 },
];


let result = products[0];

products.forEach((product) => {
    if(product.price > result.price){
        result = product 
    }
})