import { NavLink } from "react-router-dom"
import './NavBar.css'
import { useState} from 'react'

export default function Navbar() {
    const [active,setActive]=useState('nav__menu');
    const [toggleIcon,setToggleIcon]=useState('nav__toggler')
    const navToggle=()=>{
        active === 'nav__menu' ?setActive('nav__menu nav__active') :setActive('nav__menu');
        // TogglerIcon

        toggleIcon === 'nav__toggler'
        ?setToggleIcon('nav__toggler toggle'):setToggleIcon('nav__toggler');
    };
  return (
    <nav className="nav">
    <a href="" className="nav__brand">Dinesh T</a>
    <ul className={active}>
      <li className="nav__item">
        <NavLink to='/'        className="nav__link" > Home    </NavLink>
        <NavLink to='/skills'  className="nav__link" > Skills  </NavLink>
        <NavLink to='/projects'className="nav__link" > Projects</NavLink>
        <NavLink to='/contact' className="nav__link" > Contact </NavLink>
      </li>
    </ul>
    <div onClick={navToggle} className={toggleIcon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
   </nav>
  )
}
