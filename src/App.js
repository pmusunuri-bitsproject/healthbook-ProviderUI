import "./App.css";
import { observer } from "mobx-react";
import LoginForm from "./components/loginForm";
import React from "react";
import Dashboard from "./components/dashboard";

class App extends React.Component {
  state = {
    showUserLogin: true,
    showUserDashboard: false,
    isUserLoggedIn: false,
    user: {},
  };

  componentDidMount() {
    if (this.state.isUserLoggedIn) {
      let loggedUser = {
        username: "mspranav",
        displayName: "Pranav",
      };

      this.setState({
        showUserDashboard: true,
        showUserLogin: false,
        user: loggedUser,
      });
    }
  }

  handleLoginSuccess = (user) => {
    //console.log(user);
    this.setState({
      showUserDashboard: true,
      showUserLogin: false,
      isLoggedIn: true,
      user: user,
    });
  };

  handleLoginFailure = (error) => {
    console.error(error);
  };

  handleLogOut = () => {
    this.setState({
      showUserLogin: true,
      showUserDashboard: false,
      user: {},
      isUserLoggedIn: false,
    })
  };

  render() {
    return (
      <React.Fragment>
        {this.state.showUserLogin ? (
          <LoginForm
            onSuccess={this.handleLoginSuccess}
            onFailure={this.handleLoginFailure}
          />
        ) : null}
        {this.state.showUserDashboard ? (
          <Dashboard user={this.state.user} onLogOut={this.handleLogOut} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default observer(App);
