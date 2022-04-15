import React from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h2>Experience</h2>
        <TextInput placeholder="your position here" id="position" />
        <TextInput placeholder="your company here" id="company" />
        <TextInput placeholder="job description here" id="job" />
        <DateInput type="Start" id="d3" />
        <DateInput type="End" id="d4" />
      </div>
    );
  }
}

export default Experience;
