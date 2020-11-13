import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { match, posts } = this.props;
        const id = match.params.id;
        const post = posts.find(x => x.id === id);
        return (<div className="single-photo">
            <Photo post={post} />
            <Comments />
        </div>)
    }
}
export default Single;