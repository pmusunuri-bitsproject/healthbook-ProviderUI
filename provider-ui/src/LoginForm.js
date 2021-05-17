import React from 'react'
import InputField from './InputField'
import UserStore from './stores/UserStore';
import SubmitButton from './SubmitButton'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 10) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    reset() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async login() {
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }
        this.setState({
            buttonDisabled: true
        })
        try {
            let res = await fetch('https://services.healthbook.anikumar.net/user/53ecf50f-4923-5c88-97bd-1f21a744df5c', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            })
            let result = await res.json();
            console.log(result)
            if (result) {
                UserStore.isLoggedIn = true
                UserStore.username = res.name
            } else {
                this.reset()
                alert(result)
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="loginForm">
                Log in
                <InputField
                    type='text'
                    placeholder='NPI'
                    value={this.state.username ? this.state.username : ''}
                    onChange={(val) => this.setInputValue('username', val)}
                ></InputField>

                <InputField
                    type='password'
                    placeholder='password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={(val) => this.setInputValue('password', val)}
                ></InputField>

                <SubmitButton
                    text={'Log In'}
                    disabled={this.state.buttonDisabled}
                    onClick={() => this.login()}
                />

            </div>
        );
    }
}

export default LoginForm;
