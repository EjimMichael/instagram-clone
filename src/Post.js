import React from 'react';
import './Post.css';

function Post() {
    return (
      <div className="post">
        <h3>username</h3>

        <img
          className="post__image"
          src="https://images.hindustantimes.com/img/2021/05/04/1600x900/Screenshot_2021-05-04_at_10.59.02_AM_1620106464015_1620106477504.png"
          alt="will"
        />
        <h4 className="post__text"><strong>jimmy_solade</strong>: workout session completed</h4>
      </div>
    );
}

export default Post
