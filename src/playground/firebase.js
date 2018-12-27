
//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('notes').push({
//     title: 'homework',
//     body: 'react'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Abby Zenger',
//     age: 22,
//     stressLevel: 6,
//     job: {
//         title: 'Software Dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'Midway',
//         country: 'United States'
//     }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed,', e);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });

// // database.ref().set('this is my data');

// database.ref('attributes').set({
//     height: "5'7",
//     weight: 120
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data removed');
//     })
//     .catch((e) => {
//         console.log('Something went wrong', e);
//     });