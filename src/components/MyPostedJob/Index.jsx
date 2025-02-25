import { Col, Container, Row } from "react-bootstrap";
import JobCard from "./JobCard";
import PostJobModal from "./PostJobModal";
import { useState } from "react";

const MyPostedJob = () => {
  const loggedUserData = JSON.parse(localStorage.loggedUser || null);

  const [jobList, setJobList] = useState(() => {
    let allJobData = JSON.parse(localStorage.allJobs || null) || [];
    return allJobData.filter((job) => job.email_id == loggedUserData?.email);
  });

  console.log(jobList?.length > 0);

  const handleSubmitFormData = (data) => {
    console.log(data);
    if (data) {
      setJobList([...jobList, data]);
    }
  };

  const handleOnDeleteData = (uid) => {
    console.log(uid);
    const filteredJobList = jobList.filter((job) => job.uid !== uid);
    console.log(filteredJobList);

    setJobList(filteredJobList);
  };

  return (
    <Container>
      {/* Post Job Modal */}
      <PostJobModal onSubmitForm={handleSubmitFormData}></PostJobModal>

      {/* Posted Jobs */}
      <Row className="mt-5">
        {jobList?.length > 0 ? (
          jobList.map((job, index) => {
            return (
              <Col lg="4" key={index} className="mb-4">
                <JobCard job={job} onDelete={handleOnDeleteData}></JobCard>
              </Col>
            );
          })
        ) : (
          <h2 className="text-center mt-5">No Jobs Found!!</h2>
        )}
      </Row>
    </Container>
  );
};

export default MyPostedJob;