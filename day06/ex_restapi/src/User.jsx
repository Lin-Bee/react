import React from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUser(id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
} //callback에서 실행됨

function User(id){
    const [state] = useAsync( () => getUser(id), [id])    
    const {loading, data:user, error} = state;

    if (loading) return <div>로딩중..</div>;
      if (error) return <div>에러가 발생했습니다</div>;
      if (!user) return null;
      return (
        <>
        <h2>User {user.name} (상세)</h2>
        <ul>
            <li>
                <dl>
                    <dt>email</dt>
                    <dd>{user.email}</dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt>phone</dt>
                    <dd>{user.phone}</dd>
                </dl>
            </li>
        </ul>
        
        </>
      );
};

export default User;