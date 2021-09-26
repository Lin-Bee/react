import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '../compoment/Counter';
import {increase, decrease, setDiff} from '../modules/counter';

function CounterContainer(){

    //state yseSekectir - stire,getState()
    //useSelector는 리덕스 스토어의 상태를 조회한다
    const {number, diff} = useSelector(state =>({
        number : state.counter.number,
        diff : state.counter.diff
    }));

    const disapth = useDispatch();

    const onIncrease = () => disapth(increase());
    const onDecrease = () => disapth(decrease());
    const onSetDiff = diff => disapth(setDiff(diff));

    return(
        <Counter
            number={number}
            diff={diff}

            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;