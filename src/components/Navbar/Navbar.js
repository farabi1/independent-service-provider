import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';


const auth = getAuth(app);

const Navbar = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log('error',error)
        })
    }

    return (
        <>
            <div className="nav-container">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/checkout'>Checkout</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/blogs'>Blogs</Link>
                <Link className='link' to='/about'>About me</Link>
                <Button onClick={handleGoogleSignIn}>Google Sign in</Button>
            </div>
        </>
    );
};

export default Navbar;