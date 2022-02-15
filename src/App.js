import React, { useState } from 'react';
import Header from './components/Header';
import AddPostForm from './components/AddPostForm';
import ListPosts from './components/ListPosts';

const App = () => {
  const [posts, addPostList] = useState([]);

  console.log(posts);

  return (
    <div className="App">
        <Header/>
        <AddPostForm posts={posts} addPostList={addPostList}/>
        <ListPosts posts={posts}/>
    </div>
  )
}

export default App