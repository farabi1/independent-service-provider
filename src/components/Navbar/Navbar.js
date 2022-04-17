import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/checkout'>Checkout</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About me</Link>
        </div>
    );
};

export default Navbar;