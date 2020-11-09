import React, { Fragment, useEffect, useRef } from "react";
import ForwardRefEx from './ForwardRefEx';
function UseRefEx() {

    const nameRef = useRef();
    const passRef = useRef();
    const idRef = useRef();
    const divRef = useRef();
    const C1Ref = useRef(null);

    useEffect(() => {
        C1Ref.current.focus();
    }, [])


    const onChangeHandler = (e) => {

        console.log(e.target.name)
        if (e.target.name == 'c1') {
            passRef.current.focus();
        } else {
            idRef.current.focus();
        }

    }

    const c1Down = () => {
        passRef.current.focus();
    }
    return (
        <Fragment>
            <div ref={divRef}>
                <h1>UseRef</h1>
                <span>User</span> <input name="user" onKeyDown={onChangeHandler} ref={nameRef}></input>
                <span>Pass</span> <input name="pass" ref={passRef}></input>
                <span>ID</span> <input name="id" ref={idRef}></input>
                <ForwardRefEx
                    placeholder="enter c1"
                    onKeyDown={onChangeHandler}
                    ref={C1Ref}
                    c1Down={c1Down}
                >

                </ForwardRefEx>
            </div>
        </Fragment>
    )

}

export default UseRefEx;