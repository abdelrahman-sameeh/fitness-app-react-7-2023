import React, { useEffect } from 'react'

import youtube from '../../assets/youtube.jpg'
import { Link } from 'react-router-dom'

const YoutubeVideoExercise = () => {


   return (
      <div className="youtube-video-exercise mt-5">
         <div className="title fs-1 fw-bold mb-3" > Watch <span className="exercise-name text-danger">45° Side Bend</span> exercise videos </div>
         <div className="grid-boxes">
            <Link>
               <div className="image" style={{ height: '200px' }}>
                  <img className='rounded w-100 h-100' style={{ objectFit: 'cover' }} src={youtube} alt="" />
               </div>
               <div className="video-title text-capitalize fs-4 mt-1">45 slide bend</div>
               <span className="chanel-name text-black-50">gym visual</span>
            </Link>
            <Link>
               <div className="image" style={{ height: '200px' }}>
                  <img className='rounded w-100 h-100' style={{ objectFit: 'cover' }} src={youtube} alt="" />
               </div>
               <div className="video-title text-capitalize fs-4 mt-1">45 slide bend</div>
               <span className="chanel-name text-black-50">gym visual</span>
            </Link>
            <Link>
               <div className="image" style={{ height: '200px' }}>
                  <img className='rounded w-100 h-100' style={{ objectFit: 'cover' }} src={youtube} alt="" />
               </div>
               <div className="video-title text-capitalize fs-4 mt-1">45 slide bend</div>
               <span className="chanel-name text-black-50">gym visual</span>
            </Link>

         </div>
      </div>
   )
}

export default YoutubeVideoExercise