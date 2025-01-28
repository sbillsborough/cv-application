import { useState } from "react";
import { EditButton } from "./EditButton";

function EducationalExperience() {
  const [educationalExperience, setEducationalExperience] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  const handleInput = (event, fieldName) => {
    setEducationalExperience((prevEducationalExperience) => ({
      ...prevEducationalExperience,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <>
      <h2>Educational Experience</h2>
      <h3>School name: {educationalExperience.schoolName}</h3>
      <input
        type="text"
        value={educationalExperience.schoolName}
        onChange={(e) => {
          handleInput(e, "schoolName");
        }}
      />
      <h3>Title of study:</h3>
      <h3>Date of study</h3>
      <EditButton />
    </>
  );
}

export { EducationalExperience };
