import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full flex justify-center gap-x-4 bg-blue-300 py-2'>
            <NavLink to={"/"}>Products</NavLink>
            <NavLink to={"/add-products"}>Add Products</NavLink>
        </div>
    );
};

export default Header;