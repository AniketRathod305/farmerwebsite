import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css' 


function Navbar() {
    return (
        <div id='layout'>
            <div className="logo">
            <img  className="logo_img" src="Farm.png"alt ="oka"></img>
            <ul className="logo_list">
                <li>FARM</li>
                <li>STAND</li>
            </ul>
            </div>
            <div className="links">
            <Link className='navlink' to='/register'>Register</Link>
            <Link className='navlink' to='/login'>Login</Link>
            <Link className='navlink' to='/news'>Trending news</Link>
            <Link className='navlink' to='/videos'>Videos</Link>
            <Link className='navlink' to='/shop'>Farm store</Link>
            </div>
            <div class="user">
                <ul className="user_list">
                    <li>Name</li>
                    <li>Log Out</li>
                </ul>
                <img className="user_pic" src="" alt="user"></img>
            </div>
        </div>
    )
}

export default Navbar
