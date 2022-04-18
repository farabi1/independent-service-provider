import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Navbar.css';





const Navbar = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({});
            }
        });
    }, []);



    return (
        <>
            <div className="nav-container">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/checkout'>Checkout</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/blogs'>Blogs</Link>
                <Link className='link' to='/about'>About me</Link>
                {user?.uid ?<Button>Logout</Button> : <Link className='link' to='/login'>Log in</Link>}

            </div>
        </>
    );
};

export default Navbar;