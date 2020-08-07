import React, { Component } from 'react'
import { Button } from 'antd';
import firebase from 'firebase'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Button type="primary" block onClick={()=> firebase.auth().signOut()}>
                    Sign out
                 </Button>
            </div>
        )
    }
}
