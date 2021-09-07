import React,{useRef, useState, useEffect, useMemo, useCallback} from 'react';
import CreateUser from './CreateUser';

//useRef, useState, useEffect, useMemo 훅에서 가장 많이 사용함
// useState변수명 정하고 값을 정해주면 메서드를 통해 내용을 계속 바꿀수 있음 (js의 이벤트 핸들러가 필요함)
function cntSelectedUser(user){
    console.log('선택된 사용자수를 셈');
    console.log(user);
    return user.filter(user => user.active).length;
}

function User({user,onRemove,onToggle}){
    useEffect(() =>{
        console.log(`컴퍼넌트가 보여짐 user값이 설정되었습니다`);
        console.log(user);
        return () =>{
            console.log(`컴퍼넌트가 사라짐 user값이 바뀌기전`);
            console.log(user);
        }
    }, [user]); //의존값을 넣게 되면 load해올때 change , mount될 때 다 호출됨

    return(
        <div>
        <b type="button" onClick={()=>onToggle(user.id)} style={{color:user.active?'red':'blue'}}>{user.username}</b>({user.email})
        <button onClick={() => onRemove(user.id)}>제거</button>
        </div>
    )
}

function UserList(){
    const [inputs, setInputs] = useState({
        username:'',
        email:'',        
    });
    
    const {username, email} = inputs;

    // const onChange = (e)=>{
    //     const {name, value} = e.target;
    //     setInputs({
    //         ...inputs,
    //         [name] : value
    //     });
    // }
    //users라는게 변경이 될때 함수가 실행되고 변경되지 않을때 기존꺼 그대로 사용해라
    //input이 많을수록 useCallback을 쓰는것이 좋음
    //기존 값을 처리 하기 편하기 때문에
    //바뀐값만 알아서 처리해줌! 회원정보 or 기타등등
    const onChange = useCallback(
        e=>{
                const {name, value} = e.target;
                setInputs({
                    ...inputs,
                    [name] : value
                });
        },[inputs]
    );
    

    const [users,setUser] = useState([
        {
            id:1,
            username:'테스트1',
            email:'tst1@test.com',
            active : true
        },
        {
            id:2,
            username:'테스트2',
            email:'tst2@test.com',
            active : false
        },
        {
            id:3,
            username:'테스트3',
            email:'tst3@test.com',
            active : true
        }
    ]);

    const nextId = useRef(4); //리액트는 독립된 것에 const를 생성해ㅜㅁ
    const onCreate = useCallback(
        () =>{
            const user = {
                id:nextId.current,
                username,
                email
            }
            setUser([...users,user]);
    
            setInputs({
                username:'',
                email:''
            });
            nextId.current += 1;
        },[users,username, email]
    );
       
    const onRemove = useCallback(
        id =>{
            setUser(users.filter(user => user.id !== id));
        },[users]
    );

    const onToggle = useCallback(
        id =>{
            setUser(
                users.map(user =>
                user.id === id ? {...user, active: !user.active} : user)
            );
        },[users]
    );
    //UserList 라는 jsx형태를 만들어둠 
    //const count = cntSelectedUser(users); 도 사용가능
    const count = useMemo(() => cntSelectedUser(users), [users]);
   

    return(
        <>
            {/*만약 위에서 function User를 만들지 않았다면 <b>{users[0].username}</b> ({users[0].email}) */}
            <CreateUser
                username = {username}
                email = {email}
                onChange = {onChange}
                onCreate = {onCreate}
            />
            <div>
            {  
                users.map((user, index) =>(
                    <User user = {user} key = {index} onRemove = {onRemove} onToggle={onToggle}/>
                ))
            }
            </div>
            <div>카운트 : {count}</div>
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}
        </>
    );
}
//React.memo(); 라고 해주어야지만 useMemo사용이가능함
export default React.memo(UserList); 