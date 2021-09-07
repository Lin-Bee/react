import React,{useState} from "react";
import styled from "styled-components";
import Button from "./Button";

const DarkBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.6);
    transition:0.5s all;
`;

const DialogBlock = styled.div`
    width: 400px;
    padding:1.5rem;
    background:#fff;
    border-radius:4px;
    h2{
        margin:0;
        font-size:2rem;
    }
    p{
        font-size:1.125rem;
    }
`;

const ButtonGroup = styled.div`
    margin-top:2.5rem;
    display:flex;
    justify-content:flex-end;
`;

function Dialog({children, title, visible, onConfirm, onCancle, confirmText, cancelText}){
    if(!visible) return null;
    return(
        <div>
            <DarkBackground>
                <DialogBlock>
                    <div className="title">{title}</div>
                    <p className="children">{children}</p>
                    <ButtonGroup>
                        <Button color="red" onClick={onConfirm}>{confirmText}</Button>
                        <Button color="gray" onClick={onCancle}>{cancelText}</Button>
                    </ButtonGroup>
                </DialogBlock>
            </DarkBackground>
        </div>
    );
}

Dialog.defaultProps = {
    confirmText:'확인',
    cancelText:'취소'
}

export default Dialog;