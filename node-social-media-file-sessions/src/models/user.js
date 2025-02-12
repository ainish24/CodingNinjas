const USERS =[
    {
        id:'1',
        name:'Rohit',
        email:"rohit@gmail.com",
        password:'123',
        age:36,
        imageURL:'/uploads/rohit.jpg'
    },
    {
        id:'2',
        name:'Kohli',
        email:"kohli@gmail.com",
        password:'123',
        age:37,
        imageURL:'/uploads/kohli.jpg'
    },
    {
        id:'3',
        name:'Dhoni',
        email:"dhoni@gmail.com",
        password:'123',
        age:52,
        imageURL:'/uploads/dhoni.webp'
    },
    {
        id:'4',
        name:'Tendulkar',
        email:"tendulkar@gmail.com",
        password:'123',
        age:63,
        imageURL:'/uploads/tendulkar.webp'
    }
]
let idCounter =5


const FOLLOWING_LIST=[
    {
        userId:1,
        followingUserIds:[2,3]
    }
]


const getUsers=()=>{
    return USERS
}
const add=(newUser)=>{
    const user={id:`${idCounter++}`,
    ...newUser}
    USERS.push(user)
    return user
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