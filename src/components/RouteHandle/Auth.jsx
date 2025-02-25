import { Navigate, Outlet } from "react-router-dom";
import Navbar from '../Navbar/Index'

const Auth = () => {
  const isLoggedUser = JSON.parse(localStorage.loggedUser || null);
  if (isLoggedUser) {
    return (
      <>
        <Navbar />
        <Outlet></Outlet>
      </>
    );
  };
  return <Navigate to={"/login"} />
};

export default Auth;
