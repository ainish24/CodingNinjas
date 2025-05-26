import styled from 'styled-components'
const students=[
    {
      "id": 1,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
      "isPremium":true
    },
    {
      "id": 2,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
      "isPremium":true
    },
    {
      "id": 3,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg",
      "isPremium":true
    },
    {
      "id": 4,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg",
      "isPremium":false
    },
    {
      "id": 5,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg",
      "isPremium":false
    },
    {
      "id": 6,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
      "isPremium":true
    }
]

const Wrapper= styled.div`
display:flex;
justify-content:space-evenly;
gap: 1em;
flex-wrap:wrap;
`

const UserWrapper=styled.div`
text-align:center;
width:20em;
background-color:${(props)=>props.isPremium?'#B795019F':'#EEE'};
border:1px solid #ddd;
box:-sizing:border-box;
border-radius:1em;
`

const UserAvatar=styled.img`
    border-radius:3em;
    height:128px;
    width:128px;
    border-style:solid;
    border-width:2px;
    border-color:${(props)=>props.isPremium?props.borderColor:'coral'};
`
const Example2=()=>{
    return(
        <Wrapper>
            {students.map((student,index)=>(
                <UserWrapper key={index} isPremium={student.isPremium}>
                <h1>{student.first_name}</h1>
                <UserAvatar src={student.avatar} alt="user" isPremium={student.isPremium} borderColor="white"/>
                <p>{student.email}</p>
                </UserWrapper>
            ))}
        </Wrapper>
    )
}

export default Example2