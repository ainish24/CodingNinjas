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


const USER_INTERESTS=[]


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

const getInterests=(userId)=>{
    const userInt= USER_INTERESTS.find(int=>int.id==userId)
    if (userInt) {
        return userInt.interests
    } else {
        return []
    }
}

const addInterest = (userId, interest)=>{
    const userInt= USER_INTERESTS.find(int=>int.id==userId)
    if (userInt) {
        userInt.interests.push(interest)
    } else {
        const obj ={
            id: userId,
            interests : [interest]
        }
        USER_INTERESTS.push(obj)
    }
}


module.exports={
    getUsers,
    add,
    update,
    remove,
    checkUserExists,
    getInterests,
    addInterest
}