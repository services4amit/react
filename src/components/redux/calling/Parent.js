
import React, { Component, PureComponent } from 'react';
import Child from './Child'
class Parent extends Component {

    state = {

        details: ''
    }
    handlechangeName = (data) => {
        console.log("parent", data)
        this.props.changeNameGP(data)
    }
    render() {
        console.log("Rendering PrintName")


        return (
            <div>

                <Child
                    changeName={this.handlechangeName}
                ></Child>
            </div>
        )
    };


}

export default Parent;