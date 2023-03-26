import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import {useNavigate} from "react-router-dom"

function CreatePost() {
    
    let navigate = useNavigate();

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Empty field!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    });

    const onSubmit = (data) => {
        /* to przekazuje do serwera */
        axios.post("http://localhost:3001/posts", data).then((response) => {
            navigate('/posts');
        });
    };

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            <Form className='formContainer'>
                <label className='labelPost'>Title: </label>
                <ErrorMessage name="title" component="error"/>
                <Field id="inputCreatePost" name="title" placeholder="Title"/>

                <label className='labelPost'>Post: </label>
                <ErrorMessage name="postText" component="error"/>
                <Field autocomplete="off" id="inputCreatePost" name="postText" placeholder="Your post"/>

                <label className='labelPost'>Name: </label>
                <ErrorMessage name="username" component="error"/>
                <Field id="inputCreatePost" name="username" placeholder="Your name"/>
                <button type="sumbit">Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost