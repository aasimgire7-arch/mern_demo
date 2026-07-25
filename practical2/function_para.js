// array
const fruit = ['Apple', 'Banana', 'Organ'];
console.log(fruit[0]);

fruit.push('Mango');
fruit.unshift('Kiwi');
fruit.pop();

const total = fruit.length;

console.log(total);

// object
const user = {
    name: "Het",
    age: "22",
    isAdmin: true
};

console.log(user.name);
console.log(user['age']);