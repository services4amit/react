// import React, { Component } from 'react';
import React, { useState, useEffect, useRef } from 'react'



// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

let first = true;
const LifeCyclesHooks = (props) => {

    const [count,setCount]=useState(0);


    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
    }, []);

    //componentDidUpdate
    //loads everytime 
    useEffect(() => {
        console.log('componentDidUpdate')
    }
    );


    //Run only after first load
    useEffect(() => {
        if (first) {
            first = false;
        }else{
            console.log("Runs second time")
        }

    })
    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('will unmount');
        }
    }, []);

    return (
        <div>
            <h2>LIFECYCLES COMPONENT</h2>
            <br></br>
            <h2>{props.text}</h2>
            <button onClick={()=>setCount(new Date())}> CLick</button>
        </div>
    )

}



export default LifeCyclesHooks;
