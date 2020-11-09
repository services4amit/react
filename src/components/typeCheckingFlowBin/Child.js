//@flow
import React, { useState, Fragment } from "react";

type ChildProps={
    text:string
}
const Child = (props:ChildProps) => {

    console.log(props.text)
    return (
        <Fragment>
            Child {props.text}
        </Fragment>
    )
}



export default Child;