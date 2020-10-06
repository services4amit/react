import React, { useState, useEffect } from 'react'
import Child from './Child'
import MyList from './MyList';
import MyListCustomHooks from './MyListCustomHooks'
const Parent = (props) => {

    const [msg, setMsg] = useState("")
    const [name, setName] = useState("")
    console.log("states ", msg, name)
    return (
        // <div>
        //     Msg<input
        //         onChange={(event) => { setMsg(event.target.value) }}
        //     ></input><br></br>
        //     Name<input
        //         onChange={(event) => { setName(event.target.value) }}
        //     ></input>
        //     <Child
        //         msg={msg}
        //     ></Child>
        // </div>

        <div>
            <MyList></MyList>
            {/* <MyListCustomHooks></MyListCustomHooks> */}
        </div>
    )

}


export default Parent;