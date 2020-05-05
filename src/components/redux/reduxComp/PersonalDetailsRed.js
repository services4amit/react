import React, { Component } from 'react';
import { connect } from 'react-redux';

class PersonalDetailsRed extends Component {


  
    render() {

   console.log("Persond",this.props)
     
        return (
            <div>
               <h2>Name is: {this.props.personalState.personal.name}</h2>
               <h2>Father's Name is: {this.props.personalState.personal.father}</h2>
            </div>
        )
    };


}


const mapStateToProps = state => {

    return {
        personalState: state.personal
    }
}

export default connect(mapStateToProps,null)(PersonalDetailsRed);
