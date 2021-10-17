import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'


export const App = () => {
  console.log("App レンダリング");

  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
