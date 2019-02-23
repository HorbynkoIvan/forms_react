import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './basicForm.scss'

//Formik has a special config option / prop for Yup called validationSchema which will automatically
// transform Yup's validation errors into a pretty object whose keys match values and touched

const ValidationSchemaExample = () => {
    return (
        <div className='basicFormik'>
            <h1>Signin</h1>
            <Formik>
                {
                    ({}) => (
                        <Form>
                            <Field name='firstName'/>
                            <Field name='lastName'/>
                            <Field type='email' name='email'/>
                            <button>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default ValidationSchemaExample;