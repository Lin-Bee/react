//액션타입생성
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션생성함수
export const setDiff = diff => ({type : SET_DIFF, diff});
export const increase = diff => ({type : INCREASE, diff});
export const decrease = diff => ({type : DECREASE, diff});


//초기값선언
const initialState = {
    number:0,
    diff:1
};



//리듀서 선언
//export default
export default function counter(state = initialState, action){
    switch(action.type){
        case SET_DIFF:
            return{
                state,
                diff:action.diff
            };
        case INCREASE:
            return{
                state,
                diff:state.number + action.diff
            };
        case DECREASE:
            return{
                state,
                diff:state.number - action.diff
            };
        default:
            return state;
    }
};