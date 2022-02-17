import './header.css'




function Header() {
    return (
        <>
        <header className="App-header">
          <h1>English words</h1>
          <nav className="header-links">
              <div to="/" className='link'>Home</div>
              <div to="/Training" className='link'>Training</div>
              <div to="/Categories" className='link'>Categories</div>
              <div to="/Card" className='link'>Add a card</div>
          </nav>
        </header>

        </>
    );
  }
  
  export default Header;