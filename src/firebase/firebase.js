import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };




// // child_removed
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// //child_changed
// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// //child_added
// database.ref('expenses')
// .on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
  

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// const onValueChange = database.ref('expenses')
//   .on('value', snapshot => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   }, e => {
//     console.log('Oops', e);
//   });


// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// });



// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const {name, job: {title, company}} = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}.`)
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   })



// database.ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })

// database.ref().set({
//   name: 'Kevin Philippe',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: "software developper",
//     company: "AirBnB"
//   },
//   location: {
//     street: "rue du chemin vert",
//     city: "Eragny",
//     zipCode: 95610
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('this failed', e);
// });

// database.ref()
//   .update({
//     stressLevel: 9,
//     "job/company": "Amazon",
//     "location/city": "Paris"
//   });


// database.ref('location/city')
//   .remove()
//   .then(() => {
//     console.log('location has been removed!')
//   }).catch((e) => {
//     console.log('OOps, didnt work', e);
//   })