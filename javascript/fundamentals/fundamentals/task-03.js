const users = [
    { name: "Anna", age: 17 },
    { name: "John", age: 24 },
    { name: "Mike", age: 16 },
    { name: "Sara", age: 32 },
    { name: "Alex", age: 21 },
];

// age >= 18, result in numbers

let result = 0;

users.forEach((user) => {
    if(user.age >= 18){
        result++
    }
});

console.log(result);