import axios from 'axios';


export const updateSchool = (data) => {
    return {
        type: 'UPDTAE_SCHOOL',
        value: data
    }
}




// export const updateColg = (data) => {

//     return {
//         type: 'UPDATE_COLLEGE',
//         value: data
//     }
// }







export const updateColg = (data) => {

    return (dispatch) => {



         fetch('http://localhost:8070/api/getColgAddress', {
            method: 'POST',
            body: JSON.stringify({
                name:data 
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(
                (response) => {
                    console.log(response)
                    return response.json()
                }, (err) => {
                    throw Error(err)
                }
            )
            .then(json => {
                console.log(json)

                
                dispatch(updatedColg(json.res))
            }
            ).catch((err) => {
                console.log("printing error");
                console.log(err);
                dispatch(updatedColg(data+'(loc:)'))
            })



    }



}


const updatedColg = (data) => {

    return {
        type: 'UPDATE_COLLEGE',
        value: data
    }
}