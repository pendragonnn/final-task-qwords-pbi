import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const onMenuClickHandle = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <nav className='w-full fixed z-50 bg-white top-0 left-0 shadow-sm'>
      <div className="container mx-auto flex items-center justify-between">
        <img src="https://i.ibb.co/30H4CbX/logo-qw-light.webp" className='w-40 p-2 md:w-60 lg:w-36 lg:ml-2' alt="logo-qw-light" border="0" />
        {isMenuActive ? (
          <button className='p-2 lg:hidden' onClick={onMenuClickHandle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-8 md:w-12 md:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        ) : (
          <button className='p-2 lg:hidden' onClick={onMenuClickHandle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-8 md:w-12 md:h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )
        }

        <div className='hidden lg:flex mr-2 w-100 gap-20'>
          {/* for large screen */}
          <ul className='hidden lg:flex gap-4 text-orangeKeyword text-base font-bold item-center'>
            <li className='p-2'><a href="" >Cloud Hosting</a></li>
            <li className='p-2'><a href="">Server</a></li>
            <li className='p-2'><a href="">Domain</a></li>
            <li className='p-2'><a href="">Email Suit</a> </li>
            <li className='p-2'><a href="">Services</a> </li>
            <li className='p-2'><a href="">Internet Access</a> </li>
            <li className='p-2'><a href="">🎁 Promo</a></li>
          </ul>
          <button className='p-2 w-20 rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold text-base hover:border hover:border-orange-500 hover:p-1'>Log in</button>
        </div>


        {/* menu active mode */}
        {isMenuActive && (
          <div className='absolute lg:hidden bg-white rounded-xl right-2 top-24 p-4 h-fit'>
            <ul className='flex flex-col gap-2 text-xl md:text-3xl text-orangeKeyword'>
              <li>Cloud Hosting</li>
              <li>Server</li>
              <li>Domain</li>
              <li>Services</li>
              <li>Internet Access</li>
              <li>Customer Care</li>
              <li>🎁 Promo</li>
              <div className='flex gap-1 justify-center'>
                <button className='bg-orange-900 p-1 rounded'>Daftar</button>
                <button className='bg-orange-900 p-1 rounded'>Log in</button>
              </div>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}