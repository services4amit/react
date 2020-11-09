import React, { useState, Fragment, useMemo } from "react";
import usePrevious from './Previous'


const Parent = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }
const prev=usePrevious(count);
    return (
        <Fragment>

            Count is {count}
            <button onClick={addCount}>Add</button>
           
          Prev is {prev}
        </Fragment>
    )
}

export default Parent;