import React from 'react';
import Posts from './components/Posts'
import Searcher from './components/Searcher'
import CountSpan from './components/CountSpan'
const Page = props => {
  const {comments, posts} = props;
  return(
    <div className="wrapper">
      <header>
        <Searcher posts={posts} comments={comments}/>
        <CountSpan posts={posts} comments={comments}/>
      </header>
      <div class="results"></div>
      <main>
        <Posts posts={posts} comments={comments}/>
      </main>
    </div>
  )
}

export default Page;