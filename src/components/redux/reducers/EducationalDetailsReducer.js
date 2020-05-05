
const inintialState={
    education: {
        colg: '',
        school: ''
    }
}

const education=(state=inintialState,action)=>{
    // console.log("states",state)
    // console.log("education",action)
    if(action.type==='UPDTAE_SCHOOL'){
        return {
            ...state,
            education: {
                ...state.education,
                school:action.value
            }
            // results:state.results.concat(state.counter+1)
        }
    }
    if(action.type==='UPDATE_COLLEGE'){
        return {
            ...state,
            education: {
                ...state.education,
                colg:action.value
            }
            // results:state.results.concat(state.counter+1)
        }
    }
   
return state;
}

export default education;