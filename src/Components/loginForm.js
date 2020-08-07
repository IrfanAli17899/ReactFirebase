import React, { Component } from 'react'
import './loginForm.css'
import { Input, Button, Checkbox } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import firebase from '../config/firebase'


export default class loginForm extends Component {
    state = {
        email: "",
        password: "",
        login: true
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
    }
    authantication = async () => {
        try {
            const { email, password, login } = this.state
            var user = await firebase.auth()
            [login ? "signInWithEmailAndPassword" : "createUserWithEmailAndPassword"](email, password);
            this.props.user(user)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const { login } = this.state
        return (
            <div className="main">
                <form >
                    <Input
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Username"
                        prefix={<UserOutlined />}
                    />
                    <br />
                    <br />
                    <Input.Password
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        prefix={<UnlockOutlined />}
                    />
                    <br />
                    <br />
                    {login ? <p>Forgotten Password?</p> : <Checkbox>Terms & Conditions</Checkbox>}
                    {!login && <br />}
                    {!login && <br />}
                    <Button onClick={this.authantication} type="primary" block>
                        {login ? "Log In" : "Sign In"}
                    </Button>
                    <br />
                    <br />
                    <p style={{ cursor: "pointer", color: "rgb(0, 127, 230)" }} onClick={() => this.setState({ login: !login })}>{login ? "or Register now!" : "Go Back"}</p>
                </form>
            </div>
        )
    }
}
