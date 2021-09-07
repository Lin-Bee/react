import React from "react";
import stlye from "./Box.module.css";

function Box(){
    return(
        <div>
            <div className={stlye.Box}>{stlye.Box}</div>
        </div>
    );
}

export default Box;