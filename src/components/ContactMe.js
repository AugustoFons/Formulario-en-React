import React, { useRef } from 'react';
import { Formik,  Form } from 'formik'
import TextField from './TextField'
import Textarea from './TextArea'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'; //npm install @emailjs/browser 


const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // 1) buscar en emailService, 2)en email template, 3) dejar como esta, 4) Account -- api keys -- public keys 
        emailjs.sendForm('service_9vsro9i', 'template_vndoaxb', form.current, 'VVlLmi1iNNIDDwVdN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    const validate = Yup.object ({
        name: Yup.string()
        .max(35, 'Must be 35 characters or less')
        .required('Name is required'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'), //en caso de que no se ingrese un email
        subject: Yup.string()
        .required('Subject is required'),
        message: Yup.string()
        .required('Message is required')
    })

    return (

        <Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Contact Me</h1>
                    <Form onSubmit={sendEmail} ref={form}>
                        <TextField label='Enter your name' name='name' type='text' />
                        <TextField label='Enter your email' name='email' type='email' />
                        <TextField label='Enter your subject' name='subject' type='text' />
                        <Textarea label='Enter your message' name='message' />
                        <div style={{
                            display: 'flex',
                            columnGap: '15px'
                        }}>
                            <button className="btn btn-dark mt-3" type='submit'>Send</button>
                            <button className="btn btn-danger mt-3" type='reset' >Reset</button>     
                        </div>
                    </Form>
                </div>
            )}
        </Formik>


    )
}

export default ContactMe