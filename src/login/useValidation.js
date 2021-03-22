import { validationReducer, initialState } from './formstate';

const useValidation=config=>{
    const [state, dispatch] = useReducer(validationReducer, initialState);
    return {
        errors:state.errors,
        getFormProps:e=>{},
        getFieldProps:fieldName=>({
            onChange:e=>{
                if(!config.fields[fieldName]){
                    return;
                }
                dispatch({
                    type:'change',
                    payload:{[fieldName]:e.target.value}
                });
            },
            name:fieldName,
            value:state.values[fieldName],
        }),
    };
};

export default useValidation;