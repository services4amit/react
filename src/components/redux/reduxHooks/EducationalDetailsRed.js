import React, { Component } from 'react';
import { connect } from 'react-redux';

class EducationalDetailsRed extends Component {



    render() {
        console.log("Eduction", this.props)


        return (
            <div>
                <h2>School Name is: {this.props.educationalState.education.school}</h2>
                <h2>College Name is: {this.props.educationalState.education.colg}</h2>
            </div>
        )
    };


}

const mapStateToProps = state => {

    return {
        educationalState: state.educational
        
    }
}

export default connect(mapStateToProps, null)(EducationalDetailsRed);
