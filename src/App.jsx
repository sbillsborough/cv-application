import "./App.css";
import { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation.jsx";
import { EducationalExperience } from "./components/EducationalExperience.jsx";
import { PracticalExperience } from "./components/PracticalExperience.jsx";
import { SubmitButton } from "./components/SubmitButton.jsx";
import { DisplayInformation } from "./components/DisplayInformation.jsx";

function App() {
  const [formData, setFormData] = useState({
    generalInfo: {},
    education: {},
    experience: {},
  });

  const [savedData, setSavedData] = useState(null);

  // Update the relevant section of the form
  const handleSave = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  // Function to collect data from all components
  const handleSubmit = () => {
    setSavedData(formData);
    console.log("Final submitted data:", formData);
  };

  return (
    <div className="outer-container">
      <div className="enter-information-container">
        <GeneralInformation
          onSave={(data) => handleSave("generalInfo", data)}
        />
        <EducationalExperience
          onSave={(data) => handleSave("education", data)}
        />
        <PracticalExperience
          onSave={(data) => handleSave("experience", data)}
        />
        <SubmitButton onSubmit={handleSubmit} />
      </div>
      <div className="display-information-container">
        {/* Conditionally display saved data */}
        {savedData && <DisplayInformation data={savedData} />}
      </div>
    </div>
  );
}

export default App;
