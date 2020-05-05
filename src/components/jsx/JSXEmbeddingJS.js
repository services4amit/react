import React, { Component } from 'react';
import MyComp from './MyComp'
import PrintName from './PrintName'
const msg = "Hi React...";
class JSXEmbeddingJS extends Component {



    render() {

        const obj = [
            {
                name: "Alex",
                city: "NJ"
            },
            {
                name: "Alen",
                city: "NY"
            },
            {
                name: "John",
                city: "CH"
            },
            {
                name: "Jacl",
                city: "LV"
            }
        ]

        return (
            <div>
                <h2> This is header</h2>
                {obj[0].name}
                {obj.map((ob) => {
                    ob.name
                })}

            </div>
        )
    };


}

export default JSXExample;
