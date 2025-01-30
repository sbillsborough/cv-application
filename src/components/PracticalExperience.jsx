import { useState } from "react";
import { SaveButton } from "./SaveButton";

function PracticalExperience() {
  const [practicalExperience, setPracticalExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    employmentDate: "",
  });

  const handleInput = (event, fieldName) => {
    setPracticalExperience((prevPracticalExperience) => ({
      ...prevPracticalExperience,
      [fieldName]: event.target.value,
    }));
  };

  const handleSave = () => {
    console.log("Saving Practical Experience:", practicalExperience);
  };

  return (
    <>
      <h2>Practical Experience</h2>
      <h3>Company Name: {practicalExperience.companyName}</h3>
      <input
        type="text"
        value={practicalExperience.companyName}
        onChange={(e) => {
          handleInput(e, "companyName");
        }}
        placeholder="Company Name"
      />
      <h3>Position Title: {practicalExperience.positionTitle}</h3>
      <input
        type="text"
        value={practicalExperience.positionTitle}
        onChange={(e) => {
          handleInput(e, "positionTitle");
        }}
        placeholder="Position"
      />
      <h3>Responsibilities: {practicalExperience.responsibilities}</h3>
      <input
        type="text"
        value={practicalExperience.responsibilities}
        onChange={(e) => {
          handleInput(e, "responsibilities");
        }}
        placeholder="Responsibilities"
      />
      <h3>
        Employment Date from - to (MM/YY): {practicalExperience.employmentDate}
      </h3>
      <input
        type="text"
        value={practicalExperience.employmentDate}
        onChange={(e) => {
          handleInput(e, "employmentDate");
        }}
        placeholder="Employment Date"
      />
      <SaveButton handleClick={handleSave} data={practicalExperience} />
    </>
  );
}

export { PracticalExperience };
