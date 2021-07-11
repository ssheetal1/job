import React from 'react';
import { Card } from 'semantic-ui-react'

const JobCard = (props) => {
  return (
    <div className="ui segment">
  <Card.Group>
    <Card style={{width:"100%"}}>
      <Card.Content>
        <Card.Header style={{width:"100%"}}>Title:{props.title}</Card.Header>
        <Card.Meta>
        Company:{props.company} &nbsp;&nbsp;
          <span>Experience:{props.experience}</span>&nbsp;&nbsp;
          <span>Salary:{props.salary}</span>&nbsp;&nbsp;
          <span>City:{props.city}</span>
        </Card.Meta>
        <Card.Description>

          Job Description: &nbsp;&nbsp;{props.jobDescription}
          <p>Job Highlights: &nbsp;&nbsp;{props.jobHighlights}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
</div>
  )
}

export default JobCard;
