import { Navigate, Outlet } from "react-router-dom";

const PartnerAuthPages = () => {
    const isLoggedUser = JSON.parse(localStorage.loggedUser || null);

    if (isLoggedUser && isLoggedUser.id == "2") {
        return <Outlet></Outlet>;
    } else {
        return <Navigate to={"/job-list"} />;
    }
};

export default PartnerAuthPages;
