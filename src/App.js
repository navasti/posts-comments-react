import React, {useEffect, useState} from 'react';
import './App.css';
import Post from './components/Post';
const App = () => {
  const postsURL = `https://jsonplaceholder.typicode.com/posts`;
  const commentsURL = `https://jsonplaceholder.typicode.com/comments`;
  
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const fetching = () => {
    setIsLoading(true)

    // fetching posts
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
      const comments = data.slice(0,80);
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
    content = [];
    for(let i=0; i<posts.length; i++){
      console.log(posts[i].title)
      content.push(<Post postTitle={posts[i].title} postId={posts[i].id} postBody={posts[i].body} commentsName={comments[i].name} commentsId={comments[i].id}
      commentsEmail={comments[i].email} commentsBody={comments[i].body}/>)
    }
    // content = (
      // <Post/>
      // <div className="post">
      //   <h1>POST</h1>
      //   <p>user id: {posts[0].userId}</p>
      //   <p>id : {posts[0].id}</p>
      //   <p>title : {posts[0].title}</p>
      //   <p>body : {posts[0].body}</p>
      //   <br/>
      //   <h1>COMMENTS</h1>
      //   <p>post id: {comments[0].postId}</p>
      //   <p>id: {comments[0].id}</p>
      //   <p>name: {comments[0].name}</p>
      //   <p>email: {comments[0].email}</p>
      //   <p>body: {comments[0].body}</p>
      // </div> 
    // )
  }else if(!isLoading && (!posts || posts.length === 0) && (!comments || comments.length === 0)){
    content = <p>Couldn't fetch any data.</p>
  }
  return content;
}

export default App;
