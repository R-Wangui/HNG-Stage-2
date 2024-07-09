import './styles/NavigationBar.css'

function SearchDropdown({ onClose }) {
  return (
    <>
        <div className='searchDropdown'>
            <div className='search'>
              <i onClick={onClose} class="bi bi-x-lg"></i>
              <div>
                <input className='searchInput' type="text" placeholder='Find what you’re looking for' />
                <p>Search any products and/or materials</p>
              </div>
              <h6>Top Search</h6>
              <div className='searchLinks'>
                <a href="http://" target="_blank" rel="noopener noreferrer">Pearl</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Charm</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Hoops</a>
              </div>
            </div>
        </div>
    </>
  )
}

export default SearchDropdown

{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                i
                        <NavDropdown.Item href="#action/3.1"> NEW ARRIVALS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1"> EARRINGS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1"> RINGS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1"> NECKLACES</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1"> BRACELETS</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1"> MEN'S</NavDropdown.Item>
              </NavDropdown> */}