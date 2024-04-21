import React from 'react'
import './Footer.css';
import { FaRegCopyright } from "react-icons/fa";


const FooterComponent = () => {
  return (
      <div className='footer-container'>
         <p className='footer-para'><FaRegCopyright /> All Rights Reserved</p>
      </div>
  )
}

export default FooterComponent