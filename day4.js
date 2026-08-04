
//Event
//event loop
console.log("synchronoums function");
const f1=() => {
    console.log("f1");
}
const f2=() => {
    console.log("f2");
}
function main(){
    console.log("this event loop");
    setTimeout(f1,1000);
    setTimeout(f2,2000);
    new Promise((resolve,reject)=>{
        
        resolve("i am promise 1 ");
    }).then((result)=>{
        console.log(result);
    })

new Promise((resolve,reject)=>{
    resolve("this  is promise 2");
}).then((res)=>{
    console.log(res);
});

}
