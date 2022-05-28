import React from 'react';
import Link from 'react-router-dom';
;







const Navbar = () => {


    return (
        <>
            <div>
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