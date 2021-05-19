import React from 'react'

class SubmitButton extends React.Component {

  render() {
    return (
      <div className="container">
          <button 
          className = "btn btn-primary width-100"
          disabled  = {this.props.disabled}
          onClick = { () => this.props.onClick()}
          >
              {this.props.text}
          </button>
      </div>
    );
  }
}

export default SubmitButton;
