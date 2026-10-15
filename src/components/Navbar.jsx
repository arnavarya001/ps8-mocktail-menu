import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
  return (
    <nav>
      <h2>Mocktail Menu</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/drinks">Drinks</Link>
      </div>
    </nav>
  )
}

export default Navbar
