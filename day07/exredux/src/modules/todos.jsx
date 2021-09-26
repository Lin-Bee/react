const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1; //todo 데이터에서 사용함 고유 id
export const addTodo = text => ({
    type:ADD_TODO,
    todo:{
        id:nextId++, //새 항목을 추가하고 nextId값에 1을더해준다.
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
  });

const initialState = [];

export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    todo.id === action.id //아이디가 일치하면
                    ?{...todo, done:!todo.done} //done값을 반환
                    :todo 
            );
        default:
            return state;
    }
};
