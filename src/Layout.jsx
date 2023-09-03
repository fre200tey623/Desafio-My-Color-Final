import React from 'react'
import Footer from './componentes/Footer'

function Layout({ children }) {
  
  return (
    <div className='w-full h-full'>
            {children}
        <Footer /> 
    </div>
  )
}

export default Layout