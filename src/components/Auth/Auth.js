import React, { Component } from 'react'; 
import axios from 'axios'; 

export default class Auth extends Component {
    constructor() { //Props? 
        super(); 
        this.state = {
            username: '',
            password: '',
            profilePic: ''
        }
    }

    updateUsername = (val) => {
        this.setState({ username: val })
    }

    updatePassword = (val) => {
        this.setState({ password: val })
    }

    //TODO finish

    loginHandler = () => {
        axios.post('/api/login').then(response => {

        }).catch(error => {

        })
    }

    registerHandler = () => {
        axios.post('/api/register').then(response => {

        }).catch(error => {
            
        })
    }

    render() {
        return (
            <div>
            <div>Auth</div>
            <div>
                <input placeholder="Username" onChange={(e) => this.updateUsername(e.target.value)}></input>
                <input placeholder="Password" onChange={(e) => this.updatePassword(e.target.value)}></input>
            </div>
            <div>
                <button onClick={this.loginHandler}>Login</button>
                <button onClick={this.registerHandler}>Reqgister</button>
            </div>
            </div>
        )
    }
}
