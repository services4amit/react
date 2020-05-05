
const inintialState={
    personal: {
        name: '',
        father: ''
    }
}

const personal=(state=inintialState,action)=>{
    
    if(action.type==='UPDATE_NAME'){
        return {
            ...state,
            personal: {
                ...state.personal,
                name:action.value
            }
            
        }
    }
    if(action.type==='UPDATE_FATHER'){
        return {
            ...state,
            personal: {
                ...state.personal,
                father:action.value
            }
        }
    }
   
return state;
}

export default personal;