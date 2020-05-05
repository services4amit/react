import React, { Component } from 'react';


class EducationalDetails extends Component {


  
    render() {

   
     
        return (
            <div>
               <h2>School Name is: {this.props.school}</h2>
               <h2>College Name is: {this.props.colg}</h2>
            </div>
        )
    };


}

export default EducationalDetails;
