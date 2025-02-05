import React from 'react'
import { Link, NavLink } from 'react-router'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <ul>
                {/* <li> <NavLink to='/' className={({isActive}) => isActive ? 'color' : ''} >Home</NavLink> </li> */}
                <li> <Link to='/' >Home</Link> </li>
                <li> <Link to='/about' >About</Link> </li>
                <li> <Link to='/services' >Services</Link> </li>
                <li> <Link to='/contact' >Contact</Link> </li>
                <li> <Link to='/useNavigation' >UseNavigation</Link> </li>
                
            </ul>
        </div>
    )
}

export default Navbar

{/* <Link></Link> */}
// work as an ancher without refreshing the page

{/* <NavLink></NavLink> */}
//we can access it's attribute isActive using this we are handle the activeness of navbar

