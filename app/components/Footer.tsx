import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='mt-auto text-center text-zinc-400 px-7 border-t'>
        
      <small> &copy; {currentYear} All rights reserved</small>
    </footer>
  )
}

export default Footer
