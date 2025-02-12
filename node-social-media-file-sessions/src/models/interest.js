 const INTERESTS=[
    {
        id:1,
        name:'Swimming',
        imageURL:'https://hips.hearstapps.com/runnersworld-uk/i/15008/40397.jpg?resize=980:*'
    },
    {
        id:2,
        name:'Coding',
        imageURL:'https://as.virginia.edu/sites/as.virginia.edu/files/styles/natural_800/public/2023-07/Coding_Class.jpg?itok=30CoWf55'
    },
    {
        id:3,
        name:'Cricket',
        imageURL:'https://images.icc-cricket.com/image/upload/t_ratio16_9-size20/prd/ztmm7mjvux5klnosde7l'
    },

]

const getAll=()=>{
    return INTERESTS
}
const add=(newInterest)=>{
    const interest={id:`${idCounter++}`,
    ...newUser}
    INTERESTS.push(interest)
    return interest
}
const update =(id, updatedInterest)=>{
    const index=INTERESTS.findIndex(interest=>interest.id==id)
    INTERESTS[index]={
        ...INTERESTS,
        ...updatedInterest
    }
}
const remove=(id)=>{
    const index=INTERESTS.findIndex(interest=>interest.id==id) 
    INTERESTS.splice(index,1)
}
const getInterest =(id)=>{
    return INTERESTS.find(int=>int.id==id)
}

module.exports={
    getAll,
    add,
    update,
    remove,
    getInterest
}