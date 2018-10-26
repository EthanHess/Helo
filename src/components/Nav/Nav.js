import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../../App.css'; 
//import './NavBar.css';
import { connect } from 'react-redux';

const Nav = (props) => {
    console.log('props', props.location.pathname); 
    return (
        <div>
          { props.location.pathname === '/' ? <div></div> : <div className="navbar">
          Nav
          <button onClick={this.props.homeFn}>Home</button>
          <button onClick={this.props.newPostFn}>New Post</button>
          <button onClick={this.props.logoutFn}>Logout</button>
          </div> }
        </div>
    ); 
}

function mapStateToProps(state) {
    const { username, profilePic } = state; 
    return {
        username, 
        profilePic
    }
}

export default connect(mapStateToProps)(Nav); 