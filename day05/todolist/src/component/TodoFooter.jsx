import React,{useState} from 'react';
import styled,{css} from 'styled-components'

const ToogleButton = styled.button`
    background: #38d9a9;
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%,50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    text-align:center;
    transition: 0.2s all ease-in;

    &:hover{
        background:#49e4b6;
    }
    &:active{
        background:#2ac194;
    }

    ${props =>
        props.open &&
        css`
        background:#ff6b6b;
            &:activ{background:#bd4848;}
            $:hover{background:#f57777;}
            transform:translate(-50%,50%) rotate(45deg);
            bottom: 0px;
        `
    }
    
`;

const TodoCreateBlock = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    display:block;

    ${props =>
        props.open &&
        css`
        display:block;
        `
    }

`;

const FormBox = styled.form`
    background: #f8f9fa;
    padding: 32px 32px 72px 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`

const InputBox = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`

function TodoFooter(){
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    return(
        <>
        {open &&(
        <TodoCreateBlock>
            <FormBox>
                <InputBox autoFocus placeholder="할일을입력하세요"/>
            </FormBox>
        </TodoCreateBlock>
        )}
        <ToogleButton onClick={onToggle} open ={open}>+</ToogleButton>
        </>
    );
}

export default TodoFooter;