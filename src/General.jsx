import React from "react";
import TextInput from "./components/TextInput";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      mail: "",
      phone: "",
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
      <div id="General" className="main">
        {/* <h2>General</h2> */}
        <div>
          <TextInput
            placeholder="input name here"
            id="name"
            setValues={this.setValues}
          />
          <TextInput
            placeholder="write a short bio about yourself"
            id="bio"
            setValues={this.setValues}
          />
        </div>
        <div className="mini">
          <TextInput
            placeholder="your email here"
            id="mail"
            type="email"
            setValues={this.setValues}
          />
          <TextInput
            placeholder="your phone number here"
            id="phone"
            type="tel"
            setValues={this.setValues}
          />
        </div>
      </div>
    );
  }
}

export default General;
