import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router'

const Navbar = ({setShowLogin}) => {
   const [menu, setMenu] = useState("Home");
   return (
       <div className='navbar'>
         <img src={assets.logo} className='logo'/>
         <ul className='navbar-menu'>
            <Link to='/' className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link>
            <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
            <a href='#app-download' className={menu === "Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile-app</a>
            <a href='#footer' className={menu === "Contact-us" ? "active" : ""} onClick={() => setMenu("Contact-us")}>Contact-us</a>
         </ul>
         <div className="navbar-right">
             <img src={assets.search_icon} alt="" />
             <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
             </div>
             <button onClick={() => setShowLogin(true)}>Sign in</button>
         </div>
       </div>
   )
}

export default Navbar