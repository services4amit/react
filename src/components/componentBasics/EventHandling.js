import React, { Component } from 'react';


class EventHandling extends Component {

    state = {
        name: 'Alex',
        buttonSelected: '',
        buttons: [
            { name: "Button1" },
            { name: "Button2" },
            { name: "Button3" }
        ]
    }



    // handleChangeName = () => {

    //     this.setState({
    //         name: "Mark"
    //     })
    // }

    handleChangeName = (data) => {

        this.setState({
            name: data
        })
    }

    // handleChangeNameInput = (evt) => {

    //     this.setState({
    //         name: evt.target.value
    //     })
    // }



    handleChangeNameInput = (data) => {

        console.log(data.target.value)

        this.setState({
            name: data.target.value
        })
    }


    handleChangeNameInputNew = (evt) => {
        this.setState({
            name: evt
        })
        console.log(evt)
    }

    // handleChangeNameInputNew=()=>{
    //     this.setState({
    //         name: "evt"
    //     })
    //     console.log("evt")
    // }


    handleButton = (name) => {
        this.setState({
            buttonSelected: name
        })

    }

    // handleButton=(name)=>{
    //     this.setState({
    //         buttonSelected: name
    //     })

    // }

    render() {



        return (
            <div>
                <h1>Hi {this.state.name}</h1>



                {/* 
                <button
                    onClick={this.handleChangeName}>
                    Change Name</button> */}

                {/* <button onClick={() => this.handleChangeName("David")}>Change Name</button> */}

                {/* <input
                    onChange={()=>this.handleChangeNameInputNew("David")}
                    type="text"></input>
                <br></br>
                <br></br> */}

                {/* <input
                    onChange={this.handleChangeNameInput}
                    type="text"></input>
                <br></br> */}

                <h1>Button selected: {this.state.buttonSelected}</h1>

                {
                    this.state.buttons.map(b => {
                        return (
                            <button onClick={() => this.handleButton(b.name)}>{b.name}</button>

                        )
                    })
                }
            </div>
        )
    };


}

export default EventHandling;
