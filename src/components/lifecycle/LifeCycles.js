import React, { Component } from 'react';



// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


class LifeCycles extends Component {

    constructor() {
        super();
        console.log('constructor')

    }


    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    //    shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate')
    //     return true;
    //    }

    // handleButton = () => {

    //     this.props.callMyMethod("date");
    // }
    render() {


        console.log('render')
        return (
            <div>
                <h2>LIFECYCLES COMPONENT</h2>
                <br></br>
                <h2>{this.props.text}</h2>
            </div>
        )
    };


}

export default LifeCycles;
