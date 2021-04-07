import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' 

function Navbar() {
    return (
        <div id='layout'>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/register'>Register</Link>
            <Link className='navlink' to='/login'>Login</Link>
            <Link className='navlink' to='/news'>Trending news</Link>
            <Link className='navlink' to='/videos'>Videos</Link>
            <Link className='navlink' to='/shop'>Farm store</Link>
        </div>
    )
}

export default Navbar
