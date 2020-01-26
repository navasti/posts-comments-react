import React from 'react'
import Comments from './Comments'
const Posts = props => {
    const expandComments = e => {
        const post = e.target.parentNode.parentNode;
        const comment = [...post.querySelectorAll('.comment')];
        const arrow = post.querySelector('.fa-chevron-down');
        comment.forEach(com => com.classList.toggle('hidden'));
        arrow.classList.toggle('active');
    }
    const posts = props.posts;
    const post = posts.map(post => (
        <article className="post" id={post.id} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="show-comments" onClick={expandComments}>
                <span>Show comments</span>
                <i className="fas fa-chevron-down"></i>
            </div>
            <Comments comments={props.comments}/>
        </article>
    ))
    return post
}

export default Posts
