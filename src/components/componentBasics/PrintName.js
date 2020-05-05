import React, { Component, PureComponent } from 'react';


// class PrintName extends PureComponent {


// shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate')
//     return nextProps.name !== this.props.name;
// }







class PrintName extends Component {
    handleClick = () => {
        this.props.changeName("Ajay")
    }
    render() {
        console.log("Rendering PrintName")
        return (
            <div>
                <p>Welcome {this.props.name} of age {this.props.age}</p>
                {/* <p>{this.props.children}</p> */}

            </div>
        )


        // return (
        //     <div>
        //         <p>Welcome {this.props.name}</p>
        //         <p>Welcome {this.props.name} of age {this.props.age}</p>
        //         {/* <p>{this.props.children}</p> */}
        //         <button
        //             onClick={this.handleClick}
        //         >Button</button>

        //     </div>
        // )
    };


}

export default PrintName;
