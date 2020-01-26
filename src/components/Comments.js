import React from 'react'
const Comments = props => {
    const comments = props.comments;
    const comment = comments.map(com => (
        <div className="comment hidden" id={com.id} key={com.id}>
            <div className="details">
                <i className="fas fa-user"></i>
                <div className="user">
                    <span className="email">{com.email}</span>
                    <p>{com.name}</p>
                </div>
            </div>
            <p className="comment-text">{com.body}</p>
        </div>
    ))
    return comment
}

export default Comments
