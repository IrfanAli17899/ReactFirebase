import React, { Component } from 'react'
import Form from './Components/loginForm'
import Dashboard from './Components/Dashboard'
import firebase from 'firebase'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, user, ...rest }) => {
    console.log("useruseruseruseruseruser");
    console.log(user);
    return (
        <Route
            {...rest}
            render={(props) => (user
                ? <Component {...props} />
                : <Redirect to="/login" />)}
        />
    )
}

export default class router extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user })
        })
    }






    render() {
        const { user } = this.state;
        console.log("user====>>>>")
        console.log(user)
        return (
            // <div className="main">
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={() => <Form user={(u) => {}} />} />
                        <PrivateRoute user={user} exact path="/" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            // </div>
        )
    }
}
