async function retry(fn, retries) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    return retry(fn, retries - 1);
  }
}
let attempts = 0;
async function fetchData() {
  attempts++;
  console.log("Attempt:", attempts);
  if (attempts < 3) {
    throw new Error("Failed");
  }
  return "Data fetched successfully";
}
retry(fetchData, 3)
  .then(console.log)
  .catch(console.error);
