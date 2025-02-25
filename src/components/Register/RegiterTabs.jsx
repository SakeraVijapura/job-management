import { Nav } from "react-bootstrap";
import { users } from "../../config/userTypes";

const RegisterTabs = ({ onSelect }) => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="1" onSelect={onSelect}>
                {users.map((user) => (
                    <Nav.Item key={user.id}>
                        <Nav.Link eventKey={user.id}>{user.name}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    );
};

export default RegisterTabs;
