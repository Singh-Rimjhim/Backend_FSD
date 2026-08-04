//promises for asynch
//js single thread
// const promiseOne=new Promise((resolve,reject)=>{
//     console.log("promise task 1")
//    // resolve("Promises passed by using resolve");
//     let msg=true;
//     if(!msg==true){
//         console.log("message using promises failed")
//     }else{
//         console.log("error......")
//     }  

//     setTimeout(()=>{
//         console.log(resolve());
//     },2000)
// });
// promiseOne.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })



// const promiseOne = new Promise((resolve, reject) => {

//     console.log("Promise task 1");

//     let msg = true;

//     setTimeout(() => {

//         if (msg) {
//             resolve("Promise completed successfully");
//         } else {
//             reject("Promise failed");
//         }

//     }, 2000);

// });

// promiseOne
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// const promiseOne=new Promise((resolve,reject)=>{
//     console.log("promise task 1")
//    // resolve("Promises passed by using resolve");
//     let msg=true;
//     if(!msg==true){
//         console.log("message using promises failed")
//     }else{
//         console.log("error......")
//     }  

//     // setTimeout(()=>{
//     //     console.log(resolve());
//     // },2000)
// });
// promiseOne.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//async //await 
// console.log("1");
// async function test(){
//     console.log("2");
// await console.log("3"); //aage wle ko left krkek pehle fxn ke bahar run hoga fir ye neeche wle execute honge
//     console.log("4");

// }
// t1=test();
// console.log("5");
//create promises that will print username and password using  and if username and password not found then it will call
//reject and print ERROR.........

async function test(){
    console.log("message: 1");
    const response= fetch("./student.json");
    console.log(response.status);
    const stdn=(await response).json();
   return stdn;
   console.log("message : 3");
}
test().then((res)=>{
console.log(res);
});
//create json for 10 students
