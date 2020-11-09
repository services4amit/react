import React, { useState, Fragment, useRef, useEffect } from "react";
const Previous = (value) => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current = value;
    })

    return ref.current;
}

export default Previous;