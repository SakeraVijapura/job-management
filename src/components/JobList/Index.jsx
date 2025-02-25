import { useState } from "react";
import JobCard from "./JobCard";
import { Col } from "react-bootstrap";

const JobList = () => {
  const [allJobs, setAllJobs] = useState(() => {
    return JSON.parse(localStorage.allJobs || null) || [];
  });

  const loggedAthlete = JSON.parse(localStorage.loggedUser || null);

  const handleOnApply = (data) => {
    console.log(data);

    let appliedJob = allJobs.filter((job) => job.uid == data);
    let appliedJobIndex = allJobs.findIndex((job) => job.uid == data);

    let oldInvitedAthlete = appliedJob?.appliedAthletes
      ? appliedJob?.appliedAthletes
      : [];

    appliedJob = {
      ...appliedJob[0],
      appliedAthletes: [...oldInvitedAthlete, loggedAthlete],
    };

    if (appliedJobIndex !== -1) {
      allJobs[appliedJobIndex] = appliedJob;
      localStorage.setItem("allJobs", JSON.stringify(allJobs));
      setAllJobs(allJobs);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {allJobs?.length > 0 ? (
          allJobs.map((job, index) => {
            return (
              <Col lg="4" key={index} className="mb-4">
                <JobCard job={job} onApply={handleOnApply}></JobCard>
              </Col>
            );
          })
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};

export default JobList;
