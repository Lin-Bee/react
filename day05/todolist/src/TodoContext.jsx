//reduce사용할것입니다.
import React, {useRef, useReducer, createContext, useContext} from 'react';


const initialTodos = [
    {
        id:1,
        text:'학원오기',
        done:true
    },
    {
        id:2,
        text:'집에가기',
        done:false
    },
    {
        id:3,
        text:'밥먹기',
        done:false
    },
    {
        id:4,
        text:'잠자기',
        done:false
    },

];

function TodoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                    todo.id === action.id ? { ...todo, done: !todo.done} : todo
                ); //map 배열확인하고 체크해서 변환 반환하기
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`핸들이 정의되지 않았음: ${action}`);    
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(TodoReducer, initialTodos);
    const nextId = useRef(5);
    //return children;
    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

//custom 훅 -> 변수명과 매서드만쓰면 쓸수있는친구
export function useTodoState(){
    return useContext(TodoStateContext);
}
export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}
export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}