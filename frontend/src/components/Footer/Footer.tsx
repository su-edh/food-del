import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content grid gap-9 md:grid-cols-4">
        <div className="footer-content-left md:col-span-2">
            <img src={assets.logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda vitae est unde facilis odio repudiandae, sapiente, molestiae illo reprehenderit maxime omnis maiores pariatur? Et repellendus optio veritatis vel dolore?</p>
            <div className="footer-social-icons grid grid-flow-col">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center md:col-span-1">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right md:col-span-1">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-989-892-2345</li>
                <li>contactus@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
