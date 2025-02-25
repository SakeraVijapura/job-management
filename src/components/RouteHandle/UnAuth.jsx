import { Navigate, Outlet } from "react-router-dom";

const UnAuth = () => {
  const isLoggedUser = JSON.parse(localStorage.loggedUser || null);
  if (isLoggedUser) {
    return <Navigate to={"/job-list"} />;
  }

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default UnAuth;
