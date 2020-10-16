import React, { Component } from 'react';
import LifeCyclesHooks from './LifeCyclesHooks';

class LifeCycleExHooks extends Component {

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
        // window.onafterprint
        let lifeCycleText = null;
        if (this.state.showText) {
            lifeCycleText = <LifeCyclesHooks

                text={this.state.text}

            ></LifeCyclesHooks>
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

export default LifeCycleExHooks;
