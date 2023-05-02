import { Link } from 'react-router-dom';
import '../header/Header.css'

function Header(){
     return (
          <header className = "header">
               <h1>Travel Destination</h1>
               <div className='nav'>
               <Link to={'/'} className='link'>Home</Link>
               </div>
          </header>
     )
}

export default Header;