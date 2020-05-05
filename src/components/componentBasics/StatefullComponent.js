import React, { Component } from 'react';
import PrintName from './PrintName'

const msg = "Hi React...";
class StatefullComponent extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         dropdownValue:'',
    //         num:20,

    //         data:
    //             [
    //                 { name: "A", age: 20 },
    //                 { name: "B", age: 22 }
    //             ]
    //     }
    // }


    state = {
        dropdownValue: '',
        data:
            [
                { name: "A", age: 20 },
                { name: "B", age: 22 },

            ]
    }



    changeName = (data) => {
        this.setState({
            data: [
                { name: data, age: 20 },
                { name: data, age: 22 },

            ]
        })
    }
    render() {
        return (
            <div>
                <h1>My Component</h1>
                {/* <PrintName name={this.state.data[0].name} age={this.state.data[0].age}></PrintName>


                <PrintName name={this.state.data[1].name} age={this.state.data[1].age}></PrintName> */}


                {
                    this.state.data.map((d) => {

                        return <PrintName name={d.name} age={d.age}></PrintName>
                    })

                }

                <PrintName
                    name={this.state.data[1].name}
                    age={this.state.data[1].age}
                    changeName={this.changeName}
                ></PrintName> */}


            </div>
        )
    };


}

export default StatefullComponent;
