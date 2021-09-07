import React from 'react';

function Wrapper({children}){ //children
    const style={
        border:'2px solid red',
        fontSize:30
    }
    return(
        <div style={style}>
            {children}
        </div>
    );
}

export default Wrapper;