import React,{useState} from "react";
import styled,{css} from "styled-components"; //하늘색 부분 내가 설정하는 이름임
//yarn add styled-components 스타일 사용을 위해 설치함
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import Dialog from "./Dialog";

//yarn add polished 스타일 사용을 위해 설치함
//1.CSS 2.CSSMODULE 3.SCSS 4.STYLED-COMPONETS
//위에 선언한 styled componet를 이용해서div 스타일을 잡고 Circle이라는 이름으로 쓸거야
const Circle = styled.div`
  width:300px; height:300px; background:${props =>props.color || '#333'}; border-radius:50%;

  ${props =>
    props.bigone &&
    css`
    width: 500px; height:500px;
    `
  }
`;

const AppContainer = styled.div`
width: 80%;
margin:0 auto;
margin-top:3rem;
border:1px solid #000;
padding:1rem;
`;

const ButtonGroup = styled.div`
  margin-left:10px;
  &+&{margin-top:1rem;}
`;

function App() {
  const [dialog,setDialog] = useState (false);

  const onClick=() =>{
    setDialog(true);
  }
  const onConfirm=() =>{
    setDialog(false);
  }
  const onCancle=() =>{
    setDialog(false);
  }

  return (
    <div>
    <ThemeProvider theme ={{
      palette:{
        blue:'#00ffff',
        red:'#ff0000',
        gray:'#333333'
      }
    }}>
      <AppContainer>
        <ButtonGroup>
          <Button size="small" color="red">버튼1</Button>
          <Button color="red" >버튼2</Button>
          <Button size="large" color="red">버튼3</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="small" color="blue">버튼1</Button>
          <Button color="blue">버튼2</Button>
          <Button size="large" color="blue">버튼3</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="small" color="gray">버튼1</Button>
          <Button color="gray">버튼2</Button>
          <Button size="large" color="gray" fullwidthStyled>버튼3</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="large" color="gray" fullwidth outline>버튼full</Button>
          <Button size="small" color="gray" fullwidth onClick={onClick}>버튼full</Button>
        </ButtonGroup>
      </AppContainer>

      <Dialog
      title="정말삭제하시겠습니까"
      confirmText="삭제"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancle={onCancle}
      visible={dialog}
      >
      데이터를 삭제하시겠습니까?</Dialog>

    </ThemeProvider>
    
    <Circle color="red" />
    <Circle color="blue" bigone/>
    </div>
  );
}

export default App;