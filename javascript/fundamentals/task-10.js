const products = [
    { id: 1, name: "Keyboard", category: "electronics", price: 80, inStock: true },
    { id: 2, name: "Mouse", category: "electronics", price: 35, inStock: false },
    { id: 3, name: "Monitor", category: "electronics", price: 240, inStock: true },
    { id: 4, name: "Desk", category: "furniture", price: 320, inStock: true },
    { id: 5, name: "Chair", category: "furniture", price: 150, inStock: false },
    { id: 6, name: "Headphones", category: "electronics", price: 120, inStock: true },
    { id: 7, name: "Lamp", category: "furniture", price: 60, inStock: true },
];

//only inStock: true
// availableProducts = sum of items that are inStock
// using reduce()
// without using filter,map,forEach

const productsArr = products.reduce((acc, product) => {
    if(product.inStock === true){
        acc.availableProducts++;
        acc.totalValue += product.price
    }
    return acc;

},
{
    availableProducts: 0,
    totalValue: 0
})


