import React, { useEffect, useState } from 'react'

const MyList = () => {

    const [list, setList] = useState(['a', 's', 'd', 'f']);
    const [selected, setSelected] = useState('');


    useEffect(() => {

        console.log("inside seleted", selected)
        if (selected !== '') {
            setList(list.map((a) => {
                if (a == selected)
                    return a;
            }))
        } else {
            setList(['a', 's', 'd', 'f'])
        }


    }, [selected])

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