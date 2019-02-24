import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import '../basicForm.scss';

//run after any onChange and onBlur by default. This behavior can be altered at the top level
// <Formik/> component using the validateOnChange and validateOnBlur props respectively.

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateUsername(value) {
    let error;
    if(value === 'admin'){
        error = 'Nice try!)'
    }
    return error;
}

const FieldLevelValidationExample = () => (
    <div className='basicFormik'>
        <h1>FieldLevelValidationExample</h1>
        <Formik
            initialValues={{
                username: '',
                email: '',
            }}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({errors, touched, isValidating}) => (
                <Form>
                    <Field name="email" validate={validateEmail}/>
                    {errors.email && touched.email && <div>{errors.email}</div>}

                    <Field name="username" validate={validateUsername}/>
                    {errors.username && touched.username && <div>{errors.username}</div>}

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default FieldLevelValidationExample;