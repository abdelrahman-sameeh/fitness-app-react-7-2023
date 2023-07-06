import React from 'react'

import layoutImg from '../../assets/images/fit.jpg'

const Layout = () => {
   
   return (
      <div className="layout">
         <div className="container d-flex ">
            <div className="txt">
               <p className='text-capitalize fw-bold fs-1'> fitness club </p>
               <p className='text-capitalize fs-2'> Sweat, Smile <br /> And Repeat </p>
               <p className='fs-3'>Check out the most effective exercises personalized to you</p>
               <div className="btn text-capitalize fw-bold fs-4"> explore <br/> exercises </div>
            </div>
            <div className="image">
               <img className='rounded' src={layoutImg} alt="" />
            </div>
         </div>
      </div>
   )
}

export default Layout