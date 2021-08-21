import React, { useState } from 'react';
import './App.css';
import Post from './Post'; 

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Jimmy_Solade",
      caption: "wow it works",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdlYnNpdGUlMjBsb2dpbiUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "Jimmy_Solade",
      caption: "wow it works",
      imageUrl:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdlYnNpdGUlMjBsb2dpbiUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="IG logo"
        />
      </div>
      <h1>React</h1>

      {
        posts.map((post) => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
 

    </div>
  );
}

export default App; 
