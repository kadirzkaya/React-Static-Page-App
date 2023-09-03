import React from 'react'
import logo from '../img/header/logo.svg'
import illustration from '../img/header/illustration-mockups.svg'

function Header() {
  return (
    <div className='p-5 h-50 text-center header'>
      <div className='mx-auto textWidth'>
        <div className='d-flex justify-content-between mb-5'>
          <img src={logo} alt='logo' />
          <button className='px-5 fw-bold tryBtn'>Try It Free</button>
        </div>
        <div className='d-flex'>
          <div className='w-50 pe-5 d-flex flex-column row-gap-4 text-start'>
            <h1>Build The Community Your Fans Will Love</h1>
            <p className='fw-light'>
              Huddle re-imagines the way we build communities.
              You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <button className='fw-bold text-center getStartedBtn py-2 w-75'>Get Started For Free</button>
          </div>
          <img src={illustration} alt='header-img' className='w-50'/>
        </div>
      </div>

    </div>
  )
}

export default Header