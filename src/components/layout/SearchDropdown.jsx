import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../styles/NavigationBar.css';

function SearchDropdown({ onClose }) {
  return (
    <Modal
      show={true}
      onHide={onClose}
      dialogClassName="modal-90w"
      aria-labelledby="search-dropdown-modal-title"
      // size='xl'
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className='searchDropdown'>
          <div className='search'>
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
      </Modal.Body>
    </Modal>
  );
}

export default SearchDropdown;
