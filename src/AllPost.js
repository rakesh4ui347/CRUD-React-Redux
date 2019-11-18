import React, { Component } from 'react';


class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
            {console.log(this.props.posts)}
            </div>
        );
    }
}


export default AllPost;
