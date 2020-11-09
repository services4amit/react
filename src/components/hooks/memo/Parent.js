import React, { useState, Fragment, useMemo } from "react";
import Child from './Child'


const Parent = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }

    const MemoChild = useMemo(() => {
        return <Child text="memo"></Child>
    }, [count])
    return (
        <Fragment>

            Count is {count}
            <button onClick={addCount}>Add</button>
            <Child text="non-memo"></Child>
            {MemoChild}
        </Fragment>
    )
}

export default Parent;