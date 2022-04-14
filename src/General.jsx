import React from "react";
import TextInput from "./components/TextInput";

class General extends React.Component {
  render() {
    return (
      <div>
        <h2>General</h2>
        <TextInput placeholder="input name here" id="name" />
        <TextInput placeholder="write a short bio about yourself" id="bio" />
        <TextInput placeholder="your email here" id="mail" type="email" />
        <TextInput placeholder="your phone number here" id="phone" type="tel" />
      </div>
    );
  }
}

export default General;
