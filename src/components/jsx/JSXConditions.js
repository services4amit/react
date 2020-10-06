import React, { Component } from 'react';
import MyComp from './MyComp'
import PrintName from './PrintName'
const msg = "Hi React...";
class JSXConditions extends Component {





    showHello = () => {

        return "Hello React....."
    }

    render() {
        

//1
        let element2 = <h1>This is Element 2</h1>


        //2
        let element4 = null;

        if (false) {
            element4 = (
                <h1>This is Element 4</h1>
            )
        }


        //3
        if (false) {
            element4 = (
                <h1>Value is True</h1>
            )
        }else{
            element4 = (
                <h1>Value is False</h1>
            )    
        }

        return (
            <div>

                <h1>JSX</h1>


                {/* <h1>{this.state.data}</h1> */}


                <h1>{this.showHello()}</h1>

                {
                    1 < 2 ? element2 : null

                }


                {element4}

                {/* {
                   false && element2

                } */}


            </div>
        )
    };


}

export default JSXConditions;
