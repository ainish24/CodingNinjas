async function foo(){
    console.log('A foo')
    await Promise.resolve()
    console.log('B foo')
    await Promise.resolve()
    console.log('C foo')
}
async function goo(){
    console.log('A goo')
    process.nextTick(()=>{
        console.log('B goo')
    })
    await Promise.resolve()
    console.log('C goo')
}
console.log('Start')
foo()
console.log('Mid')
goo()
console.log('End')