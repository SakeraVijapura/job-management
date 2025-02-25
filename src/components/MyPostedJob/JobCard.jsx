import * as moment from "moment";
import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";

const JobCard = ({ job, onDelete }) => {
    const [dueDate, setDueDate] = useState(() => {
        // const date = new Date(job?.due_date);

        return moment(job?.due_date).format("DD-MM-YYYY");
    });

    // ** Handle Delete
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure to delete this job?",
            showDenyButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `Cancel`,
        }).then((data) => {
            console.log(data);

            if (data.isConfirmed) {
                onDelete(job.uid);
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
                        <span className="text-secondary nowrap">Due Date : &nbsp;   </span>
                        <p className="mb-0"> &nbsp; {dueDate}</p>
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center mt-1">
                        <span className="text-secondary">Job Type : </span>
                        <Badge bg={job?.job_type == "Short Term" ? "info" : "secondary"}>
                            &nbsp; {job?.job_type}
                        </Badge>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button
                        variant="danger"
                        className="w-100"
                        onClick={() => handleDelete()}
                    >
                        Delete
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

export default JobCard;