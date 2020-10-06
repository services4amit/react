import React, { useEffect, useState } from 'react';

const Hooks = (props) => {

    const [msg, setMsg] = useState("Hello World")
    const [name, setName] = useState("Jack")

    let element2 = <h1>This is Element 2</h1>

    const showHello = () => {

        return "Hello React....."
    }


    function changeMessage() {
        setMsg("Message changed")
    }

    function changeMessageWithPrev() {
        setMsg(prevMsg => prevMsg + "!!!!!!!")
    }

    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Message : {msg}</h1>
            <button onClick={changeMessageWithPrev}>Update Message</button>


            {/* <p>{showHello()}</p>
            <p>{count}</p>
            {
                    1 > 2 ? element2 : null

                } */}
        </div>
    )

}

export default Hooks