const USERS=[]
const getUsers =function(){
    return USERS
}

const checkUSerEmailExists=function(email){
    return USERS.find(user=>user.email==email)
}
const checkUSerExists=function (email,password){
    return USERS.find(user=>user.email==email && user.password==password)
}
const addUser=function(newUser){
    USERS.push(newUser)
}
module.exports ={getUsers,checkUSerEmailExists,checkUSerExists,addUser}