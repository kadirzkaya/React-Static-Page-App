import React from 'react'
import logo from '../img/footer/logo_white.svg'

function Footer() {


  return (
    <div className='footer'>
      <div className='textWidth mx-auto'>
        <div className='py-4 d-flex justify-content-between'>
          <img src={logo} alt='logo' />
          <span>+1-543-123-4567</span>
          <span>example@huddle.com</span>
        </div>
        <div className='links d-flex justify-content-between'>
          <a href="/#">About Us</a>
          <a href="/#">What We Do</a>
          <a href="/#">FAQ</a>
          <a href="/#">Career</a>
          <a href="/#">Blog</a>
          <a href="/#">Contact Us</a>
        </div>
        <div className='text-center p-4'>
          <p>© 2023 Huddle. All rights reserved</p>
        </div>
      </div>
    </div>

  )
}

export default Footer