import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);
