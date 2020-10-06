import React, { useState, useEffect } from 'react';


const MyCustomHooks = (selected) => {

    const [list, setList] = useState([]);
    // const [selected, setSelected] = useState('');


    useEffect(() => {
        sendList(selected)
    }, [selected])

    const sendList = (selected) => {
        console.log("inside seleted", selected)
        if (selected !== '') {
            setList(list.map((a) => {
                if (a == selected)
                    return a;
            }))
        } else {
            setList(['a', 's', 'd', 'f'])
        }

    };

    return [list, sendList];


}

export default MyCustomHooks;