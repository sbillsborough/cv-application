import { useState } from "react";
import { EditButton } from "./EditButton";

function GeneralInformation() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInput = (event, fieldName) => {
    setGeneralInformation((prevGeneralInformation) => ({
      ...prevGeneralInformation,
      [fieldName]: event.target.value,
    }));
    return generalInformation[fieldName];
  };

  console.log("Current state fullName:", generalInformation.fullName);
  console.log("Current state email:", generalInformation.email);
  console.log("Current state phoneNumber:", generalInformation.phoneNumber);

  return (
    <>
      <h2>General Information</h2>
      <h3>Full Name: {generalInformation.fullName}</h3>
      <input
        type="text"
        value={generalInformation.fullName}
        onChange={(e) => {
          handleInput(e, "fullName");
        }}
      />
      <h3>Email: {generalInformation.email}</h3>
      <input
        type="text"
        value={generalInformation.email}
        onChange={(e) => {
          handleInput(e, "email");
        }}
      />
      <h3>Phone Number: {generalInformation.phoneNumber}</h3>
      <input
        type="text"
        value={generalInformation.phoneNumber}
        onChange={(e) => {
          handleInput(e, "phoneNumber");
        }}
      />
      <EditButton />
    </>
  );
}

export { GeneralInformation };
