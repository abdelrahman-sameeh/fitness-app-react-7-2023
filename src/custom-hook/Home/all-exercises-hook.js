import React, { useEffect, useState } from 'react'
import { getAllExercises, getEquipmentMuscles, getExerciseById, getTargetMuscles } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const AllExercisesHook = () => {

   const dispatch = useDispatch()
   const exercises = useSelector(state => state.exercises)
   const loadingExercises = useSelector(state => state.loadingExercises)

   const [exercisess, setExercisess] = useState([])


   const getPaginateNum = (paginateNum) => {
      setExercisess(exercises.data.slice(paginateNum, paginateNum + 9))
   }


   const handleClickOnExercise = (id, target, equipment) => {
      dispatch(getExerciseById(id))
      dispatch(getTargetMuscles(target))
      dispatch(getEquipmentMuscles(equipment))
   }

   useEffect(() => {
      dispatch(getAllExercises())
   }, [])

   return [exercises, loadingExercises, exercisess, getPaginateNum, handleClickOnExercise]
}

export default AllExercisesHook