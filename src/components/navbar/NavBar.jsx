import React from 'react'

import './NavBar.scss'

// Comp
import ThemeBtn from '../theme/ThemeBtn'

function NavBar() {
  return (
    <div>
        <header className='container'> <h3> Countries Wordlwide </h3> <ThemeBtn /> </header>
    </div>
  )
}

export default NavBar