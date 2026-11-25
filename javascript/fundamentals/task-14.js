const users = [
    { id: 1, name: "Anna", age: 22 },
    { id: 2, name: "John", age: 28 },
    { id: 3, name: "Mike", age: 19 },
    { id: 4, name: "Kate", age: 25 },
    { id: 5, name: "Alex", age: 31 },
];

const updatedUsers = users.filter((user) => user.id !== 3 )