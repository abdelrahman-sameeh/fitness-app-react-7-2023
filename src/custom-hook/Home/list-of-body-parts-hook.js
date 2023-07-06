import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExercises, getListPartsOfBody, getSpecificExercises } from '../../redux/actions'

const ListOfBodyPartsHook = () => {

   const dispatch = useDispatch()
   let parts = useSelector(state => state.partsOfBody)
   let loadingParts = useSelector(state => state.loadingParts)

   if(parts)
      parts.data = [ 'all', ...parts.data]


   // handle click on any part of body without all
   const handleClick = (bodyPart) => {
      if(bodyPart!=='all'){
         dispatch(getSpecificExercises(bodyPart))
      }else{
         dispatch(getAllExercises())
      }
   } 

   useEffect(() => {
      dispatch(getListPartsOfBody())
   }, [])

   return [parts, loadingParts, handleClick]
}

export default ListOfBodyPartsHook