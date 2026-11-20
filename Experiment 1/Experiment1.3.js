//3 .  Visualise Event Loop using SetTimeout and set  immediate function

console.log("1. Program Started") ;
setTimeout(() => {
    console.log("2. Set Time Executed")
}, 4000) ;
setImmediate(() => {
    console.log("3. Set Immediate Executed")
}) ;
process.nextTick(() => {
    console.log("4. Process Next Tick Executed")
}) ;
console.log("5. Finished") ;