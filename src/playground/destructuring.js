

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: "philadelphia",
//     temp: 92
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//  const { name: publisherName = "Self-Published" } = book.publisher
// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['8 rue du chemin vert', 'Eragny', 'Val Oise', '95610'];

// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}`);
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);