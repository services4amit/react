import React, { Component } from 'react';
import * as Styles from './Styles'

const ToDoBox = {
    backgroundColor: "#44014C", width: "300px", minHeight: "200px"
}
const ToDOText = {
    padding: "10px 20px", textAlign: "center", color: "white"
}

class StylesEx extends Component {



    render() {



        return (

            <div>
                {/* <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px" }}>
                    <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>ToDo</h2>
                </div> */}


                {/* <div style={ToDoBox}>
                    <h2 style={ToDOText}>ToDo</h2>
                </div> */}

                {/* <div style={Styles.ToDoBox}>
                    <h2 style={Styles.ToDOText}>ToDo</h2>
                </div> */}


                
                <div style={Styles.ToDoBox}>
                    <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>ToDo</h2>
                </div>
            </div>
        )
    };


}

export default StylesEx;
