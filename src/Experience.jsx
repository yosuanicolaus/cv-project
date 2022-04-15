import React from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      company: "",
      job: "",
      d3: "",
      d4: "",
    };
  }

  setValues = (id, newValue) => {
    this.setState({
      [id]: newValue,
    });
    this.props.updateData(id, newValue);
  };

  render() {
    return (
      <div>
        <h2>Experience</h2>
        <TextInput
          placeholder="your position here"
          id="position"
          setValues={this.setValues}
        />
        <TextInput
          placeholder="your company here"
          id="company"
          setValues={this.setValues}
        />
        <TextInput
          placeholder="job description here"
          id="job"
          setValues={this.setValues}
        />
        <DateInput type="Start" id="d3" setValues={this.setValues} />
        <DateInput type="End" id="d4" setValues={this.setValues} />
      </div>
    );
  }
}

export default Experience;
