import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux'; 
import { updateUser } from '../../ducks/reducer';

class Auth extends Component {
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
        const existingUser = {
            name: this.state.username, 
            password: this.state.password,
            picture: this.state.profilePic
        }
        axios.post('/api/login', existingUser).then(response => {
            const { userId, username, profilePic } = response.data; 
            updateUser(userId, username, profilePic); //this.props? 
        }).catch(error => {
            console.log('error logging in', error)
        })
    }

    registerHandler = () => {
        const newUser = {
            name: this.state.username, 
            password: this.state.password,
            picture: this.state.profilePic
        }
        axios.post('/api/register', newUser).then(response => {
            const { userId, username, profilePic } = response.data; 
            updateUser(userId, username, profilePic); 
        }).catch(error => {
            console.log('error regestering', error)
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

export default connect(null, { updateUser })(Auth);