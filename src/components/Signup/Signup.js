import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

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

        </div>
    );
};

export default Signup;