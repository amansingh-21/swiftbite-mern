import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} alt="" id='footer-logo' />
           <p>Discover a wide variety of delicious meals from your favorite restaurants, add them to your cart with ease, and enjoy a seamless online food ordering experience. We are committed to delivering fresh, high-quality food quickly and reliably, making every meal convenient and satisfying.</p>
           <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-7890</li>
              <li>contact@swiftbite.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
         Copyright 2026 &copy; swiftbite.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
