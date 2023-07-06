import React from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux';

const PaginationComp = ({onChange}) => {

   const handlePageClick = (element) => {
      onChange(element.selected +1)
   }

   const exercises = useSelector(state=>state.exercises)
   let numberOfPages;
   if(exercises && exercises.data)
      numberOfPages = exercises.data.length / 9


   return (
      <div className="d-flex justify-content-center align-items-center mt-5">
         <ReactPaginate
            breakLabel="..."
            nextLabel="after"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={numberOfPages}
            previousLabel="before"
            containerClassName='pagination justify-content-center'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            nextClassName='page-item'
            previousLinkClassName='page-link rounded'
            nextLinkClassName='page-link rounded'
            className='pagination'
            breakClassName='page-link'
            activeClassName='active'
         />
      </div>
   )
}

export default PaginationComp