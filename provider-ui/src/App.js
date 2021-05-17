import './App.css'
import { observer } from 'mobx-react'
import UserStore from './stores/UserStore'
import LoginForm from './LoginForm'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      let result = await res.json();
      if (result) {
        UserStore.loading = false
        UserStore.isLoggedIn = true
        UserStore.username = result.name
      } else {
        UserStore.loading = false
        UserStore.isLoggedIn = false
      }
    } catch (e) {
      UserStore.loading = false
      UserStore.isLoggedIn = false
    }
  }

  async logOut() {
    try {
      UserStore.isLoggedIn = false
      UserStore.username = ''
    } catch (e) {
      console.log(e)
    }
  }

  render() {

    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="container">
            Loading, Please Wait ..........
                </div>
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              Welcome, {UserStore.username}

              <SubmitButton
                text={'LogOut'}
                disabled={false}
                onClick={() => this.logOut()}
              />

            </div>
          </div>
        )
      }
      return (
        <div className="app">
          <div className="container">
            <LoginForm />
          </div>
        </div>
      );
    }

  }
}

export default observer(App);
