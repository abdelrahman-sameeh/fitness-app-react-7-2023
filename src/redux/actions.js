import axios from "axios"
import { ERROR, GET_ALL_EXERCISES, GET_SPECIFIC_EXERCISES, PARTS_OF_BODY, GET_EXERCISE_BY_ID, config, GET_TARGET_MUSCLE, GET_EQUIPMENT_MUSCLE } from "./type"

export const getListPartsOfBody = () => {
   return async (dispatch) => {
      try {
         const res = await axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', config)
         dispatch({
            type: PARTS_OF_BODY,
            payload: res,
         })
      } catch (err) {
         dispatch({
            type: ERROR,
            payload: err
         })
      }
   }
}

export const getAllExercises = () => {
   return async (dispatch) => {
      try {
         const res = await axios.get('https://exercisedb.p.rapidapi.com/exercises', config)
         dispatch({
            type: GET_ALL_EXERCISES,
            payload: res,
         })
      } catch (err) {
         dispatch({
            type: ERROR,
            payload: err
         })
      }
   }
}

export const getSpecificExercises = (bodyPart) => {

   return async (dispatch) => {
      try {
         const res = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, config)
         dispatch({
            type: GET_SPECIFIC_EXERCISES,
            payload: res,
         })
      } catch (err) {
         dispatch({
            type: ERROR,
            payload: err,
         })
      }
   }
}

export const getExerciseById = (id) => {
   return async (dispatch) => {
      try {
         const res = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, config)
         dispatch({
            type: GET_EXERCISE_BY_ID,
            payload: res,
         })
      } catch (err) {
         dispatch({
            type: ERROR,
            payload: err,
         })
      }
   }
}

export const getTargetMuscles = (target) => {
   return async (dispatch) => {
      try {
         const res = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/target/${target}`, config)
         dispatch({
            type: GET_TARGET_MUSCLE,
            payload: res,
         })
      } catch (err) {
         dispatch({
            type: ERROR,
            payload: err,
         })
      }
   }
}

export const getEquipmentMuscles = (equipment) => {
   return async (dispatch) => {
      try {
         const res = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`, config)
         dispatch({
            type: GET_EQUIPMENT_MUSCLE,
            payload: res,
         })
      } catch (err) {
         dispatch({
            type: ERROR,
            payload: err,
         })
      }
   }
}



