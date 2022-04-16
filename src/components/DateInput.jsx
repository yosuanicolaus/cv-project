import React from "react";

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.type;
    this.id = props.id;
    this.state = {
      date: "",
    };
  }

  onDateChange = (e) => {
    this.setState({
      date: new Date(e.target.value).toISOString().split("T")[0],
    });
    this.props.setValues(e.target.id, e.target.value);
  };

  render() {
    return (
      <div className="mini flat">
        <label htmlFor={this.id}>{this.type}: </label>
        <input
          type="date"
          name={this.id}
          id={this.id}
          onChange={this.onDateChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

DateInput.defaultProps = {
  type: "start / end",
};

export default DateInput;
