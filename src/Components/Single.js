import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { match, posts } = this.props;
        const id = match.params.id;
        const post = posts.find(x => Number(x.id) === Number(id));
        const comments = this.props.comments[id] || [];
        const index = this.props.posts.findIndex(x => Number(x.id) === Number(id));

        if (this.props.loading === true) {
            return <div className="loader">...loading</div>
        } else if (post) {
            return (<div className="single-photo">
                <Photo post={post} {...this.props} index={index} />
                <Comments startAddingComment={this.props.startAddingComment} comments={comments} id={id} />
            </div>)
        } else {
            return <h1>...no post founds</h1>
        }
    }
}
export default Single;