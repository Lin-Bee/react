import React from 'react';

function Bye({name,color,cant}){
    return(
        <>
        <div>잘가라 {name} {cant?'잠깐 넌 아니다':''}</div>
        </>
    );
}

export default Bye; 