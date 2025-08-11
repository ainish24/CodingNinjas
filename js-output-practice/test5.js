console.log('Start')
new Promise((resolve)=>{
    console.log('Inside Promise')
    setTimeout(()=>{
        resolve("Resolved")
    }, 1000)
    console.log('after setTimeout')
}).then(console.log)
console.log('End')