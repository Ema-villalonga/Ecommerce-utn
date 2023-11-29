import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)
  return(
    <nav className='nav-container'>
        <Link to='/' className='nav-logo'>Tech Shop</Link>
        <div className='icon' onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <MenuIcon className='icon-menu' />
        </div>
            <div className='nav-links'>
            <ul className={menuOpen ? "open" : ""} >
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
            </ul>
            </div>
        </nav>
  )
}


