import React, { useState } from 'react';

const Lesson = () => {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const totalExercises = 3; // Replace with the actual number of exercises

  const handleNextExercise = () => {
    setExerciseIndex(exerciseIndex + 1);
  };

  const handlePreviousExercise = () => {
    setExerciseIndex(exerciseIndex - 1);
  };

  return (
    <div>
      <h2>Lesson Title</h2>
      <p>Exercise {exerciseIndex + 1}</p>
      {/* Render exercise content based on exerciseIndex */}
      <button onClick={handlePreviousExercise} disabled={exerciseIndex === 0}>
        Previous Exercise
      </button>
      <button onClick={handleNextExercise}>
        Next Exercise
      </button>
    </div>
  );
};

export default Lesson;
