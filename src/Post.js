import React,{Component} from 'react';


class Post extends  Component{
    render(){
        return (
            <div className="post">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.message}</p>
            </div>
        )
    }
}

export default (Post);
