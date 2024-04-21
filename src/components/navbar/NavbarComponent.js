import React from 'react'
import './Navbar.css'
import AppIcon from '../../public/AppIcon.png';
import { Link, useLocation } from 'react-router-dom';



const NavbarComponent = () => {
  const location = useLocation();
  return (
    <div className='nav-container'>
      <Link className='link' to="/"><img className="app-icon" src={AppIcon} /></Link>
      <span><h1 className='welcome'>Welcome User</h1></span>
      <ul>
        <li>
          {location.pathname === '/dailyPage' ? (<Link className='link' to="/">Home</Link>) : <Link className='link' to="dailyPage">Daily</Link>}
        </li>
        <li>
          {location.pathname === '/weekPage' ? (<Link className='link' to="/">Home</Link>) : <Link className='link' to="weekPage">Weekly</Link>}
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent