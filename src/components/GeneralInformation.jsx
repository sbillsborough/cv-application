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

  const handleEmailInput = (event) => {
    setGeneralInformation((prevGeneralInformation) => ({
      ...prevGeneralInformation,
      email: event.target.value,
    }));
    return generalInformation.email;
  };

  const handlePhoneNumberInput = (event) => {
    setGeneralInformation((prevGeneralInformation) => ({
      ...prevGeneralInformation,
      phoneNumber: event.target.value,
    }));
    return generalInformation.phoneNumber;
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
        onChange={handleNameInput}
      />
      <h3>Email: {generalInformation.email}</h3>
      <input
        type="text"
        value={generalInformation.email}
        onChange={handleEmailInput}
      />
      <h3>Phone Number: </h3>
      <input
        type="text"
        value={generalInformation.phoneNumber}
        onChange={handlePhoneNumberInput}
      />
      <EditButton />
    </>
  );
}

export { GeneralInformation };
