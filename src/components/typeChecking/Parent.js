import React, { useState, Fragment, useMemo } from "react";
import Child from './Child'


const Parent = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }

  
    return (
        <Fragment>

           Parent
            <Child text={1}></Child>
      
        </Fragment>
    )
}

export default Parent;