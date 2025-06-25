import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import {
  Landing,
  Signup,
  Signin,
  Notfound,
  Users,
  Categories,
  Mencategory,
  Womencategory,
} from "./pages";

// Navigate Component is used to redirect to different routes.
// useNavigate() hook is used to get the navigate function from the router which programmatically navigate to a new location.
// -- Used in signin component in this application.
// usePramas hook is used to get the params from the URL.
// -- Used in Users component in this application.
// Outlet is used to render the component that corresponds to the nested route.
// -- Used in Categories component in this application.
// When using React Bootstrap, we can use NavLink instead of Link for creating navigation links which collides with the Nav.Link
// component of Bootstrap. In order to solve this problem, we can use a prop named "as" to make the Nav.Link 
// component behave like a NavLink from react-router-dom.
// -- Used in the news-app Application

function App() {
  return (
    <BrowserRouter>
      <ul id="links">
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
      </ul>

      {/* NavLink is similar to Link but it also has an isActive prop to it and is mainly used for Navbars only. */}
      {/* Also in the style prop, we can also use a callback function to return an object instead of directly using an object. */}
      {/* <nav>
        <ul id="links">
          <li>
            <NavLink
            style={({isActive})=>({
              fontWeight: isActive? "bold" : "normal",
            })}
            to="/">Landing</NavLink>
          </li>
          <li>
            <NavLink
            style={({isActive})=>({
              fontWeight: isActive? "bold" : "normal",
            })}
            to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink
            style={({isActive})=>({
              fontWeight: isActive? "bold" : "normal",
            })}
            to="/signin">SignIn</NavLink>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/users/:user" element={<Users />} />
        <Route path="/test" element={<Navigate to="/" />} />
        {/* Nested routes like '/categories/men */}
        <Route path="/categories" element={<Categories />}>
          <Route path="men" element={<Mencategory />} />
          <Route path="women" element={<Womencategory />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <Landing />
      <Signup />
      <Signin /> */}
    </BrowserRouter>
  );
}

export default App;
