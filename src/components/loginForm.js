import React from "react";
import InputField from "./inputField";
import SubmitButton from "./submitButton";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  setInputValue = (property, val) => {
    val = val.trim();
    this.setState({
      [property]: val,
    });
  }

  reset = () => {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
  };

  login = () => {
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }
    this.setState({
      buttonDisabled: true,
    });
    fetch(
      "https://services.healthbook.anikumar.net/providers/details/77829903082",
      {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((user) => {
        //console.log(user);
        this.props.onSuccess(user);
      })
      .catch((error) => {
        console.log(error);
        this.reset();
        this.props.onFailure(error);
      });
  };

  render() {
    return (
      <div className="container text-center width-50 mt-5">
        <h3>Log In</h3>
        <form method="get" action="#login">
        <InputField
          type="text"
          placeholder="NPI"
          onChange={(val) => this.setInputValue("username", val)}
        />
        <InputField
          type="password"
          placeholder="password"
          onChange={(val) => this.setInputValue("password", val)}
        />
        <SubmitButton text={"Log In"} onClick={this.login} />
        </form>
      </div>
    );
  }
}

export default LoginForm;
