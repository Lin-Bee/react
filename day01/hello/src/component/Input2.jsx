import React,{useState, useRef} from 'react';

function Input2(){
    const [inputs, setInputs] = useState({
        name : '',
        age : '',
        phone : ''
    });

    const nameInput = useRef();

    //배열과 객체를 어떻게 사용하는지
    const {name, age, phone} = inputs; // 비구조화 할당을 통해 값을 추출


    const onChange = (e)=>{
        const {value, name} = e.target // e.target dom 객체안에서 name 과 value를 추출
        setInputs({
            ...inputs, //... 의 의미 기존의 input의 객체를 복사한 후에 
            [name] : value // name키를 가지는 value로 설정한다.  
        });
    }
    const onReset = () =>{
        setInputs({
            name : '',
            age : '',
            phone : ''
        });
        nameInput.current.focus();
    }

    return(
        <div>
            <form action="">
                <label htmlFor="name">이름 : <input onChange={onChange} type="text" name="name" value={name} ref={nameInput}/></label>
                <label htmlFor="age">나이 : <input onChange={onChange} type="text" name="age" value={age} /></label>
                <label htmlFor="phone">폰 : <input onChange={onChange} type="text" name="phone" value={phone}/></label>
                <button onClick={onReset}>초기화</button>
            </form>
            <div><b>값:{phone}/{name}/{age}</b></div>
        </div>
    );
}

export default Input2;