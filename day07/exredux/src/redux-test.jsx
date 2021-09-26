import { createStore } from "redux";

const initialState = {
    counter : 0,
    text: '',
    list: []
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

function increase(){
    return{
        type: INCREASE
    };
}

function decrease(){
    return{
        type: DECREASE
    };
}

const changeText = text =>({
    type: CHANGE_TEXT,
    text
});

const addToList = text =>({
    type: ADD_TO_LIST,
    text
});

//리듀서 생성

function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                counter : state.counter+1
            };
        case DECREASE:
            return{
                ...state,
                counter : state.counter-1
            };
        case CHANGE_TEXT:
            return{
                ...state,
                text : action.text
            };
        case ADD_TO_LIST:
            return{
                ...state,
                list : state.list.concat(action.item)
            };
        default :
            return state;
    }
}

//스토어를 생성
const store = createStore(reducer);
console.log(store.getState()+`스토어의 상태값을 조회`);

//스토어 안의 상태가 바뀔때마다 호출되는 리스너 함수
const listenner = () =>{
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listenner);

//스토어 디스패치
store.disapth(increase()); //증가
store.disapth(decrease()); //감소
store.disapth(changeText(`안녕하세요`)); //변경
store.disapth(addToList({
    id:1,
    name:'test'
})); //리스트추가