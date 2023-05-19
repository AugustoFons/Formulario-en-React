import React from 'react'
import { ErrorMessage ,useField } from 'formik'

const TextArea = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className='mb-2'>
            <label htmlFor={field.name}>{label}</label> {/* recibe el name de la props */}
            <textarea id="message" cols="30" rows="8"
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props}
            autoComplete="off"
            ></textarea>
            <ErrorMessage component='div' name={field.name} className='error'/>
        </div>
    )
}

export default TextArea