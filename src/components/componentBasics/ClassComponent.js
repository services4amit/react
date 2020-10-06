import React, { Component } from 'react';


class ClassComponent extends Component {



    render() {
        
        return (
            <div>
                <h1>Class Component</h1>
                <h1>My age is {Math.floor(Math.random()*20)}</h1>
            </div>
        )
    };


}

export default ClassComponent;
