class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, fn) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }
  emit(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(fn => fn(data));
  }
  off(event, fn) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      listener => listener !== fn
    );
  }
}
const emitter = new EventEmitter();
emitter.on("data", console.log);
emitter.emit("data", 10);