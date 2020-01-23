import React from 'react'
import Comments from './Comments'
const Post = props => {
    return (
        <div className="post">
            <p>T I T L E  {props.postTitle}</p>
            <p>B O D Y {props.postBody}</p>
            <p>I D {props.postId}</p>
            <div className="comments">
                <Comments id={props.commentsId} name={props.commentsName} body={props.commentsBody} email={props.commentsEmail} />
            </div>
        </div>
    )
}

export default Post
