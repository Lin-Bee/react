import React,{useState} from 'react';
import Box from './Box';
import CheckBox from './CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e =>{
    setCheck(e.target.checked)
  }
  return (
    <div>
      <CheckBox onChange = {onChange} checked={check}>
       다음 약관에 모두 동의
      </CheckBox>
      <p>체크항목검사
        {check ? 'App에서 검사함':'App에서 체크해제'}
      </p>
      <Box/>
    </div>
  );
}

export default App;
