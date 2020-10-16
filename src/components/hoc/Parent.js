import React from 'react';

import Child from './Child'

const Parent = () => {

    // window.onafterprint
    return (

        <div>
            <h1>Parent</h1>
            <Child
                status="a"
            ></Child>
        </div>
    )

}

export default Parent;

