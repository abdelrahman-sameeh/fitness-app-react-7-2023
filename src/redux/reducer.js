import { ERROR, GET_ALL_EXERCISES, GET_EQUIPMENT_MUSCLE, GET_EXERCISE_BY_ID, GET_SPECIFIC_EXERCISES, GET_TARGET_MUSCLE, PARTS_OF_BODY } from "./type";

const initialState = {
   partsOfBody: [],
   exercises: [],
   loadingParts: true,
   loadingExercises: true
}

const gymReducer = (state = initialState, action) => {
   switch (action.type) {
      case PARTS_OF_BODY:
         return {
            ...state,
            partsOfBody: action.payload,
            loadingParts: false
         }

      case GET_ALL_EXERCISES:
         return {
            ...state,
            exercises: action.payload,
            loadingExercises: false
         }

      case GET_SPECIFIC_EXERCISES:
         return {
            ...state,
            exercises: action.payload,
            loadingExercises: false
         }

      case GET_EXERCISE_BY_ID:
         return {
            ...state,
            exercise: action.payload,
            loadingExercises: false
         }

      case GET_TARGET_MUSCLE:
         return {
            ...state,
            targetMuscle: action.payload,
         }

      case GET_EQUIPMENT_MUSCLE:
         return {
            ...state,
            equipmentMuscle: action.payload,
         }

      case ERROR:
         return {
            ...state,
            data: action.payload,
            loading: false
         }

      default:
         return state
   }



}
export default gymReducer;