function deepMerge(obj1, obj2) {
  const result = { ...obj1 };
  for (let key in obj2) {
    if (
      obj1[key] &&
      typeof obj1[key] === "object" &&
      typeof obj2[key] === "object"
    ) {
      result[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 99 }, c: 4 };

const merged = deepMerge(obj1, obj2);

console.log(merged);