import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Image 
            src={'/zillow.png'}
            alt=''
            width={110}
            height={24}
        />
    </nav>
  )
}

export default Navbar