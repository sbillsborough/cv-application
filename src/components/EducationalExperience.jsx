import { useState } from "react";
import { SaveButton } from "./SaveButton";

function EducationalExperience({ onSave }) {
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
        placeholder="School Name"
      />
      <h3>Title of study: {educationalExperience.studyTitle}</h3>
      <input
        type="text"
        value={educationalExperience.studyTitle}
        onChange={(e) => {
          handleInput(e, "studyTitle");
        }}
        placeholder="Subject"
      />
      <h3>Date of study (MM/YY - MM/YY): {educationalExperience.studyDate}</h3>
      <input
        type="text"
        value={educationalExperience.studyDate}
        onChange={(e) => {
          handleInput(e, "studyDate");
        }}
        placeholder="from (MM/YY) to (MM/YY)"
      />
      <SaveButton handleClick={onSave} data={educationalExperience} />
    </>
  );
}

export { EducationalExperience };
