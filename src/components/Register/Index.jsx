import { Card } from "react-bootstrap";
import RegisterTabs from "./RegiterTabs";
import RegisterAthlete from "./RegisterAthlete";
import RegisterPartner from "./RegisterPartner";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [selectedTab, setSelectedTab] = useState("1");

    // ** Handle Tab Change
    const handleOnSelectTab = (selectedTab) => {
        setSelectedTab(selectedTab);
    };


    // ** Register User
    const handleRegisterUser = (formData) => {
        const userType = selectedTab == "1" ? "athlete" : "partner";

        const oldUser = JSON.parse(localStorage[userType] || null) || [];
        const oldUserForAnother =
            JSON.parse(
                localStorage[selectedTab == "1" ? "partner" : "athlete"] || null
            ) || [];
        const allUser = [...oldUser, ...oldUserForAnother];

        const isDuplicate =
            allUser?.filter((user) => user.email === formData.email).length > 0;
        if (isDuplicate) {
            toast.error("Already user is registered!");
        } else {
            formData.id = selectedTab;
            oldUser.push(formData);
            localStorage.setItem(userType, JSON.stringify(oldUser));
            toast.success("Register success");
        }
    };

    return (
        <div className="container mt-md-4 mt-xs-2">
            {/* Register User Tabs */}
            <Card>
                <Card.Header>
                    <RegisterTabs onSelect={handleOnSelectTab}></RegisterTabs>
                </Card.Header>

                <Card.Body>
                    {/* Form */}
                    <div className="mt-md-4 mt-xs-2 px-md-5 px-xs-2 bordered">
                        {selectedTab == "1" ? (
                            <RegisterAthlete onSubmit={handleRegisterUser}></RegisterAthlete>
                        ) : (
                            <RegisterPartner onSubmit={handleRegisterUser}></RegisterPartner>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>)
}

export default Register