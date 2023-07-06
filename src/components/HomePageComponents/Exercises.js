import React, { useState } from 'react'
import test from '../../assets/test.gif'
import { Link } from 'react-router-dom'
import PaginationComp from '../utility/PaginationComp'
import AllExercisesHook from '../../custom-hook/Home/all-exercises-hook'
import { Spinner } from 'react-bootstrap'

const Exercises = () => {

   const [exercises, loadingExercises, exercisess, getPaginateNum, handleClickOnExercise] = AllExercisesHook()

   

   return (
      <div id='exercises' className="exercises mt-5">
         <div className="container">
            <div className="fs-2 text-capitalize fw-bold">
               exercises
            </div>

            {loadingExercises ?
               // loading
               <div className="d-flex justify-content-center align-items-center w-100">
                  <Spinner animation="grow" variant="danger" />
               </div>
               :

               (exercisess && exercisess.length) ?
                  <div className="boxes">

                     {
                        (exercisess && exercisess.length) &&
                        exercisess.map((exercise, index) => {
                           return <div key={index} className="box bg-light p-2 rounded">
                              <div className="image ">
                                 <Link to={`/exercise/${exercise.id}`}>
                                    <img className='w-100 rounded' src={exercise.gifUrl} alt="" />
                                 </Link>
                              </div>
                              <div className="target mt-2 d-flex justify-content-center align-items-center gap-2">
                                 <p style={{ width: 'fit-content' }} className='m-0 p-0 px-3 py-2 text-light rounded fs-5 my-2' >{exercise.bodyPart}</p>
                                 <p style={{ width: 'fit-content' }} className='m-0 p-0 px-3 py-2 text-light rounded fs-5 my-2' >{exercise.target}</p>
                              </div>
                              <div className="exercise-name text-capitalize fw-bold fs-3">
                                 {exercise.name}
                              </div>
                           </div>
                        })
                     }

                  </div>
                  : (!exercisess.length && exercises && exercises.data) ?
                     <div className="boxes">
                        {
                           exercises.data.slice(0, 9).map((exercise, index) => {
                              return <div key={index} className="box bg-light p-2 rounded">
                                 <div className="image ">
                                    <Link onClick={()=>handleClickOnExercise(exercise.id, exercise.target, exercise.equipment)} to={`/exercise/${exercise.id}`}>
                                       <img className='w-100 rounded' src={exercise.gifUrl} alt="" />
                                    </Link>
                                 </div>
                                 <div className="target mt-2 d-flex justify-content-center align-items-center gap-2">
                                    <p style={{ width: 'fit-content' }} className='m-0 p-0 px-3 py-2 text-light rounded fs-5 my-2' >{exercise.bodyPart}</p>
                                    <p style={{ width: 'fit-content' }} className='m-0 p-0 px-3 py-2 text-light rounded fs-5 my-2' >{exercise.target}</p>
                                 </div>
                                 <div className="exercise-name text-capitalize fw-bold fs-3">
                                    {exercise.name}
                                 </div>
                              </div>
                           })
                        }
                     </div>

                     : <div className="alert alert-danger text-center fs-2 text-capitalize fw-bold">
                        Error can't load data from server 😥
                     </div>
            }


            {/*  start pagination  */}
               <PaginationComp onChange={getPaginateNum} />

         </div>
      </div>
   )
}

export default Exercises