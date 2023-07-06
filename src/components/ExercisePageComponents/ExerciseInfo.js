import React from 'react'
import { Col } from 'react-bootstrap'
import test from '../../assets/test.gif'
import bodyPart from '../../assets/icons/body-part.png'
import equipment from '../../assets/icons/equipment.png'
import target from '../../assets/icons/target.png'
import { useSelector } from 'react-redux'


const ExerciseInfo = () => {

   const exercise = useSelector(state => state.exercise)

   return (
      <div style={{ minHeight: '100vh' }} className="row">
         {
            exercise && exercise.data &&
            <>
               <Col className='d-flex justify-content-center align-items-center' sm='12' md='6' lg='6' >
                  <img src={exercise.data.gifUrl} alt="" />
               </Col>
               <Col className='d-flex justify-content-center align-items-center' sm='12' md='6' lg='6' >
                  <div>
                     <div className="exercise-name text-capitalize fs-1 fw-bold ">{exercise.data.name}</div>
                     <div className="description fs-4 mt-2">
                        Exercises keep you strong. {exercise.data.name} bup is one of the best
                        exercises to target your abs. It will help you improve your
                        mood and gain energy.
                     </div>
                     <div className="d-flex justify-content-start align-items-center gap-3 mt-4">
                        <img src={bodyPart} alt="" />
                        <span className='text-capitalize fw-bold fs-5'>{exercise.data.bodyPart}</span>
                     </div>
                     <div className="d-flex justify-content-start align-items-center gap-3 mt-4">
                        <img src={equipment} alt="" />
                        <span className='text-capitalize fw-bold fs-5'>{exercise.data.target}</span>
                     </div>
                     <div className="d-flex justify-content-start align-items-center gap-3 mt-4">
                        <img src={target} alt="" />
                        <span className='text-capitalize fw-bold fs-5'>{exercise.data.equipment}</span>
                     </div>
                  </div>
               </Col>
            </>
         }
      </div>
   )
}

export default ExerciseInfo