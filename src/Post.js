import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Post.css';

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
    
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]); 

    return (
      <div className="post">
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt="Jimmy"
            src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdlYnNpdGUlMjBsb2dpbiUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <h3>{username}</h3>
        </div>

        <img
          className="post__image"
          src={imageUrl}
          alt="will"
        />
        <h4 className="post__text">
          <strong>{username}</strong> {caption}
        </h4>

        <form>
          <input className="post__input" type="text" 
          placeholder="Add a comment..." value={comment} 
          onChange={(e) => setComment(e.target.value)} />
        </form>
      </div>
    );
}

export default Post
