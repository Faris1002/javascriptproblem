async function runSequential(functions) {
  const results = [];

  for (const fn of functions) {
    const result = await fn();
    results.push(result);
  }

  return console.log(results);
}
const fn1 = () =>
  new Promise(resolve => setTimeout(() => resolve("res1"), 1000));

const fn2 = () =>
  new Promise(resolve => setTimeout(() => resolve("res2"), 200));

const fn3 = () =>
  new Promise(resolve => setTimeout(() => resolve("res3"), 300));

runSequential([fn1, fn2, fn3]);


