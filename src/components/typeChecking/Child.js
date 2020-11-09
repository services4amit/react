import React, { useState, Fragment } from "react";
import PropTypes from 'prop-types'
const Child = ({ text }) => {

    console.log(text)
    return (
        <Fragment>
            Child {text}
        </Fragment>
    )
}

Child.propTypes = {
    text: PropTypes.string
}

export default Child;