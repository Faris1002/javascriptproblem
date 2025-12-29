function rateLimiter(fn, delay) {
  let lastCalled = 0;

  return function () {
    const now = Date.now();

    if (now - lastCalled >= delay) {
      lastCalled = now;
      fn();
    }
  };
}
function fn() {
  console.log("Function executed");
}

const limitedFn = rateLimiter(fn, 1000);

limitedFn(); // executes
limitedFn();// fn executes only once within 1 second


