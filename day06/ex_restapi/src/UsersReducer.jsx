import React,{useState, useEffect, useReducer} from 'react';
import axios from 'axios';
//yarn add axios

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

function UsersReducer(){
    const [state, dispatch] = useReducer(reducer,{
        loading:false,
        data:null,
        error:null
    });

    const fetchUsers = async () => {
        dispatch({type:'LOADING'});

        try {          
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          dispatch({type:'SUCCESS', data:response.data});

        } catch (e) {
            
            dispatch({type:'ERROR', error:e});
        }
    };

    useEffect(() => {    
        fetchUsers();
      }, []);

      const {loading, data:users, error} = state; //state값을 매핑

      if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;
      if (!users) return null;
      return (
        <>
        <h2>UsersReducer</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          ))}
        </ul>
        <button onClick={fetchUsers}>리로더</button>
        </>
      );
    }

export default UsersReducer;