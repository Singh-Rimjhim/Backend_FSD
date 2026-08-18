//event
//eventemitter- on(emit(event, param),callback) registering event and listening to event, on(), emit()-triggering event/ create event/fire event
// const EventEmitter=required('events');
// const event=new EventEmitter();
// event.emit("greet"),()=>{
//     console.log("this is event emitter");
// }
// event.on("greet",()=>{
//     console.log("this is event emitter");
// });
// event.emit("greet");

class MyEvent extends EventEmitter{}
const events = new EventEmitter();
events.on("greet", (name)=>{
    console.log(`Hello, ${name}! This is event emitter`);  //template literal ${variable}

})
events.on("exit", ()=>{
    console.log("This is exit event");
});
events.emit("greet","Ranjana");
events.emit("exit");