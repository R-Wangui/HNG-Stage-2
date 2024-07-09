import React from 'react'

function SearchDropdown() {
  return (
    <>
        <div className='searchDropdown'>
            <div className='search'>
                <input type="text" placeholder='Find what you are looking for' /> <span><i class="bi bi-x-lg"></i></span>
                <ul>
                    <p>Top Search</p>
                    <li>Perl</li>
                    <li>Charm</li>
                    <li>Hoops</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default SearchDropdown