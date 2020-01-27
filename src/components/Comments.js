import React from 'react'
const Comments = props => {
    const comments = props.comments;
    const comment = comments.map(com => {
        const bodyUppercase = com.body.charAt(0).toUpperCase() + com.body.slice(1);
        const nameUppercase = com.name.charAt(0).toUpperCase() + com.name.slice(1);
        return(
            <div className="comment hidden" id={com.id} key={com.id}>
                <div className="details">
                    <i className="fas fa-user"></i>
                    <div className="user">
                        <span className="email">{com.email}</span>
                        <p>{nameUppercase}</p>
                    </div>
                </div>
                <p className="comment-text">{bodyUppercase}</p>
            </div>
        )
    })
    return comment
}

export default Comments
