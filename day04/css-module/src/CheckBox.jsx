import React from "react";
import { BiCheckSquare,BiCheckbox } from "react-icons/bi";
import styles from './CheckBox.module.css';
//yarn add react-icons
//체크박스와 같은 기본 인풋 형태을 불러오는 소스코드
function Checkbox({children, checked, ...rest}){
    return(
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={styles.icon}>{checked ? <BiCheckSquare className={styles.checked}/>:<BiCheckbox/>}</div>
                {/* propertry값을 checked를 사용하여 useState사용! */}
            </label>
            <span>{children}</span>
        </div>
    );
}


export default Checkbox;