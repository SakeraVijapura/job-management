import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const isLoggedUser = JSON.parse(localStorage.loggedUser || null);
  if (isLoggedUser) return <Outlet></Outlet>;
  return <Navigate to={"/login"} />;
};

export default Auth;
