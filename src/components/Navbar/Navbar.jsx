import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
        
        <nav>
            <div className='menu'>
                <Link to="/">Accueil</Link>
                <Link to="/music">Music</Link>
                <Link to="/art">Art</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    </>
  )
}
