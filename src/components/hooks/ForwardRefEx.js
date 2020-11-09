import React, { Fragment } from "react";

function ForwardRefEx(props,ref) {

    console.log(props.placeholder)
    return (
        <Fragment>
            <span>C1</span> <input placeholder={props.placeholder} name="c1" ref={ref} onKeyDown={props.c1Down}></input>
            
        </Fragment>
    )
}


const ForwardedRef=React.forwardRef(ForwardRefEx);
export default ForwardedRef;