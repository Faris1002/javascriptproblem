function update(obj, path, value) {
  if (path.length === 0) return value;
  const [key, ...rest] = path;
  return {
    ...obj,
    [key]: update(obj[key], rest, value)
  };
}
const obj = {
  user: {
    profile: {
      age: 25
    }
  }
};

const newObj = update(obj, ["user", "profile", "age"], 30);
console.log(newObj);
console.log(obj);
