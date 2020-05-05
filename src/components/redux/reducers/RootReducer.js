import { combineReducers } from 'redux';
import perReducer from './PersonalDetailsReducer'
import eduReducer from './EducationalDetailsReducer'


let rootReducer=combineReducers({
    personal:perReducer,
    educational:eduReducer
    
})

export default rootReducer