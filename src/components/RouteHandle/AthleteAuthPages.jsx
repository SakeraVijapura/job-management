import { Navigate, Outlet } from "react-router-dom";

const AthleteAuthPages = () => {
  const isLoggedUser = JSON.parse(localStorage.loggedUser || null);

  if (isLoggedUser && isLoggedUser.id == "1") {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to={"/job-list"} />;
  }
};

export default AthleteAuthPages;
