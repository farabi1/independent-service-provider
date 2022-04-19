import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { auth } from '../../firebase.init';

const Signup = () => {

    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                navigate("/");
            }).catch((error) => {

                const errorMessage = error.message;

            });
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });
    };


    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <div className="my-3">
                    <Button onClick={googleAuth}>Google Signup</Button>
                </div>
            </Form>
        </div>
    );
};

export default Signup;