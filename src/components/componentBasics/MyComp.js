import React, { Component } from 'react';
import PrintName from './PrintName'

const msg = "Hi React...";
class MyComp extends Component {


    state = {
        name: 'Alex'
    }

    showHello = () => {

        return "Hello React....."
    }

    changeName = (value) => {
        console.log("Inside changeName", value)
        this.setState({
            name: value
        })

    }


    render() {
        return (
            <div>
                <h1>My Component</h1>
                {/* <h1>{this.state.age}</h1> */}

                {/* <PrintName></PrintName>

                <PrintName></PrintName>
                <PrintName/> */}

                {/* <PrintName
                    name={"A"}
                    age={20}
                    
                ></PrintName>
                
                <PrintName
                    name={"B"}
                    age={10}
                ></PrintName> */}


                {/* <MyFuncComp
                    name={"B"}
                    age={10}

                ></MyFuncComp>

                <MyFuncComp
                    name={"C"}
                    age={100}

                >

                    This is inside Tag
                </MyFuncComp> */}


                {/* <PrintName>This is inside Tag</PrintName> */}
                <PrintName
                    name={this.state.name}
                    changeName={this.changeName}
                ></PrintName>
            </div>
        )
    };


}

export default MyComp;
