import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

function Register() {

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
            document.getElementById("idCreatePostPage").innerHTML = "";
            document.getElementById("messageRegister").innerHTML = '<h1 id="registeredInfo">Registered successfully</h1>';
        });
    };

  return (
    <div>
        <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            <Form id="idCreatePostPage" className='formContainer'>
                <label className='labelPost'>Username: </label>
                <ErrorMessage name="username" component="error"/>
                <Field id="inputCreatePost" name="username" autocomplete="off" placeholder="Your username"/>

                <label className='labelPost'>Password: </label>
                <ErrorMessage name="password" component="error"/>
                <Field id="inputCreatePost" name="password" type="password" placeholder="Your password"/>
                <button type="sumbit">Register</button>
            </Form>
        </Formik>
        
        </div>
        <div>
        <h1 id="messageRegister"></h1>
        </div>
    </div>
    
  )
}

export default Register