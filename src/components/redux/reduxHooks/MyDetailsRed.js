import React, { Component, Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';

import PersonalDetailsRed from './PersonalDetailsRed'

import * as PerDetailsAction from '../actions/PerDetailsAction'


const MyDetailsRed = () => {

    const onNameUpdate = (value) => {
        dispatch(PerDetailsAction.updateName(value))
    }

    const onFatherUpdate = (value) => {
        dispatch(PerDetailsAction.updateFatherName(value))
    }

    const dispatch = useDispatch();
    return (
        <Fragment>
            <h1>My Details Component</h1>
            <label>Enter Name</label>
            <input
                onChange={(evt) => onNameUpdate(evt.target.value)}
                type="text"></input>
            <br></br>
            <label>Enter Father's Name</label>
            <input
                onChange={(evt) => onFatherUpdate(evt.target.value)}
                type="text"></input>
            <br></br>

            <PersonalDetailsRed></PersonalDetailsRed>
        </Fragment>
    )
}

export default MyDetailsRed;

