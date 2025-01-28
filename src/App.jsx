import "./App.css";
import { GeneralInformation } from "./components/GeneralInformation.jsx";
import { EducationalExperience } from "./components/EducationalExperience.jsx";
import { PracticalExperience } from "./components/PracticalExperience.jsx";
import { SubmitButton } from "./components/SubmitButton.jsx";

function App() {
  return (
    <>
      <GeneralInformation />
      <EducationalExperience />
      <PracticalExperience />
      <SubmitButton />
    </>
  );
}

export default App;
