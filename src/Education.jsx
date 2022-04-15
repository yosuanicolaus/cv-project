import React from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";

class Education extends React.Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <TextInput placeholder="your school name here" id="school" />
        <TextInput placeholder="your degree here" id="degree" />
        <DateInput type="Start" id="d1" />
        <DateInput type="End" id="d2" />
      </div>
    );
  }
}

export default Education;
