import React, {useState} from 'react'; //{} 중괄호가 들어가는 경우 

function Counter(){

    const [number, setNumber] = useState(0); //2개의 배열값이 필요함

    const onIncrese = () =>{
        console.log('+1');
        setNumber(number+1);
    }
    const onDecrese = () =>{
        console.log('-1');
        setNumber(number-1);
    }
    return(
        <div>
            <h2>{number}</h2>
            <button type="button" name="onIncrese" onClick={onIncrese}>+1</button>
            <button type="button" name="onDecrese" onClick={onDecrese}>-1</button>
        </div>
    );
}

export default Counter;