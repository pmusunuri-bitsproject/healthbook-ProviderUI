import React from "react";

class InputField extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container input-group mb-3">
          <input
            type={this.props.type}
            className="form-control"
            placeholder={this.props.placeholder}
            onChange={(e) => this.props.onChange(e.target.value)}
            autoComplete="true"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default InputField;
