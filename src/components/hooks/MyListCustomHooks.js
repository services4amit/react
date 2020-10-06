import React, { useEffect, useState } from 'react'
import useMyCustomHooks from './MyCustomHooks'

const MyList = () => {


    const [selected, setSelected] = useState('');

    const [list, sendList] = useMyCustomHooks(selected);


    return (
        <div>
            <input
                onChange={(evt) => setSelected(evt.target.value)}
            ></input>
            <h1>My List</h1>
            {list.map((a) => {
                return <h2>{a}</h2>
            })}
        </div>
    )

}

export default MyList;