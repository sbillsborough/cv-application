import "./App.css";
import { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation.jsx";
import { EducationalExperience } from "./components/EducationalExperience.jsx";
import { PracticalExperience } from "./components/PracticalExperience.jsx";
import { SubmitButton } from "./components/SubmitButton.jsx";
import { DisplayInformation } from "./components/DisplayInformation.jsx";

function App() {
  const [savedData, setSavedData] = useState(null);

  // Function to collect data from all components
  const handleSubmit = (generalInfo, education, experience) => {
    setSavedData({ generalInfo, education, experience });
  };

  return (
    <>
      <GeneralInformation onSave={(data) => handleSubmit(data, null, null)} />
      <EducationalExperience
        onSave={(data) => handleSubmit(null, data, null)}
      />
      <PracticalExperience onSave={(data) => handleSubmit(null, null, data)} />
      <SubmitButton onSubmit={handleSubmit} />

      {/* Conditionally display saved data */}
      {savedData && <DisplayInformation data={savedData} />}
    </>
  );
}

export default App;
