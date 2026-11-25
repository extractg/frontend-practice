const products = [
    { id: 1, name: "Keyboard", price: 80, category: "electronics" },
    { id: 2, name: "Mouse", price: 40, category: "electronics" },
    { id: 3, name: "Desk", price: 300, category: "furniture" },
    { id: 4, name: "Monitor", price: 250, category: "electronics" },
    { id: 5, name: "Chair", price: 150, category: "furniture" },
];

const newProducts = products.map((product) => 
    product.category === "electronics" 
    ? { ...product, price: product.price * 1.2 }
    : product

)
console.log(newProducts)