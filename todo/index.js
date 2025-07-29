const inputArea=document.querySelector('#todoInput')
const submitBtn=document.querySelector('#submitBtn')
const tasksDiv= document.querySelector('.tasks')

const addTask=(val, isChecked=false)=>{
    const todoDiv=document.createElement('div')
    const todoInp=document.createElement('input')
    const deleteBtn= document.createElement('button')
    todoInp.type='checkbox'
    todoInp.checked=isChecked
    const span=document.createElement('span')
    span.innerHTML=val
    todoDiv.append(todoInp, span)
    tasksDiv.appendChild(todoDiv)
    deleteBtn.innerHTML='X'
    deleteBtn.classList.add('deleteBtn')
    todoDiv.appendChild(deleteBtn)
    todoInp.addEventListener('change',(e)=>{
        if(e.target.checked){
            span.classList.add('lineThrough')
        }else{
            span.classList.remove('lineThrough')
        }
    })
    deleteBtn.addEventListener('click',()=>{
        todoDiv.remove()
    })
}

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    addTask(inputArea.value)
    inputArea.value=''
})
