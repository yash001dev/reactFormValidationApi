export const config={
    fields:{
        username:{
            isRequired:{message:'Please Fill Out a username'}
        },
        password:{
            isRequired:{message:'Please Fill Out a password'},
            isMinLength:{value:6, message:'Please make it more than 6 characters'}
        },
    },
    onSubmit:e=>{

    },
};