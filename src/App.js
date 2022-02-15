import React, { useState } from 'react';
import Header from './components/Header';
import AddPostForm from './components/AddPostForm';

const App = () => {
  const [posts, addPostList] = useState([]);

  console.log(posts);

  return (
    <div className="App">
        <Header/>
        <AddPostForm posts={posts} addPostList={addPostList}/>
    </div>
  )
}

export default App