import React, { Component } from 'react'; 

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {  //TODO, toggle option for "My Posts"
            searchText: '', 
            posts: []
        }

        this.fetchAllPosts = this.fetchAllPosts.bind(this); 
    }

    fetchAllPosts() {

    }

    updateSearchText = (val) => {
        this.setState({ searchText: val })
    }

    searchClicked = () => {
        
    }

    resetClicked = () => {
        this.setState({ searchText: '' })
    }

    render() {
        const postsArray = this.state.posts.map(post => {
            return (
                <div>
                    <div>{post.title}</div>
                    <div>{post.author}</div>
                    <img src={post.imageURL} alt=""/>
                </div>
            )
        })
        return (
            <div>Dashboard
                <input onChange={(e) => this.updateSearchText(e.target.value)}></input>
                {/* <input type="checkbox" value="My Posts">My Posts</input> */}
                <button onClick={this.searchClicked}>Search</button>
                <button onClick={this.resetClicked}>Reset</button>
                {postsArray}
            </div>
        )
    }
}
