import React from 'react';

import HOCError from './HOCError';

const Child = (props) => {

    return (
        <div>Child
            <p>{props.resp.msg}</p>
        </div>


    )

}

export default HOCError(Child);

