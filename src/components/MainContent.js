import React, { useState } from 'react';
import styles from './mainContentStyles.css';

// Import muscle groups data
import muscleGroups from './muscleGroups.json'; // assuming you have the JSON file in the same directory

// Import Modal components
import QuadModal from './quad';
import HamstringModal from './hamstring';
import GluteModal from './glutes';
import CalfModal from './calf';

const MainContent = ({ onSelectMuscle }) => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const handleGroupPress = (group) => {
    setActiveGroup(activeGroup === group ? null : group);
    console.log("Selected muscle group:", group); // Log the selected muscle group
  };

  const handleMusclePress = (muscle) => {
    console.log("Selected muscle:", muscle); // Log the selected muscle
    setSelectedMuscle(muscle); // Set the selected muscle
    setModalVisible(true); // Open the modal
  };

  // Mapping between muscles and modal components
  const muscleModalMap = {
    quadriceps: QuadModal,
    hamstrings: HamstringModal,
    glutes: GluteModal,
    calves: CalfModal,
    // Add more muscles and their corresponding modal components as needed
  };

  const ModalComponent = muscleModalMap[selectedMuscle];

  return (
    <div className="container">
      {muscleGroups.muscle_groups && Object.entries(muscleGroups.muscle_groups).map(([group, muscles]) => (
        <div key={group}>
          <button onClick={() => handleGroupPress(group)} className="button">
            {group}
          </button>
          {activeGroup === group && (
            <div>
              {muscles.map((muscle) => (
                <button
                  key={muscle}
                  onClick={() => handleMusclePress(muscle)}
                  className="subButton"
                >
                  {muscle}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Render the selected muscle's modal component */}
      {selectedMuscle && ModalComponent && (
        <ModalComponent visible={modalVisible} onClose={() => setModalVisible(false)} />
      )}
    </div>
  );
};

export default MainContent;
