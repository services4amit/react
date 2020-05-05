import React, { Component } from 'react';
import NameComp from './PersonalDetails'
import AgeComp from './EducationalDetails'
import EducationalDetails from './EducationalDetails'
import PersonalDetails from './PersonalDetails'
class MyDetails extends Component {

    state = {
        education: {
            colg: '',
            school: ''
        },
        personal: {
            name: '',
            father: ''
        },
        id:'',
        wwewe:''
    }




    render() {



        return (
            <div>
                <h1>My Details Component</h1>
                <label>Enter Name</label>
                <input
                    onChange={(evt) => {
                        this.setState({
                            personal: {
                                ...this.state.personal,
                                name: evt.target.value
                            }
                        })
                    }

                    }
                    type="text"></input>
                <br></br>
                <label>Enter Father's Name</label>
                <input
                    onChange={(evt) => {
                        this.setState({
                            personal: {
                                ...this.state.personal,
                                father: evt.target.value
                            }
                        })
                    }


                    }
                    type="text"></input>
                <br></br>
                <label>Enter School Name</label>
                <input
                    onChange={(evt) => {
                        this.setState({
                            education: {
                                ...this.state.education,
                                school: evt.target.value
                            }
                        })
                    }

                    }
                    type="text"></input>
                <br></br>
                <label>Enter College Name</label>
                <input
                    onChange={(evt) => {

                        {
                            this.setState({
                                education: {
                                    ...this.state.education,
                                    colg: evt.target.value
                                }
                            })
                        }

                    }}
                    type="text"></input>




                    
                <PersonalDetails
                    father={this.state.personal.father}
                    name={this.state.personal.name}
                ></PersonalDetails>
                <EducationalDetails
                    school={this.state.education.school}
                    colg={this.state.education.colg}
                ></EducationalDetails>
            </div>
        )
    };


}

export default MyDetails;
