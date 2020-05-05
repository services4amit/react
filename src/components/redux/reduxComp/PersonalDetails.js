import React, { Component } from 'react';


class PersonalDetails extends Component {


  
    render() {

   
     
        return (
            <div>
               <h2>Name is: {this.props.name}</h2>
               <h2>Father's Name is: {this.props.father}</h2>
            </div>
        )
    };


}

export default PersonalDetails;
