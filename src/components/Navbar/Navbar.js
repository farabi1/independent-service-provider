import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/checkout'>Checkout</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/blogs'>Blogs</Link>
                <Link className='link' to='/about'>About me</Link>
            </div>
        </>
    );
};

export default Navbar;