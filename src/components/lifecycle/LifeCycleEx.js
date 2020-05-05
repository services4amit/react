import React, { Component } from 'react';
import LifeCycles from './LifeCycles';

class LifeCycleEx extends Component {

    state = {
        showText: true,
        text: '',

    }



    handleChangeToggle = () => {
        this.setState({
            showText: !(this.state.showText)
        })
    }

    handleUpdate = () => {
        this.setState({
            text: this.state.text + '_hello'
        })
    }




    render() {
        let lifeCycleText = null;
        if (this.state.showText) {
            lifeCycleText = <LifeCycles
                
                text={this.state.text}

            ></LifeCycles>
        }



        return (
            <div>
                <button onClick={this.handleChangeToggle}>Toggle Lifecycles Component</button>
                <br></br>
                <button onClick={this.handleUpdate}>Update Text</button>
                <br></br>
                {lifeCycleText}



                
            </div>
        )
    };


}

export default LifeCycleEx;
