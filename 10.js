function trimString(str){
  return Promise.resolve(str.trim());
}
function toUpperCase(str){
  return Promise.resolve(str.toUpperCase());
}
function reverseString(str) {
  return Promise.resolve(str.split("").reverse().join(""));
}
async function process(str) {
  let result = await trimString(str);
  result = await toUpperCase(result);
  result = await reverseString(result);
  return console.log(result);
}
process(" hello ");