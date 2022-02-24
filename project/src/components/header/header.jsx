import './header.css'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <>
        <header className="header">
          <h1>English words</h1>
          <nav className="header_menu">
          <Link to="/"  className='menu_link'>Home</Link>
          <Link to="/Training"className='menu_link'>Training</Link>
          <Link to="/Categories" className='menu_link'>Categories</Link>
          <Link to="/Card"  className='menu_link_add'>Add a card</Link>
          </nav>
        </header>

        </>
    );
  }
  
  export default Header;