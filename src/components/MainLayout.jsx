import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return ( 
    <div>
        <div className='bg-white shadow-500 sticky top-0 z-50'>
        <header className='flex gap-5 flex-col md:flex-row items-center container  justify-between py-5 '>
            <img src="public\images\Logo.png" alt="logo" />
            <nav className='flex gap-10'>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='search' >Search</NavLink>
                <NavLink to='about-us' >About Us</NavLink>
                <NavLink to='contact-us' >Contact Us</NavLink>
            </nav>
        </header>
        </div>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>

    </div>
    
  )
}

export default MainLayout