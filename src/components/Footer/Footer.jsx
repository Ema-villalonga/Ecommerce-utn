import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer className="container-footer">
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/register'>Register</Link>
            </div>

            <div className='social-icons'>
                <div>
                    
                </div>
            </div>
        </footer>
    )
}