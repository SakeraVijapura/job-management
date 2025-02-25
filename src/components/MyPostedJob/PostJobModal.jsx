import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addJobSchema } from "../../config/jobSchema";

// Schema
const schema = addJobSchema;

const PostJobModal = ({ onSubmitForm }) => {
  // ** Use State
  const [show, setShow] = useState(false);

  // ** Use Form
  const {
    handleSubmit,

    getValues,
    setValue,
    formState: { errors, isValid },
    register,
  } = useForm({ resolver: zodResolver(schema) });

  // console.log(getValues());

  // ** Handle on submit form
  const onSubmit = (data) => {
    console.log(data);

    if (isValid) {
      const loggedUserData = JSON.parse(localStorage.loggedUser || null);

      const oldData = JSON.parse(localStorage.allJobs || null) || [];
      const currentJob = {
        ...getValues(),
        id: loggedUserData?.email,
        due_date: getValues().due_date.toString(),
        uid: oldData?.length + 1,
      };

      oldData.push(currentJob);
      console.log(oldData);

      localStorage.setItem("allJobs", JSON.stringify(oldData));

      setShow(false);

      onSubmitForm(currentJob);
    }
  };

  const handleOnDateChange = (ev) => {
    setValue("due_date", ev.$d, { shouldValidate: true });
  };

  // ** handle showing modal
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="w-100" onClick={handleShow}>
        Post new job
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-4">
          <Modal.Header closeButton>
            <Modal.Title>Post New Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Text className="text-secondary">
              Please fill all details to post new job
            </Form.Text>
            <Row className="mb-3">
              {/* Name Control */}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...register("name")}
                  type="text"
                  placeholder="Enter your name"
                />
                {errors?.name && (
                  <Form.Text className="text-danger">
                    {errors?.name?.message}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Description Control */}
              <Form.Group className="mt-3">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  {...register("description")}
                  type="text"
                  placeholder="Enter your name"
                />
                {errors?.description && (
                  <Form.Text className="text-danger">
                    {errors?.description?.message}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Description Control */}
              <Form.Group className="mt-3">
                <Form.Label>Due Date</Form.Label>
                <br />
                {/* <Form.Control type="text" placeholder="Select Date" /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker onChange={handleOnDateChange} />
                </LocalizationProvider>
                <br />
                {errors?.due_date && (
                  <Form.Text className="text-danger">
                    {errors?.due_date?.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Job Type</Form.Label>
                {/* Job Type Control */}
                <Form.Check // prettier-ignore
                  value="Short Term"
                  type="radio"
                  id="short-term"
                  name="job_type"
                  {...register("job_type")}
                  label={"Short Terms Job"}
                />
                {/* Job Type Control */}
                <Form.Check // prettier-ignore
                  value="Long Terms"
                  {...register("job_type")}
                  type="radio"
                  id="long-term"
                  name="job_type"
                  label={"Long Terms Job"}
                />
                {errors?.job_type && (
                  <Form.Text className="text-danger">
                    {errors?.job_type?.message}
                  </Form.Text>
                )}
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default PostJobModal;
