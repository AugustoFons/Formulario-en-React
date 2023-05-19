import React from 'react'
import { ErrorMessage ,useField } from 'formik'

const TextField = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label> {/* recibe el name de la props */}
            <input 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}    //is invalid es una clase de bootstrap que hace que se pinte el borde de rojo
                {...field}{...props}
                autoComplete="off"
            />
            <ErrorMessage component='div' name={field.name} className='error'/>
        </div>
    )
}

export default TextField