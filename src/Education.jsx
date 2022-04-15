import React from "react";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      d1: "",
      d2: "",
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
      <div id="Education">
        <h2>Education</h2>
        <TextInput
          placeholder="your school name here"
          id="school"
          setValues={this.setValues}
        />
        <TextInput
          placeholder="your degree here"
          id="degree"
          setValues={this.setValues}
        />
        <DateInput type="Start" id="d1" setValues={this.setValues} />
        <DateInput type="End" id="d2" setValues={this.setValues} />
      </div>
    );
  }
}

export default Education;
