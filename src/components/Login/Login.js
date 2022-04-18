import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';



const Login = () => {

    const provider = new GoogleAuthProvider();

    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
               
                const user = result.user;
               
            }).catch((error) => {
                
                const errorMessage = error.message;
               
            });
    }




    return (
        <div className='w-50 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <div className="my-3">
                    <Button onClick={googleAuth}>Google Login</Button>
                    <Link className='link' to='/signup'>Signup</Link>

                </div>
            </Form>
        </div>
    );
};

export default Login;