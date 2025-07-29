const fs = require('fs')
setTimeout(()=>{
    console.log('This is from timeout')
}, 0)
// fs.readFile(__filename, ()=>{
//     console.log('This is from readfile')
// })
setImmediate(()=>{
    console.log('This is from check queue')
})
// Promise.resolve().then(()=>{
//     console.log("This is Promise")
//     process.nextTick(()=>{
//         console.log("Next Tick inside Promise")
//     })
// })
// process.nextTick(()=>{
//     console.log('This is from nextTick')
// })