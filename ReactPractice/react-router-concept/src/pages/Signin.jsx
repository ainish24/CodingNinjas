import { useNavigate } from "react-router-dom";
const Signin = () => {
  // useNavigate is used to programmatically navigate between routes.
  const navigate = useNavigate();
  return (
    <>
      <div>SignIn</div>
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button onClick={()=>navigate('/')}>SignIn</button>
    </>
  );
};

export default Signin;
