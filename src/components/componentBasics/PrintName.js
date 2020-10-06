import React, { Component, PureComponent } from 'react';


// class PrintName extends PureComponent {


// shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate')
//     return nextProps.name !== this.props.name;
// }







class PrintName extends Component {

    state = {

        details: ''
    }
    handleClick = () => {
        this.props.changeName("Ajay")
    }
    render() {
        console.log("Rendering PrintName")
        // return (
        //     <div>

        //         <p>Welcome {this.props.name} of age {this.props.age}</p>

        //         {/* <p>Address : {this.props.address}</p> */}

        //         <p>{this.props.children}</p>

        //     </div>
        // )


        return (
            <div>

                <p>Welcome {this.props.name} of age {this.props.age}</p>
                {/* <p>{this.props.children}</p> */}
                <button
                    onClick={this.handleClick}
                >Click to update</button>
                <p>"this.state.details</p>
            </div>
        )
    };


}

export default PrintName;
