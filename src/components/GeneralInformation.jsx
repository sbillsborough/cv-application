import { useState } from "react";
import { SaveButton } from "./SaveButton";

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
  };

  const handleSave = () => {
    console.log("Saving General Information:", generalInformation);
  };

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
        placeholder="Full Name"
      />
      <h3>Email: {generalInformation.email}</h3>
      <input
        type="text"
        value={generalInformation.email}
        onChange={(e) => {
          handleInput(e, "email");
        }}
        placeholder="Email"
      />
      <h3>Phone Number: {generalInformation.phoneNumber}</h3>
      <input
        type="text"
        value={generalInformation.phoneNumber}
        onChange={(e) => {
          handleInput(e, "phoneNumber");
        }}
        placeholder="Phone Number"
      />
      <SaveButton handleClick={handleSave} data={generalInformation} />
    </>
  );
}

export { GeneralInformation };
