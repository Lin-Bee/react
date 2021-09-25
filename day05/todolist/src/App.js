import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoBody from './component/TodoBody';
import TodoHead from './component/TodoHead';
import TodoList from './component/TodoList';
import TodoFooter from './component/TodoFooter';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

function App() {
  return (
    <>
    <TodoProvider>
      <GlobalStyle />
      <TodoBody >
        <TodoHead/>
        <TodoList/>
        <TodoFooter/>
      </TodoBody >
    </TodoProvider>
    </>
  );
}

export default App;
