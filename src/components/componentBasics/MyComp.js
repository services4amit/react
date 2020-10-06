import React, { Component } from 'react';
import PrintName from './PrintName'

const msg = "Hi React...";
class MyComp extends Component {


    state = {
        list: [
            { name: "A", age: 20 },
            { name: "B", age: 22 },
            { name: "Aqq", age: 20 },
            { name: "Bsds", age: 22 },
            { name: "Asds", age: 20 },
            { name: "Bsds", age: 22 },
        ],
        headers:"sifjif",
        count:2
        
    }

    showHello = () => {

        return "Hello React....."
    }

    handleChangeName = (value) => {
        console.log("Inside changeName", value)
        this.setState({
            list: [
                { name: value, age: 20 },
                { name: value, age: 22 },
            ]
        })

    }


    render() {


        const list = [
            { name: "A", age: 20 },
            { name: "B", age: 22 },
            { name: "Aqq", age: 20 },
            { name: "Bsds", age: 22 },
            { name: "Asds", age: 20 },
            { name: "Bsds", age: 22 },
        ];

        

        return (
            <div>
                <h1>My Component</h1>
                {/* <PrintName
                    name="Alex"
                    age="12"
                >

                    Content from Parent
                </PrintName> */}



                {/* {list.map((data) => {
                    return <PrintName
                        name={data.name}
                        age={data.age}
                    ></PrintName>
                })} */}


{/*                 
                {this.state.list.map((data) => {
                    return <PrintName
                        name={data.name}
                        age={data.age}
                    ></PrintName>
                })} */}




                {this.state.list.map((data) => {
                    return <PrintName
                        name={data.name}
                        age={data.age}
                        changeName={this.handleChangeName}
                    ></PrintName>
                })}


                {/* <h1>{this.state.age}</h1> */}

                {/* <PrintName></PrintName> */}

                {/* <PrintName></PrintName>
                <PrintName /> */}

                {/* <PrintName
                    name={"A"}
                    age={20}
                    
                ></PrintName>
                
                <PrintName
                    name={"B"}
                    age={10}
                ></PrintName> */}





                {/* <PrintName>This is inside Tag</PrintName> */}


                {/* <PrintName
                    name={this.state.name}
                    age={this.state.age}
                ></PrintName> */}

                {/* <PrintName
                    name={this.state.name}
                    changeName={this.changeName}
                ></PrintName> */}
            </div>
        )
    };


}

export default MyComp;
