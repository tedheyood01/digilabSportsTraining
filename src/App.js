// App.js
import React, { useState } from 'react';
import Header from './components/header';
import MainContent from './components/MainContent';

const App = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  const handleSelectBodyPart = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
  };

  return (
    <div className="container">
      <Header title="Digilab Sports Training" />
      <MainContent onSelectBodyPart={handleSelectBodyPart} />
      {selectedBodyPart && <p>{selectedBodyPart} selected!</p>}
    </div>
  );
};

export default App;
