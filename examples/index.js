const { getTime, getDate, getDay } = require("..");

console.log(getTime(Date.now()));
// => 09:25:07 PM
console.log(getTime(Date.now(), "Asia/Ho_Chi_Minh", "HH:mm:ss"));
// => 21:31:06

console.log(getDate(Date.now()));
// => 05/12/2021
console.log(getDate(Date.now(), "DD-MM-YYYY"));
// => 05-12-2021

console.log(getDay(Date.now()));
// => Sunday
console.log(getDay(Date.now(), "vi"));
// => Chủ nhật
