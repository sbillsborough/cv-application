function SaveButton({ handleClick, data }) {
  return (
    <button
      onClick={() => {
        handleClick(data);
      }}
    >
      Save
    </button>
  );
}

export { SaveButton };
