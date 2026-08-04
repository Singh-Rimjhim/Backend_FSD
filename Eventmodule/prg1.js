//event
//eventemitter- on(emit(event, param),callback) registering event and listening to event, on(), emit()-triggering event/ create event/fire event
const EventEmitter=required('events');
const event=new EventEmitter();
event.emit("greet"),()=>{
    console.log("this is event emitter");
}
event.emit("greet");