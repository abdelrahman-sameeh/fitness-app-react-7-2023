import React from 'react'

const Search = () => {
   return (
      <div className="search">
         <div className="container d-flex justify-content-center align-items-center flex-column ">
            <p className='fs-1 text-center fw-bold'>Awesome Exercises You<br />Should Know</p>
            <form className='w-50 d-flex justify-content-center align-items-center' >
               <input className='form-control px-3 py-2 w-100 ' type="search" placeholder='Search exercises' />
               <button type='submit' className="btn">Search</button>
            </form>
         </div>
      </div>
   )
}

export default Search