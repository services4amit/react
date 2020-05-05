import React, { Component } from 'react';
import MaterialTable from './MaterialTable'

class MaterialUIEx extends Component {

    state={
        data:[
            {name:'Frozen yoghurt1', calories:159,fat:6.0,carbs:24, protein:4.0},
            {name:'Frozen yoghurt2', calories:159,fat:6.0,carbs:24, protein:4.0},
            {name:'Frozen yoghurt3', calories:159,fat:6.0,carbs:24, protein:4.0},
            {name:'Frozen yoghurt4', calories:159,fat:6.0,carbs:24, protein:4.0}
        ]
    }

  
    render() {

   
     
        return (
            <div>
               <MaterialTable
               rows={this.state.data}
               ></MaterialTable>
               {/* <MaterialTable></MaterialTable> */}
            </div>
        )
    };


}

export default MaterialUIEx;
