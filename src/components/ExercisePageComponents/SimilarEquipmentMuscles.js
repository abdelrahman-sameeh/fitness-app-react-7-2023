import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SimilarEquipmentHook from '../../custom-hook/Exercise/similar-equipment-hook';



const SimilarEquipmentMuscles = () => {


   const [responsive, equipmentMuscle] = SimilarEquipmentHook()


   return (
      <div className="mt-5" style={{ userSelect: 'none' }}>
         <div className="title fs-1 fw-bold mb-2">
            Similar <span style={{ color: 'var(--main-color)' }} >Equipment</span> exercises
         </div>
         {  
            

            equipmentMuscle && equipmentMuscle.data.length ?
               <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
               >


                  {
                     equipmentMuscle.data.map(exercise => {
                        return <div key={exercise.id} className="box bg-light p-2 rounded">
                           <div className="image ">
                              <img className='w-100 rounded' src={exercise.gifUrl} alt="" />
                           </div>
                           <div className="target mt-2 d-flex align-items-center gap-2">
                              <p style={{ width: 'fit-content', backgroundColor: 'var(--main-color)' }} className='m-0 p-0 px-3 py-2 text-light rounded fs-5 my-2' >{exercise.bodyPart}</p>
                              <p style={{ width: 'fit-content', backgroundColor: 'var(--alt-color)' }} className='m-0 p-0 px-3 py-2 text-light rounded fs-5 my-2' >{exercise.target}</p>
                           </div>
                           <div className="exercise-name text-capitalize fw-bold fs-3">
                              {exercise.name}
                           </div>
                        </div>
                     })
                  }

               </Carousel> :
               <div className="alert alert-danger text-center fs-2 text-capitalize fw-bold">
                  Error can't load data from server 😥
               </div>
         }
      </div>
   )
}

export default SimilarEquipmentMuscles