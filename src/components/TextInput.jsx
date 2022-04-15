import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.type;
    this.id = props.id;
    this.placeholder = props.placeholder;
    this.state = {
      value: "",
    };
  }

  inputHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.props.setValues(e.target.id, e.target.value);
  };

  onSubmitInput = (e) => {
    e.preventDefault();
    console.log("submitted " + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitInput}>
        <input
          type={this.type}
          name={this.id}
          id={this.id}
          placeholder={this.placeholder}
          onChange={this.inputHandler}
          value={this.state.value}
        />
      </form>
    );
  }
}

TextInput.defaultProps = {
  placeholder: "placeholder...",
  type: "text",
};

export default TextInput;
