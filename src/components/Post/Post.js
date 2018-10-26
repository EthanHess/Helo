import React, { Component } from 'react'; 
import axios from 'axios'; 

export default class Post extends Component {
    componentDidMount() {
        console.log('post id', this.props.match.params.postid); 
        axios.get(`/api/posts/${this.props.match.params.postid}`).then(response => {
            
        }).catch(error => {

        })
    }
    render() {
        return (
            <div>Post</div>
        )
    }
}
