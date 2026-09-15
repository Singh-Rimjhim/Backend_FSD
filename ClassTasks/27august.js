// #ques1

// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully");
//         }, 2000);
//     });
// }
// fetchData().then((result) => {
//     console.log(result);
// });

//ques2

// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve("Eligible");
//         } else {
//             reject("Not Eligible");
//         }
//     });
// }
// checkAge(20)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// ques 3

// function loginUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User logged in");
//             resolve();
//         }, 1000);
//     });
// }
// function getUserDetails() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User details fetched");
//             resolve();
//         }, 1000);
//     });
// }
// function getUserOrders() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User orders fetched");
//             resolve();
//         }, 1000);
//     });
// }
// loginUser()
//     .then(() => getUserDetails())
//     .then(() => getUserOrders())
//     .then(() => {
//         console.log("All operations completed");
//     });