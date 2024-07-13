import Pagination from 'react-bootstrap/Pagination';

function PaginationComponent() {
  return (
    <>
        <div className='pagination' size='sm'>
            <Pagination>
            <Pagination.Prev />
            <Pagination.Item active >{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Next />
            </Pagination>
        </div>
    </>
  );
}

export default PaginationComponent;