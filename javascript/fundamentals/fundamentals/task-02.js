const products = [
    { id: 1, name: "Keyboard", price: 80, inStock: true },
    { id: 2, name: "Mouse", price: 35, inStock: true },
    { id: 3, name: "Monitor", price: 240, inStock: false },
    { id: 4, name: "Headphones", price: 120, inStock: true },
    { id: 5, name: "Webcam", price: 65, inStock: false },
    { id: 6, name: "Microphone", price: 150, inStock: true },
];

// inStock = true, price < 100, end array should be name + price only

const result = products.filter((product) =>{
    if(product.inStock === true && product.price >= 100){
        return true;
    }
    return false
})
const newArray = result.map((product) => {
    return {
        name: product.name,
        price: product.price
    }
})
console.log(newArray)