import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './basicForm.scss'

const Basic = () => {
    return (
        <div className='basicFormik'>
            <h2>New form 2</h2>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="email" name="email"/>
                        <ErrorMessage name='email' component='div'/>
                        <Field type="password" name="password"/>
                        <ErrorMessage name='password' component='div'/>
                        <Field type="password" name="password"/>
                        <ErrorMessage name='password' component='div'/>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
};

export default Basic;
