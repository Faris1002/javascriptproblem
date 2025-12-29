function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(err=> {
          reject(err);
        });
    });
    if (promises.length === 0) {
      resolve([]);
    }
  });
}

promiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(console.log);