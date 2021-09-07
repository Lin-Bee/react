import React from 'react';

function CreateUser({username, email, onChange, onCreate}){
    return(
        <div>
            <form action="">
            <input type="text" name="username" onChange={onChange} value={username} />
            <input type="text" name="email" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록하기</button>
            </form>
        </div>
    );
}
//React.memo(); 라고 해주어야지만 useMemo사용이가능함
export default React.memo(CreateUser);