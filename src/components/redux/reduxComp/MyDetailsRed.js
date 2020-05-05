import React, { Component } from 'react';
import { connect } from 'react-redux';
import NameComp from './PersonalDetails'
import AgeComp from './EducationalDetails'
import EducationalDetails from './EducationalDetails'
import PersonalDetails from './PersonalDetails'
import PersonalDetailsRed from './PersonalDetailsRed'
import EducationalDetailsRed from './EducationalDetailsRed'
import * as PerDetailsAction from '../actions/PerDetailsAction'
import * as EduDetailsAction from '../actions/EduDetailsAction'
class MyDetailsRed extends Component {

    // state = {
    //     education: {
    //         colg: '',
    //         school: ''
    //     },
    //     personal: {
    //         name: '',
    //         father: ''
    //     }
    // }




    render() {



        return (
            <div>
                <h1>My Details Component</h1>
                <label>Enter Name</label>
                <input
                    onChange={(evt) => this.props.onNameUpdate(evt.target.value)}
                    type="text"></input>
                <br></br>
                <label>Enter Father's Name</label>
                <input
                    onChange={(evt) => this.props.onFatherUpdate(evt.target.value)}
                    type="text"></input>
                <br></br>
                <label>Enter School Name</label>
                <input
                    onChange={(evt) => this.props.onSchoolUpdate(evt.target.value)}
                    type="text"></input>
                <br></br>
                <label>Enter College Name</label>
                <input
                    onChange={(evt) => this.props.onColgUpdate(evt.target.value)}
                    type="text"></input>





                <PersonalDetailsRed></PersonalDetailsRed>
                <EducationalDetailsRed></EducationalDetailsRed>
            </div>
        )
    };


}






const mapDispatchToProps = dispatch => {

    return {
        onSchoolUpdate: (value) => {


            return dispatch(EduDetailsAction.updateSchool(value))

        },
        onColgUpdate: (value) => {

            return dispatch(EduDetailsAction.updateColg(value))

        },
        onNameUpdate: (value) => {

            return dispatch(PerDetailsAction.updateName(value))


        },
        onFatherUpdate: (value) => {

            return dispatch(PerDetailsAction.updateFatherName(value))


        }
    }
}






export default connect(null, mapDispatchToProps)(MyDetailsRed);

// export default MyDetailsRed;
