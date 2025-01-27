import { useState } from "react";
import { EditButton } from "./EditButton";

function GeneralInformation() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleNameInput = (event) => {
    setGeneralInformation((prevGeneralInformation) => ({
      ...prevGeneralInformation,
      fullName: event.target.value,
    }));
    return generalInformation.fullName;
  };

  console.log("Current state:", generalInformation.fullName);

  return (
    <>
      <h2>General Information</h2>
      <h3>Full Name: {generalInformation.fullName}</h3>
      <input
        type="text"
        value={generalInformation.fullName}
        onChange={handleNameInput}
      />
      <EditButton />
    </>
  );
}

export { GeneralInformation };
