import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class App extends React.Component {
  render() {
    return (
      <div>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
