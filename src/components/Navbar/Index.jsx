import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    const handleLogout = () => {
        localStorage.removeItem('loggedUser');
        navigate('/login');
    }


    return (
        <div className="container my-3 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
                <div className="profile">{loggedUser.name[0]}</div>
                <h4 className="name">{loggedUser.name}</h4>
            </div>
            <Button variant="outline-danger" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Navbar