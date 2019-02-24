import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import '../basicForm.scss'

//Formik has a special config option / prop for Yup called validationSchema which will automatically
// transform Yup's validation errors into a pretty object whose keys match values and touched


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const ValidationSchemaExample = () => (
    <div className='basicFormik'>
        <h1>ValidationSchemaExample</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                    ) : null}
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                        <div>{errors.lastName}</div>
                    ) : null}
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default ValidationSchemaExample;