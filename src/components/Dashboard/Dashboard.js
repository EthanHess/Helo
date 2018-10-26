import React, { Component } from 'react'; 
import axios from 'axios'; 
import { connect } from 'react-redux'; 
import { updateUser } from '../../ducks/reducer';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {  //TODO, toggle option for "My Posts"
            searchText: '', 
            posts: [], 
            myPosts: true
        }

        this.fetchAllPosts = this.fetchAllPosts.bind(this); 
    }

    componentDidMount() {
        //fetch?
    }

    fetchAllPosts() {
        let myPosts = this.state.myPosts; //boolean (add to query string)
        const urlString = `/api/posts?uid=${this.props.id}`
        axios.get(urlString).then(response => {
            this.setState({ posts: response.data }); 
        }).catch(error => {
            console.log('error', error); 
        }); 
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
        console.log('this.props', this.props); 
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

function mapStateToProps(state) {
    const { id } = state;
    return {
      id
    }
}

export default connect(mapStateToProps, { updateUser })(Dashboard)
