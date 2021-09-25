import React from 'react';
import styled from 'styled-components'
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h2{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left{
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead(){
    const todos = useTodoState();
    //console.lot(`todos`);
    const todoNum = todos.filter(todo => !todo.done).length;
    const today = new Date();
    //toLocalDateString

    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dateName = today.toLocaleDateString('ko-KR',{
        weak: 'long'
    });


    return(
        <TodoHeadBlock className="todoHead">
            <h2>{dateString}</h2>
            <div className="day">{dateName}</div>

            <div className="tasks-left">할일 {todoNum} 개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;