import React from "react";
import './JobForm.css';

class JobForm extends React.Component {
  state = {
    title: "",
    company: "",
    city: "",
    experience: "",
    salary: "",
    jobDescription: "",
    jobHighlights: ""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.company === "" || this.state.city === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addJobHandler(this.state);
    this.setState({
       title: "",
       company: "",
       city: "",
       experience: "",
       salary: "",
       jobDescription: "",
       jobHighlights: ""
     });
    //this.props.history.push("/");
  };
  render() {

    const countryOptions = [
      { key: 'af', value: 'af', text: 'Afghanistan' },
      { key: 'ar', value: 'ar', text: 'Argentina' },
      { key: 'am', value: 'am', text: 'Armenia' },
      { key: 'aw', value: 'aw', text: 'Aruba' },
      { key: 'au', value: 'au', text: 'Australia' },
      { key: 'in', value: 'in', text: 'India'}
    ];

    const skillsOptions = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' },
    ]

    const shiftOptions = [
      { key: 'mrng', text: 'Morning', value: 'morning' },
      { key: 'noon', text: 'Noon', value: 'noon' },
      { key: 'night', text: 'Night', value: 'night'}
    ];

    return (
      <div className="data">
      <div className="center">
      <div className="ui main">
        <h2>Add Job Details</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Company</label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={this.state.company}
              onChange={(e) => this.setState({ company: e.target.value })}
            />
          </div>
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={(e) => this.setState({ city: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Experience</label>
            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={this.state.experience}
              min="0"
              onChange={(e) => this.setState({ experience: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={this.state.salary}
              min="0"
              onChange={(e) => this.setState({ salary: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Job Description</label>
            <textarea
              type="text"
              name="jobDescription"
              value={this.state.jobDescription}
              placeholder='Tell us more about the job...'
              onChange={(e) => this.setState({ jobDescription: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Job Highlights</label>
            <textarea
              type="text"
              name="jobDescription"
              value={this.state.jobHighlights}
              placeholder='Tell us the Highlights...'
              onChange={(e) => this.setState({ jobHighlights: e.target.value })}
            />
          </div>
          <button className="ui button ">Submit</button>
        </form>
      </div>
    </div>
    </div>
    );
  }
}

export default JobForm;
