import React, { Component } from 'react';
import axios from 'axios';
import StylesEx from '../styles/StylesEx'


//https://jsonplaceholder.typicode.com/guide.html
class ServiceCallEx extends Component {


    state = {

        results: []
    }


    componentDidMount() {
        this.postCall();
    }



    postCall = () => {

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((response) => {
        //         console.log(response);

        //         this.setState({
        //             results: response.data
        //         }, this.showComp)
        //     })


        //     .catch((error) => {
        //         console.log(error);
        //     })



        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(
        //         (response) => {
        //             return response.json()
        //         }, (err) => {
        //             throw Error(err)
        //         }
        //     )
        //     .then((res) => {
        //         console.log("printing response");
        //         console.log(res);

        //     }).catch((err) => {
        //         console.log("printing error");
        //         console.log(err);
        //     })




        // axios.post('https://jsonplaceholder.typicode.com/posts',
        //     {
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1
        //     }
        // )
        //     .then((response) => {
        //         console.log("printing response");
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log("printing error");
        //         console.log(error);
        //     })


        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title: 'foo',
        //         body: 'bar',
        //         userId: 1
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        //     .then(
        //         (response) => {
        //             return response.json()
        //         }, (err) => {
        //             throw Error(err)
        //         }
        //     )
        //     .then(json => {
        //         console.log("printing response");
        //         console.log(json)
        //     }
        //     ).catch((err) => {
        //         console.log("printing error");
        //         console.log(err);
        //     })



    }

    render() {

        let comp = null;
        if (this.state.results.length > 0) {
            comp = (
                this.state.results.map((data) => {
                    return <StylesEx name={data.title}></StylesEx>
                })
            )
        }

        return (
            <div>
                <h1>Service call</h1>
                {comp}
            </div>
        )
    };


}

export default ServiceCallEx;
