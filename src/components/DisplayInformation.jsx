function DisplayInformation({ data }) {
  return (
    <div>
      <h2>Submitted Information</h2>

      <h3>General Information</h3>
      <p>
        <strong>Full Name:</strong> {data.generalInfo?.fullName}
      </p>
      <p>
        <strong>Email:</strong> {data.generalInfo?.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {data.generalInfo?.phoneNumber}
      </p>

      <h3>Educational Experience</h3>
      <p>
        <strong>School Name:</strong> {data.education?.schoolName}
      </p>
      <p>
        <strong>Title of Study:</strong> {data.education?.studyTitle}
      </p>
      <p>
        <strong>Date of Study:</strong> {data.education?.studyDate}
      </p>

      <h3>Practical Experience</h3>
      <p>
        <strong>Company Name:</strong> {data.experience?.companyName}
      </p>
      <p>
        <strong>Job Title:</strong> {data.experience?.positionTitle}
      </p>
      <p>
        <strong>Responsibilities:</strong>
        {data.experience?.responsibilities}
      </p>
      <p>
        <strong>Years of Experience:</strong> {data.experience?.employmentDate}
      </p>
    </div>
  );
}

export { DisplayInformation };
