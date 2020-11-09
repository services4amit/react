import React, { useState, Fragment } from "react";
const Child = (props) => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }
    console.log(props.text)
    return (
        <Fragment>
            Child
        </Fragment>
    )
}

export default Child;