import React,{useState} from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";
//import Users from "./Users";

async function getUsers(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    return response.data;
} //callback에서 실행됨

function Users1(){
    const [userId, setUserId] = useState(null);
    const [state, refetch] = useAsync(getUsers, [], true);    

    const {loading, data:users, error} = state;

      if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;
      return (
        <>
        <h2>Users (using Hook)</h2>
        <ul>
          {users && users.map((user) =>  
            <li 
              key={user.id}
              onClick={() => {setUserId(user.id);}}
              style={{cursor: "pointer"}}>
                {user.name} ({user.email})
            </li>
          )}
        </ul>
        <button onClick={() => {refetch();}}>리로딩</button>
        {userId && <User id={userId}/>}
        </>
      );
};

export default Users1;