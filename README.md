# js-tutorial-projects

>NB: This is not meant to be a full documentation of the language. It's meant to show my learning process.

Below are important takeaways from the course that I'll use for future reference.

<br><br>

## 1. Javascript Basics:
---
### Variable name rules:
* contains: `digits, letters, underscore, $`
* starts with: `letter, $ or underscore`
* case sensitive
* camelCase

<br>

### Init arrays:
```javascript
const friends = ['john','Smith']
```
>even tho array is a `const`, variables can be reassigned within the array.

<br>

### Function definition:
```javascript
function addValues(num1, num2) {
    return num1 + num2;
}
```

### Function expression:
```javascript
const add = function addValue(num1, num2) {
    return num1 + num2;
}
```
>Omitting function name `addValue` would make it an anonymous function.
```javascript
const add = function (num1, num2) {
    return num1 + num2;
}
add(5,6);
```

### Arrow function:
```javascript
const add = (num1, num2) => {
    num1 + num2;
};
```

<br>

### Init objects:
```javascript
const person = {
    name: 'john',
    lastName: 'peters',
    age: 40,
    education: false,
    married: true,
    siblings: ['anna','susa','peter'],
    greeting: function () { // object method
        console.log('Hello');
    },
    greeting() { // object method es6
        console.log('Hello ES6');
    },
}

console.log(person.name);
console.log(person.siblings[2]);
person.greeting(); // invokes method
```

<br>

### Switch statement:
>Used to replace multiple `if else` statements.
```javascript
const dice = 1;
switch (dice) {
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
        break;
    default:
        console.log('you did not roll dice');
}
```

<br>

### Loops:
```javascript
// can loop forever until a condition is met.
while(condition) {
    statement;
}

// iterates the statement at least once.
do {
    statement;
} while (condition);

// loops a set number of times.
let i;
for (i =0; i < 10; i++) {
    statement;
}
```

<br>

### String properties and methods:
```javascript
let text = 'Peter Jordan';

text.length;
text.toLowerCase();
text.toUpperCase();
text.charAt(2); // returns t
text.indexOf('p'); // returns -1
text.trim(); // trims whitespace
text.startsWith('peter'); // returns false
text.includes('eter'); //returns true
text.slice(0,2); // returns Pe
text.slice(-3); // returns dan
```

<br>

### Template literals:
```javascript
const name = 'john';
const age = 25;
// concat
const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';
// interpolation
const value = `Hey it's ${name} and he is ${age} years old. Here's simple math ${4+4}`;
```

<br>

### Array properties and methods:
```javascript
let names = ['john','bobo','barry','olga','ben'];

// length
names.length;
names[length-1];

// concat
const lastNames = ['pepper','onion','banana']
const allNames = names.concat(lastNames);

// returns ['john','bobo','barry','olga','ben','pepper','onion','banana']

// reverse array
allNames.reverse()

// unshift - adds to beginning
allNames.unshift('susy');
// shift - removes 1st item
allNames.shift('susy');

// push - adds to end
allNames.push('susy');
// pop - removes last item
allNames.pop('susy');

// splice - mutates original array
const specificNames = allNames.splice(2,1);
```
>`splice(2,1)` starts at index of 2 and cuts out only 1 item. 

<br>

## Reference vs Value:
When assigning primitive data type values such as `String, Number, Symbol, Boolean, Undefined, Null, Arrays & Functions` any changes are made directly to that value without affecting the original.
```javascript
cont num1 = 1;
let num2 = num1;
num2 = 7;

console.log(num1); // returns 1
console.log(num2); // returns 7
```
When assigning non-primitive data type `objects` is done by reference, so any changes will affect all references.
```javascript
let person = { name: 'bob' };
let person2 = person;
person2.name = 'susy';

console.log(person); // returns susy
console.log(person2); // returns susy
```
>`objects` assigned by reference will all change to new value.\
\
However to combat that you can assign a value as follows\
`let person2 = { ...person }; `




<br><br><br><br>

## Exercises:
---

#### Exercise 1:
Add the same last name to an array of first names.
```javascript
const names = ['anna','susy','bob'];
const lastName = 'shakeandbake';
let newArray = [];

for (let i = 0; i < names.length; i++) {
    newArray.push(`${names[i]} ${lastName}`);
}

console.log(newArray);
```

#### Exercise 2:

```javascript

```