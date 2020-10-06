
import React, { Component, PureComponent } from 'react';
class Child extends Component {

    state = {
        details: ''
    }

    handleClick = () => {
        this.props.changeName("Ajay")
    }
    render() {
        console.log("Rendering PrintName")
        return (
            <div>

                <p>Welcome Child</p>
                <button
                    onClick={this.handleClick}
                >Click to update</button>
            </div>
        )
    };


}

export default Child;