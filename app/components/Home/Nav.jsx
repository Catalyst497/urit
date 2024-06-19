import React from 'react'

function Nav() {
  return (
    <nav className='flex justify-between items-center py-[2rem] px-[2rem]'>
        <div><img src="./Logo.png" alt="" /></div>
        <ul className='flex gap-[1.5rem]'>
            <li>About Us</li>
            <li>Product</li>
            <li>Services</li>
            <li>Resources</li>
        </ul>
        <div>
            <img src="./Login button.png" alt="" />
        </div>
    </nav>
  )
}

export default Nav