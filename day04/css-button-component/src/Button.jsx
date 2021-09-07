import React from "react";
import styled,{css} from 'styled-components';
import { lighten, darken } from "polished";

const colorStyled = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];
        return css`
        background:${selected};
        
        ${props =>
            props.outline && css`
            color:${selected};
            background:none;
            border:1px solid ${selected};
            &:hover{
                background:${selected};
                color:white;
            }
            `
        }

        `;
    }}
`;

// &:hover{
//     background:${lighten(0.1,selected)}; //마우스 호버시 10% 밝게
// }
// &:active{
//     background:${darken (0.1,selected)}; //활성화시시 10% 어둡게
// }
const sizes ={
    large:{
        height:'3rem',
        fontSize:'1.25rem'
    },
    medium:{
        height:'2.5rem',
        fontSize:'1rem'
    },
    small:{
        height:'1.5rem',
        fontSize:'0.75rem'
    }
}

const sizeStyledSimple = css`
    ${({size})=>css`
        height:${[sizes].height};
        fontSize:${[sizes].fontSize};
    `}
`

// const sizeStyled = css`
//     ${props =>
//         props.size === `large` &&
//         css`
//             heihgt:3rem;
//             font-size:1.25rem;
//         `
//     }
//     ${props =>
//         props.size === `medium` &&
//         css`
//             heihgt:2.5rem;
//             font-size:1rem;
//         `
//     }
//     ${props =>
//         props.size === `small` &&
//         css`
//             heihgt:2rem;
//             font-size:0.75rem;
//         `
//     }

// `;

const fullwidth = css`
    ${props =>
        props.fullwidth &&
        css`
            width:100%;
            justify-content:center;
            & + &{
                margin-left:0;
                margin-top:1rem;
            }
        `
    }
`

const StButton = styled.div`
    display: inline-flex;
    color: #fff;
    font-weight: bold;
    outline:none;
    border-radius:5px;
    border:none;
    cursor:pointer;

    height:2.5rem;
    line-height: 2.5rem;
    margin-top:1rem;
    padding-left:1rem;
    padding-right:1rem;
    font-size:1rem;
    box-sizing:border-box;

    background:#333;
    &:hover{
        background:(${lighten(0.1),'#333333'}); //마우스 호버시 10% 밝게
    }
    &:active{
        background:(${darken(0.1),'#333333'}); //활성화시시 10% 어둡게
    }

    ${colorStyled}
    ${sizeStyledSimple}

    ${fullwidth}

`;

function Button({children, color, size, outline, fullwidth, ...rest}){
    return(
        <StButton color={color} size={size} outline={outline} fullwidth={fullwidth} {...rest}>{children}</StButton>
    );
}

Button.defalutProps = {
    color:'blue'
}

export default Button;