import React from 'react';
import JobCard from '../JobCard';


function JobSearch(props) {
  console.log(props);
  const renderJobData = props.data.map((data) => {
    return (
          <JobCard
            key={data.id}
            title={data.title}
            company={data.company}
            city={data.city}
            experience={data.experience}
            salary={data.salary}
            jobDescription={data.jobDescription}
            jobHighlights={data.jobHighlights}
          />
        );
      })
  return(
    <>
      <div className="ui container comments">
        {renderJobData}
    </div>
    </>
  );
}

export default JobSearch;
