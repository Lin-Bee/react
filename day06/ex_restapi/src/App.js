import React from 'react';
import Users from './Users';
import UsersReducer from './UsersReducer';
import Users1 from './Users1';
import User from './User';
import useAsync from './useAsync';

function App() {
  return (
    <>
      <Users/>
      <UsersReducer/>
      <Users1/>
    </>
  );
}

export default App;
