import { useState } from "react";
import { SaveButton } from "./SaveButton";

function PracticalExperience() {
  const [practicalExperience, setPracticalExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    employmentDate: "",
  });

  return (
    <>
      <h2>Practical Experience</h2>
      <SaveButton />
    </>
  );
}

export { PracticalExperience };
