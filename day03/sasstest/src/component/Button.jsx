import React from 'react';
import './Button.scss'
import classNames from 'classnames';
                                                         //...rest 뭐가될진 모르지만 실행되라
function Button({children, size, color, outline, fullwidth, ...rest}){
    return(
        // <button className={['Button', size].join(' ')}>{children}</button>
        <button className={classNames('Button', size, color, {outline,fullwidth})}>{children}</button>
        //yarn add classnames
    );
}

// ClassNames{'f1',{'f2':true}};
// class='f1','f2'

// var t1 = ['a1','b1'];
// var con1 = t1.join(' ');
// => a1,b1

Button.defaultProps ={
    size:'medium',
    color:'#7eb3fa'
  }
  
export default Button;

