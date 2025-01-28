import { Navigate, Outlet } from "react-router-dom";
import Navbar from '../Navbar/Index'

const Auth = () => {
  const isLoggedUser = JSON.parse(localStorage.loggedUser || null);
  if (!isLoggedUser) {
    return <Navigate to={"/login"} />
  };
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
};

export default Auth;
