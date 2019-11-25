import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
            {console.log(this.props.posts)}
     {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
