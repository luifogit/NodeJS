function Emitter (){
    var events = {}
}
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
}