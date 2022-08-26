import React from 'react'
import {useForm} from 'react-hook-form'


const Form = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", {required: true, maxlength: 20, minLength: 2})}  />
            <input {...register("lastName", {required: true, maxlength: 20, minLength: 2})} />
            <input type="email" {...register("email", {required: true})} />
            

        </form>
    )
}

export default Form;