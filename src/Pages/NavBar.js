import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-900">
            <div className="flex-1">
                <div>
                    <img className='w-16 m-5' src="https://img.freepik.com/free-vector/flat-design-fashion-show-facebook-cover-template_23-2149253233.jpg" alt="" />
                </div>
                <div>
                    <p className=" normal-case text-3xl text-white">Petopia</p>
                    <small className='text-dark'>Location</small>
                </div>
            </div>
            <div className="flex-none gap-2 text-white">
                <Link className='ml-2'>Contact Us</Link>
                <Link className='ml-2'>Cart</Link>
                <Link className='ml-2'>My account</Link>


            </div>
        </div>
    );
};

export default NavBar;