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

  return (
    <>
      <h2>Practical Experience</h2>
      <SaveButton />
    </>
  );
}

export { PracticalExperience };
