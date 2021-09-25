import React from 'react';
import styled,{css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import {useTodoDispatch} from '../TodoContext';


const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    display: none;

    &:hover{
        color:#ff6b6b;
    }
`

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    ${props =>
        props.done &&
        css`
            border: 1px solid #38d9a9;
            color:#38d9a9;
        `
    }
`
const TodoTitle = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;

    ${props =>
        props.done &&
        css`
            color:#ced4da;
        `
    }
    
`;

const TodoContBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &:hover{
        ${Remove}{
            display:initial;
        }
    }
`;

function TodoCont({id, done, text}){
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type : 'TOGGLE', id});
    const onRemove = () => dispatch({type : 'REMOVE', id});
    return(
        // 체크박스 할일 홉했을때 나오는 휴지통
        <TodoContBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle>
            <TodoTitle done={done}>{text}</TodoTitle>
            <Remove onClick={onRemove}><MdDelete/></Remove>
        </TodoContBlock>
    );
}

export default TodoCont;