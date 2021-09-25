import {useEffect, useReducer} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return{
                loading:true,
                data:null,
                error:null
            }
        case 'SUCCESS':
            return{
                loading:false,
                data:action.data, //만들어보내주면됨
                error:null
            }
        case 'ERROR':
            return{
                loading:false,
                data:null,
                error:<div>에러가 발생했습니다</div>
            }
        default:
            throw new Error(`디스패치된 액션핸들값이 없음 ${action.type}`);
    }
}

function useAsync(callback, deps = [], skip=false){
    const [state, dispatch] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    });

    const fetchData = async () => {
        dispatch({type:'LOADING'});
        try {    
          console.log(skip);      
          const data = await callback();
          dispatch({type:'SUCCESS', data:data});

        } catch (e) {
            
            dispatch({type:'ERROR', error:e});
        }
    };

    useEffect(() => {
        if(skip) return;    
        fetchData();

      }, deps);
    
    return {state,fetchData}
};

export default useAsync;
//custom hook으로 빼냄 - 컨트롤러 함수 미리 만들어둠