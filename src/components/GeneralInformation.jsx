import { useState } from "react";
import { EditButton } from "./EditButton";

function GeneralInformation() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <>
      <h2>General Information</h2>

      <EditButton />
    </>
  );
}

export { GeneralInformation };
