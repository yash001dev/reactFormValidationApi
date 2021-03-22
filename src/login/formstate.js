export const initialState={
    values:{},
    errors:{},
    submitted:false,
}

export function validationReducer(state,action){
    switch(action.type){
        case 'change':
            const values={...state.values,...action.payload};
            return{
                ...state,
                values
            }
        
        case 'submit':
            return{
                ...state,
                submitted:true,
            }
        
        default:
            throw new Error('Unknown action type');
    }
}