import React, {useEffect, useState} from 'react';
import Page from './Page';

const AppData = () => {
    const postsURL = `https://jsonplaceholder.typicode.com/posts`;
    const commentsURL = `https://jsonplaceholder.typicode.com/comments`;
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);

    const fetching = () => {
        // fetching posts
        setIsLoading(true)
        fetch(postsURL)
        .then(response => {
        if(!response.ok) throw new Error('failed to fetch posts')
        return response.json();
        })
        .then(data => {
        const posts = data.slice(0,20);
        setIsLoading(false);
        setPosts(
            posts.map(post => ({
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body
            }))
        )
        })
        .catch(error => {
        console.log(error)
        setIsLoading(false)
        })

        // fetching comments
        fetch(commentsURL)
        .then(response => {
        if(!response.ok) throw new Error('failed to fetch comments')
        return response.json();
        })
        .then(data => {
        const comments = data.slice(0,4);
        setIsLoading(false);
        setComments(
            comments.map(comment => ({
            id: comment.id,
            name: comment.name,
            email: comment.email,
            body: comment.body,
            }))
        )
        })
        .catch(error => {
        console.log(error)
        setIsLoading(false)
        })
    }
    
    useEffect(()=>{
        fetching();
    },[])
    
    let content = <h1>loading</h1>;

    if(!isLoading && (posts && posts.length > 0) && (comments && comments.length > 0)){
        content = <Page comments={comments} posts={posts}/>
    }else if(!isLoading && (!posts || posts.length === 0) && (!comments || comments.length === 0)){
        content = <p>Couldn't fetch any data.</p>
    }
    return content;
}

export default AppData
