
import React, { Component, PureComponent } from 'react';
import Parent from './Parent'
class GrandParent extends Component {

    state = {

        details: ''
    }
    handlechangeNameGP = (data) => {
        console.log("Gparent", data)
    }
    render() {
        console.log("Rendering PrintName")



        return (
            <div>
                <Parent
                    changeNameGP={this.handlechangeNameGP}
                ></Parent>

            </div>
        )
    };


}

export default GrandParent;