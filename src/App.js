import React, { Component } from 'react';
import './App.css';

import routes from './routes'; 

//Imports
import Nav from './components/Nav/Nav'; 

class App extends Component {

  home = () => {
    window.location = '/dashboard'
  }

  newPost = () => {
    window.location = '/new'
  }

  logout = () => {
    window.location = '/'
  }

  render() {
    return (
      <div>
        <Nav 
          location={window.location}
          homeFn={this.home}
          newPostFn={this.newPost}
          logoutFn={this.logout}
        />
        { routes }
      </div>
    );
  }
}

export default App;
