import moment from "moment";
import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";

const JobCard = ({ job, onApply }) => {
    const [dueDate, setDueDate] = useState(() => {
        // const date = new Date(job?.due_date);

        return moment(job?.due_date).format("DD-MM-YYYY");
    });

    const [loggedUser, setLoggedUser] = useState(() =>
        JSON.parse(localStorage.loggedUser || null)
    );
    1
    const [isJobApplied, setIsJobApplied] = useState(() => {
        return job?.appliedAthletes?.find(
            (athlete) => athlete?.email == loggedUser?.email
        );
    });

    // ** Handle Delete
    const handleApply = () => {
        Swal.fire({
            title: "Are you sure to apply on this job?",
            showDenyButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `Cancel`,
        }).then((data) => {
            console.log(data);

            if (data.isConfirmed) {
                onApply(job.uid);
            }
        });
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{job.name}</Card.Title>
                    <Card.Text>{job.description}</Card.Text>
                    <Card.Text className="d-flex align-items-center mt-1">
                        <span className="text-secondary nowrap">Due Date :   </span>
                        <p className="mb-0"> &nbsp; {dueDate}</p>
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center mt-1">
                        <span className="text-secondary">Job Type : &nbsp; </span>
                        <Badge bg={job?.job_type == "Short Term" ? "info" : "secondary"}>
                            &nbsp; {job?.job_type}
                        </Badge>
                    </Card.Text>
                </Card.Body>

                {loggedUser?.id == "1" && isJobApplied ? (
                    <div className="appliedBtn">
                        <span className="text-light">Applied</span>
                    </div>
                ) : loggedUser?.id == "1" && !isJobApplied ? (
                    <Card.Footer>
                        <Button
                            variant="primary"
                            className="w-100"
                            onClick={() => handleApply()}
                        >
                            Apply job
                        </Button>
                    </Card.Footer>
                ) : null}
            </Card>
        </>
    );
};

export default JobCard;
