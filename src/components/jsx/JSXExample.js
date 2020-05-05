import React, { Component } from 'react';
// import MyComp from './MyComp'
// import PrintName from './PrintName'
const msg = "Hi React...";
class JSXExample extends Component {


    // JSX
    // React components ultimately render HTML which is displayed in the browser. As such, the render()
    // method of a component needs to describe how the view should be represented as HTML. React builds
    // our apps with a fake representation of the Document Object Model (DOM). React calls this the virtual
    // DOM. Without getting deep into details for now, React allows us to describe a component’s HTML
    // representation in JavaScript.
    
    
    
    // JSX was created to make this JavaScript representation of HTML more HTML-like. To understand
    // the difference between HTML and JSX, consider this JavaScript syntax:
    
    // Your first React Web Application 
    // React.createElement('h1',null,'hello world')
    // Which can be represented in JSX as:
    // <h1>
    // hello world
    // </h1>




    showHello = () => {

        return "Hello React....."
    }

    render() {


        let element2 = <h1>This is Element 2</h1>

        let element4 = null;

        if (false) {
            element4 = (
                <h1>This is Element 4</h1>
            )
        }


        // if (false) {
        //     element4 = (
        //         <h1>Value is True</h1>
        //     )
        // }else{
        //     element4 = (
        //         <h1>Value is False</h1>
        //     )    
        // }

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

export default JSXExample;
