import netflixLogo from '../../assets/NetflixLogo.png'
import './index.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img
       src={netflixLogo} 
       alt="logo"
       width={150}
     />
     <div>
      <select className='lang-select'>
        <option value="English">English</option>
        <option value="Hindi">हिन्दी</option>
      </select>
      <button className='signin-btn'>
        Sign In
      </button>
     </div>
    </div>
  )
}
export default Navbar