// import React, { Component } from 'react';
import React, { useState, useEffect, useRef } from 'react'



// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


const LifeCyclesHooks = (props) => {


    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount')
    }, []);

    //componentDidUpdate
    //everytime 
    useEffect(() => {
        console.log('componentDidUpdate')
    }
    );

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
        </div>
    )

}



export default LifeCyclesHooks;
