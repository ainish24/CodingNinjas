const addBtn = document.querySelector('#addBtn')
const inpField = document.querySelector('#inpField')
const tarDiv = document.querySelector('.todoList')
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const inpVal = inpField.value
    addTask(inpVal)
    inpField.value=''
})

function addTask(value, isComplete = false) {
    const newDiv = document.createElement('div')
    const newTodo = document.createElement('input')
    newTodo.setAttribute('type', 'checkbox')
    newTodo.checked=isComplete
    const span= document.createElement('span')
    span.textContent=value
    newDiv.append(newTodo, span)
    newTodo.addEventListener('change',(event)=>{
        if(event.target.checked){
            span.classList.add('line-through')
        }else{
            span.classList.remove('line-through')
        }
    })
    const removeBtn= document.createElement('button')
    removeBtn.textContent='x'
    removeBtn.classList.add('removeBtn')
    newDiv.appendChild(removeBtn)
    removeBtn.addEventListener('click',()=>{
        newDiv.remove()
    })
    tarDiv.appendChild(newDiv)
}