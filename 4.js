class Cache {
  constructor() {
    this.store = {};
  }
  set(key, value, ttl) {
    const expiryTime = Date.now() + ttl;
    this.store[key] = {
      value: value,
      expiry: expiryTime
    };
  }
  get(key) {
    const data = this.store[key];
    if (!data) {
      return null;
    }
    if (Date.now() > data.expiry) {
      delete this.store[key];
      return null;
    }
    return data.value;
  }
}
const cache = new Cache();
cache.set("a", 10, 1000);
console.log(cache.get("a"));

