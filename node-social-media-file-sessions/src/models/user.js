const USERS =[
    {
        id:'1',
        name:'Ainish Vadhwani',
        email:"ainish@gmail.com",
        password:'123',
        age:23,
        imageURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFysEiVjMzVna1gnV5oVY8s8CA3LciJ8u10Q&s'
    }
]
let idCounter =2

const getUsers=()=>{
    return USERS
}
const add=(newUser)=>{
    USERS.push({
        id:`${idCounter++}`,
        ...newUser})
}
const update =(id, updatedUser)=>{
    const index=USERS.findIndex(user=>user.id==id)
    USERS[index]={
        ...USERS,
        ...updatedUser
    }
}
const remove=(id)=>{
    const index=USERS.findIndex(user=>user.id==id) 
    USERS.splice(index,1)
}
const checkUserExists=(email, password)=>{
    return USERS.find(user=> user.email==email && user.password==password)
}


module.exports={
    getUsers,
    add,
    update,
    remove,
    checkUserExists
}