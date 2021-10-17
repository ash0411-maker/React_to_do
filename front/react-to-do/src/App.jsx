import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'


export const App = () => {
  console.log("App レンダリング");

  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/todos/')
      .then(response => setTodos(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};
