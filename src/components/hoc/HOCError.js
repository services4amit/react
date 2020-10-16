import React from 'react';


const check = (props) => {

    let err = {
        code: 500,
        msg: "FAILED"
    }

    let obj = {
        code: 200,
        msg: "SUCCESS"
    }
    if (props.status == "ERROR") {


        let resp = { ...props, resp: err }
        console.log("inside hoc", resp);
        return resp;
    } else {
        return { ...props, resp: obj };
    }
}

export default (wrappedComp) => {

    return (props) => {

        return wrappedComp(check(props));
    }
}