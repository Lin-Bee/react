import React from 'react';
import Wrapper from './component/Wrapper';
import Hello from './component/Hello';
import Bye from './component/Bye';
import Counter from './component/Counter';
import Input from './component/Input';
import Input2 from './component/Input2';

function App(){
    return(
        <>
            <Wrapper>
                <Input2/>
            </Wrapper>
            {/* <Wrapper>
                <Counter/>
            </Wrapper> */}
            {/* <Wrapper>
                <Hello name="김이름" color="red" cant/>
                <Hello name="성이름" color="blue" isSpecial/>
                <Hello name="박이름" color="green"/>
                <Hello/>
                <Bye name="김이름" color="red" />
                <Bye name="성이름" color="blue" isSpecial/>
                <Bye name="박이름" color="green" cant/>
            </Wrapper> */}
        </>
    );
}

export default App;