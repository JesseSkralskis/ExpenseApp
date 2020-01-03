//takes all named exports from firebase and dumps them on firebase variable
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

 

//this set up allows us to geab all the firebase stuff we need from other places

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
//for authentication we neesd to provide a provider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// no arg for ref we get access to the root of data base
// set returns a promise so we can attach then to it to access the promise
// database.ref().set({
//     name: 'jesse',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'santa cruz',

//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) =>
// {
//     console.log('this failed', error)
// });

// // database.ref().set('this is my Data');
// //asynchrounous meaning just because we call to set doesnt mean it completes befor the next line is run
// // database.ref('age').set(45);
// // database.ref('location/city').set('comptopn');
// database.ref('attributes').set({
//     hight: '6 foot 1',
//     weight: '175 pounds',
//     job: 'developer'

// }).then(() => {
//     console.log('data is properly saved');
// }).catch((error) => {
//     console.log('failed miserably', error);
// })

// //how to remove
// // database.ref('isSingle').remove()
// //     .then(() => {
// //     console.log('data removed');
// //     }).catch((error) => {
// //     console.log(error,'data was not removed');
// // })

// //can also use set to remove data by passing in null

// // database
// //   .ref()
// //   .set(null)
// //   .then(() => {
// //     console.log("data removed");
// //   })
// //   .catch(error => {
// //     console.log(error, "data was not removed");
// //   });

// // use update method to change data
// //must have an object passed in
// //can add new by adding more
// //can also delete by using null
// //if dealing with nested then must use 'foo/bar' syntax.

// database.ref().update({
//     name: 'Bart Simpson',
//     company: 'Amazon',
//     stressLevel:9,
//     'attributes/job': null,
//     isSingle: true,
//     'location/city': 'Seattle'

// });

//fetching data from firebase
//using once we get the data once
//get our data back in the snapshot
// val() Extracts a JavaScript value from a DataSnapshot.
// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//     console.log(e, 'this failed');
//     })

//if we want the data base to let us know when there is changes then we use the on method
//on = This is the primary way to read data from a Database. Your callback will be triggered for the initial data and again whenever the data changes. Use off( ) to stop receiving updates
//we dont use a promise because promises only allow for once
//third arg is a error handling function

// const dataChange = database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (e)=>{console.log(e,'error fetching data')});
//use .off to unsubscribe
// to specify a certain subscription to unsubscribe pass in the callback function

// database.ref().off(dataChange);
//CRUD Create, Read, Update, Delete

//how to store list data
// database.ref("notes").push({
//     title: "Yo",
//     body: "Im a boss"
// });

//can then reference the id and manipulate as needed
// database.ref("notes/-LxDTI2DKH7odwB7IP0B").remove();

// database.ref("expenses").push({
//   description: "coffee",
//   amount: 2379,
//   createdAt: 56
// });

// database.ref("expenses").push({
//   description: "phonebill",
//   amount: 237945,
//   createdAt: 5654
// });

// database.ref("expenses").push({
//   description: "ball",
//   amount: 23795635,
//   createdAt: 56678
// });

//this is how to convert the firebase object structure
//into the an array that we can use in redux etc
//use forEach

// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
            
//             });
//         });
//         console.log(expenses);
// })

//here subscribing so that any time the firebase object structure changes we get a change in our array structure

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// }, (e)=>console.log(e, 'error fetching data'));

//creating specific subscriptions

//child removed
// now everytime a child is removed the call back will fire and we can get access to that
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child changed subscrioption

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child added sub
//acts a little differently: the call back is called not only for new expenses but also for the existing ones

// database.ref("expenses").on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
