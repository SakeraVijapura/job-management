import { createBrowserRouter } from "react-router-dom";
import Register from "./components/Register/Index";
import Login from "./components/Login/Index";
import UnAuth from "./components/RouteHandle/UnAuth";
import Auth from "./components/RouteHandle/Auth";
import JobList from "./components/JobList/Index";
import AthleteAuthPages from "./components/RouteHandle/AthleteAuthPages";
import AppliedJob from "./components/AppliedJob/Index";
import PartnerAuthPages from "./components/RouteHandle/PartnerAuthPages";
import MyPostedJob from "./components/MyPostedJob/Index";

const routers = createBrowserRouter([
    {
        element: <UnAuth />,
        children: [
            {
                path: "/",
                element: <Register />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },

    {
        element: <Auth />,
        children: [
            {
                path: "/job-list",
                element: <JobList />,
            },
            {
                element: <AthleteAuthPages />,
                children: [
                    {
                        path: "/my-jobs",
                        element: <AppliedJob />,
                    },
                ],
            },
            {
                element: <PartnerAuthPages />,
                children: [
                    {
                        path: "/posted-job",
                        element: <MyPostedJob />,
                    },
                ],
            },
        ],
    },
]);

export default routers;
