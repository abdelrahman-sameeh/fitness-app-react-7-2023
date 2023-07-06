import React from 'react'
import ExerciseInfo from '../components/ExercisePageComponents/ExerciseInfo'
// import YoutubeVideoExercise from '../components/ExercisePageComponents/Youtube-video-exercise'
import SimilarTargetMuscle from '../components/ExercisePageComponents/SimilarTargetMuscle'
import SimilarEquipmentMuscles from '../components/ExercisePageComponents/SimilarEquipmentMuscles'

const ExercisePage = () => {
  return (
    <div className="exercise-page">
      <div className="container">
        <ExerciseInfo />
        {/* <YoutubeVideoExercise /> */}
        <SimilarTargetMuscle />
        <SimilarEquipmentMuscles />
      </div>
    </div>
  )
}

export default ExercisePage