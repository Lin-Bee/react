import React from 'react'; //react다

// function Hello(props){
//     return (
//         <>
//         <div style={{color:props.color}}>안녕하다{props.name}</div>
//         {/*설정된 스타일 불러오기 ▲   | 설정되지 않을때 ▼*/}
//         <div>안녕하다{props.name}</div>
//         </>
//     );
// }

function Hello({name,color, isSpecial}){
    //☆
    return (
        <>
        <div style={{color}}>{isSpecial?'☆':''}안녕하다{name}</div> 
        {/* react는 삼항연산자를 사용 함 조건?참:거짓 */}
        {/* or */}
        {/* {isSpecial && '☆' */}
        </>
    );
}

Hello.defaultProps ={
    color:'gray',
    name:'이름이 없습니다'
}
export default Hello; //Hello를 부르면 가겠다
