import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { EditTodo } from './components/EditTodo'


const Nabvar = styled.nav`
  background: #dbfffe;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 3px;
`

const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`


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
      <Nabvar>
        <Logo>
          TODO
        </Logo>
        <NavItems>
          <NavItem>
            <Link to="/todos">
              Todos
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/todos/new">
              Add New Todo
            </Link>
          </NavItem>
        </NavItems>
      </Nabvar>
      <Wrapper>
        <Switch>
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/todos/new" component={AddTodo} />
          <Route path="/todos/:id/edit" component={EditTodo} />
        </Switch>
      </Wrapper>
    </>
  );
};
