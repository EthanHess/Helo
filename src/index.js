import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'; 
import store from './ducks/store'; 
import { Provider } from 'react-redux'; 

ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// Go to Nav and bring in connect from react-redux.
// Write the mapStateToProps function at the bottom of the file.
// Take the username and profile picture off of the Redux state.
// Now invoke connect, passing in mapStateToProps. Immediately invoke it again passing in the name of the component.
// Now if you console.log props inside the Nav component you should see the values coming from the Redux state.
// Set up the user profile picture and username to display. This will be pretty boring looking until we update these values in the next step