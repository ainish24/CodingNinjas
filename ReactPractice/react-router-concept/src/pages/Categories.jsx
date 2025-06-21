import { Outlet, Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <h1>Categories</h1>
      {/* We can also add nested rights through link components here */}
      <Link to="men" style={{padding:"0 1em"}} >Men</Link>
      <Link to="women" style={{padding:"0 1em"}} >Women</Link>
      { /* Render the outlet(component) for the nested routes */}
      <Outlet />
    </>
  );
};

export default Categories;
