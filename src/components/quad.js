import React, { useState, useRef } from 'react';
import styles from './muscles.css';

// Import muscle groups data
import quadStretchesData from './LegsFolder/QuadFolder/stretches.json';
import foamRollingData from './LegsFolder/QuadFolder/rolling.json';
import quadStrength from './LegsFolder/QuadFolder/strength.json';

const QuadModal = ({ visible, onClose }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [stopwatchVisible, setStopwatchVisible] = useState(false);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const stopwatchRef = useRef(null);
  const [stopwatchTime, setStopwatchTime] = useState(0);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    setSelectedExercise(null);
  };

  const handleExercisePress = (exercise) => {
    setSelectedExercise(exercise);
  };

  const renderExercises = () => {
    if (selectedCategory === 'Stretches') {
      return quadStretchesData.quad_stretches.map((exercise, index) => (
        <button
          key={index}
          onClick={() => handleExercisePress(exercise)}
          className="button"
        >
          {exercise.name}
        </button>
      ));
    } else if (selectedCategory === 'Foam Rolling') {
      return foamRollingData.foam_rolling_quads.map((exercise, index) => (
        <button
          key={index}
          onClick={() => handleExercisePress(exercise)}
          className="button"
        >
          {exercise.name}
        </button>
      ));
    } else if (selectedCategory === 'Strength') {
      return quadStrength.quad_exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => handleExercisePress(exercise)}
          className="button"
        >
          {exercise.name}
        </button>
      ));
    }
    return null;
  };

  const handleStartStopwatch = () => {
    if (!stopwatchRunning) {
      setStopwatchRunning(true);
      stopwatchRef.current = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(stopwatchRef.current);
      setStopwatchRunning(false);
    }
  };

  const handleResetStopwatch = () => {
    clearInterval(stopwatchRef.current);
    setStopwatchTime(0);
    setStopwatchRunning(false);
  };

  return (
    <div className="modal" style={{ display: visible ? 'block' : 'none' }}>
      <div className="modal-content">
        <h2 className="title">Quad Exercises</h2>
        {!selectedCategory && (
          <>
            <button onClick={() => handleCategoryPress('Stretches')} className="button">
              Stretches
            </button>
            <button onClick={() => handleCategoryPress('Foam Rolling')} className="button">
              Foam Rolling
            </button>
            <button onClick={() => handleCategoryPress('Strength')} className="button">
              Strength
            </button>
          </>
        )}
        {selectedCategory && (
          <>
            {renderExercises()}
            <button onClick={() => setSelectedCategory(null)} className="button">
              Back
            </button>
          </>
        )}
        <button onClick={() => setStopwatchVisible(true)} className="button">
          Show Stopwatch
        </button>
        {stopwatchVisible && (
          <div className="stopwatch-container">
            <p className="stopwatch-text">{stopwatchTime}</p>
            <button onClick={handleStartStopwatch} className="button">
              {stopwatchRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleResetStopwatch} className="button">
              Reset
            </button>
          </div>
        )}
        <button onClick={onClose} className="close-button">
          Close
        </button>
        {selectedExercise && (
          <div className="selected-exercise-container">
            <h3 className="selected-exercise-name">{selectedExercise.name}</h3>
            <p className="selected-exercise-description">{selectedExercise.description}</p>
            <img
              src={selectedExercise.image_url}
              alt={selectedExercise.name}
              className="selected-exercise-image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuadModal;
