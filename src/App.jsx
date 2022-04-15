import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "./styles/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      mail: "",
      phone: "",
      school: "",
      degree: "",
      d1: "",
      d2: "",
      position: "",
      company: "",
      job: "",
      d3: "",
      d4: "",
    };
  }

  updateData = (id, newValue) => {
    this.setState({
      [id]: newValue,
    });
  };

  logData = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <header>
          <h1>CV Creator</h1>
          <div className="push-right">© Yosua Nicolaus 2022</div>
        </header>
        <General updateData={this.updateData} />
        <Education updateData={this.updateData} />
        <Experience updateData={this.updateData} />
        <button onClick={this.logData}>Log data</button>
      </div>
    );
  }
}

export default App;
