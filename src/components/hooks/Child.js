import React, { useState, useEffect, useRef } from 'react'


const Child = (props) => {

    const [myMsg, setMyMsg] = useState("");
    const [pageLoad, setPageLoad] = useState("Not")


    console.log("states in child ", myMsg, pageLoad)
    console.log("props in child", props)

    //everytime 
    // useEffect(() => {

    //     console.log("inside everytime useffect");
    //     setMyMsg(props.msg)
    //     // setMyMsg("We got Message " + props.msg)
    // })



    //clean up for unmounts
    // useEffect(() => {


    //     return () => {

    //     }
    // })



    //When comp mounts or unmounts
    // useEffect(() => {

    //     console.log("inside When comp mounts or unmounts");

    //     setPageLoad("Done")

    // }, [])



    // Conditionally
    useEffect(() => {

        console.log("inside useeffect conditionally");
        if(props.msg===''){
            setMyMsg("Please enter msg")
        }else{
            setMyMsg(props.msg)
        }
        

    }, [props.msg])


    return (

        <div>

            <p>Page load: {pageLoad}</p>
            <p>Message in Child: {myMsg}</p>

        </div>
    )

}


export default Child;