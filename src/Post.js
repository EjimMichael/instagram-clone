import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({ username, caption, imageUrl }) {
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
      </div>
    );
}

export default Post
