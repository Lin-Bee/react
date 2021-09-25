import React from 'react';
import styled from 'styled-components'
import { useTodoState } from '../TodoContext';
import TodoCont from './TodoCont';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList(){
    const todos = useTodoState();
    return(
        //반복할것이다 cont 반복시 key가 필요함 jsx 렌더링을위해서 
        <TodoListBlock>
            {todos.map( todo=>(
                <TodoCont key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)
            )}
        </TodoListBlock>
    );
}

export default TodoList;