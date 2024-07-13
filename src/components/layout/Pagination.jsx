// import { Button } from 'react-bootstrap'

// function Pagination() {
//   return (
//     <>
//         <div>
//             <p>Showing 12 of 120 results</p>
//             <hr />
//             <Button>Load More</Button>
//         </div>
//     </>
//   )
// }

// export default Pagination

import Pagination from 'react-bootstrap/Pagination';

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );

render(paginationBasic);