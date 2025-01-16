const USERS=[]
const getUSers =function(){
    return USERS
}

const checkUSerEmailExists=function(email){
    return USERS.find(user=>user.email==email)
}
const checkUSerExists=function (email,password){
    return USERS.find(user=>user.email==email && user.password==password)
}
module.exports ={USERS,checkUSerEmailExists,checkUSerExists}