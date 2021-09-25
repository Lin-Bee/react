import React from 'react';
import styled from 'styled-components'

const TodoBodyBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
`;
function TodoBody({children}){
    return <TodoBodyBlock>{children}</TodoBodyBlock>;
};

export default TodoBody;
