import React from 'react'
const CountSpan = props => {
    const {posts, comments} = props;
    const span = <span>Posts: {posts.length} <br/> Comments: {comments.length * posts.length}</span>;
    return span
}
export default CountSpan
