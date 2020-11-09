import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';



const PersonalDetailsRed = () => {
    // console.log(state)
    const name = useSelector(state => state.personal.personal.name);
    const fatherName = useSelector(state => state.personal.personal.father);
    return (
        <div>
            <h2>Name is: {name}</h2>
            <h2>Father's Name is: {fatherName}</h2>
        </div>
    )

}

export default PersonalDetailsRed;


// class PersonalDetailsRed extends Component {



//     render() {

//    console.log("Persond",this.props)

//         return (
//             <div>
//                <h2>Name is: {this.props.personalState.personal.name}</h2>
//                <h2>Father's Name is: {this.props.personalState.personal.father}</h2>
//             </div>
//         )
//     };


// }


// const mapStateToProps = state => {

//     return {
//         personalState: state.personal
//     }
// }

// export default connect(mapStateToProps,null)(PersonalDetailsRed);
