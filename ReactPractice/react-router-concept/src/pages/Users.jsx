import {useParams} from 'react-router-dom'

const Users = () => {
    // Get the user from the URL parameters using the useParams hook provided by React Router
    const {user} = useParams()
  return (
    <div>hi, {user.toUpperCase()}!</div>
  )
}

export default Users