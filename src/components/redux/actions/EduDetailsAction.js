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



        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({

                title: 'foo',
                body: 'bar',
                userId: 1

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


                dispatch(updatedColg(json.id))
            }
            ).catch((err) => {
                console.log("printing error");
                console.log(err);
                dispatch(updatedColg(data + '(loc:)'))
            })



    }



}


const updatedColg = (data) => {

    return {
        type: 'UPDATE_COLLEGE',
        value: data
    }
}